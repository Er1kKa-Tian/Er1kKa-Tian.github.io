window.MathJax = {
    tex: {
        inlineMath: [["\\(", "\\)"], ["$", "$"]],
        displayMath: [["\\[", "\\]"], ["$$", "$$"]],
        processEscapes: true,
        processEnvironments: true
    },
    options: {
        ignoreHtmlClass: ".*|",
        processHtmlClass: "arithmatex"
    }
};

document$.subscribe(() => {
    const thesis = document.getElementById("ox-thesis-page");
    if (thesis) {
        document.querySelectorAll(".md-content table").forEach((table) => {
            table.classList.add("ox-thesis-table", "arithmatex");
        });
        document.querySelectorAll(".md-content figure > p").forEach((note) => {
            note.classList.add("ox-thesis-note", "arithmatex");
        });
        document.querySelectorAll(".md-content span.math").forEach((math) => {
            math.classList.add("arithmatex");
        });
    }

    MathJax.startup.output.clearCache()
    MathJax.typesetClear()
    MathJax.texReset()
    MathJax.typesetPromise()
})
