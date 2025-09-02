// index.js
function initAllMaps() {
    document.querySelectorAll('[data-map]').forEach((el) => {
        if (el._olMap?.dispose) el._olMap.dispose();
        const map = window.buildMap?.(el);
        if (map) el._olMap = map;
    });
}

if (window.document$ && typeof window.document$.subscribe === 'function') {
    window.document$.subscribe(initAllMaps);
} else {
    // Fallback if Material's document$ isn't available yet (e.g., hard reload)
    document.addEventListener('DOMContentLoaded', initAllMaps);
}
