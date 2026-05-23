---
author: Xiaotian Tian
date: Trinity Term 2026
title: Surfing the Monetary Tide
---

<div id="ox-thesis-page"></div>

# Surfing the Monetary Tide: Financial Cycles and Effects of Monetary Policy

**This webpage is converted from the submitted PDF version. There could be conversion inconsistencies.**

<a id="acknowledgements"></a>
# Acknowledgements
My sincere gratitude goes to my supervisor, Dr. Eric Chaney, for his kind suggestions and insightful critiques, especially on the econometrics side. I would also like to extend my deep appreciation to Dr. Silvia Miranda-Agrippino, who provided help and advice far beyond her obligations.

I am indebted to my parents and other family members, who have always stood by me through their hard work and unwavering support. Special thanks also go to my grandfathers, who would have been very happy to see the completion of my studies.

This thesis would never have been completed without Yangyang. It was she who cheered me up whenever my research reached an impasse, offered suggestions when I was struggling, and congratulated me on even the smallest achievement. She is probably the only person who has travelled with me from the formation of the ideas to the final delivery of the thesis.

Kindness from my friends has also been an indispensable part of the completion of this thesis. It has always been enjoyable to pursue the same degree alongside Kaicheng, Junkai, Changzhe, Haotian, Diwen, Ruohan, Riley, and Sally. Generous support from Kuangjie, Kexin, Wentao, Yeyang, Yuxiang and many more is also acknowledged with warm gratitude.

Serendipity also played a part in ways I never imagined. My grandmother is a physicist specialising in optics and waves, so I have heard about the "Fourier stuff" since my childhood, though I never thought about its use in economics. In 2022, I audited the Advanced Macroeconomics module at UCL, taught by Dr. Franck Portier, from whom I first heard about the application of spectral analysis to business cycle analysis and filtering. The method he contributed to became one of the main pillars of my thesis. I also happened to benefit unexpectedly from my interview at the Asian Development Bank, which shaped part of the methodology. Similar stories happened frequently --- sometimes more often than I can fully realise or recall.

There are too many people to whom I should be thankful, just as there are too many things that I still do not understand. This thesis serves as a milestone in my enquiry into our economy --- probably the largest system humanity has ever built but never fully understood. Its complexity, flexibility, and recalcitrance beneath an apparent calm remind me of ocean tides: one tiny omission can draw us into a maelstrom, but with caution and practice we might yet learn to respect their strength and ride them, as the title of this thesis puts it --- "surfing the monetary tide".

<a id="abstract"></a>
# Abstract
This thesis studies the spectral properties of the medium-term financial cycle and the ability of conventional monetary policy to influence it. We start by revisiting the Domestic Financial Cycle (DFC) indicators using smoothed non-parametric spectral density estimation, bootstrap confidence intervals, and local peak tests. The results support the existence of medium-term (48--96 quarters) cycles in the United States and the United Kingdom, while more heterogeneous evidence appears in other advanced economies. Placebo comparisons with macroeconomic and global financial indicators, together with Monte Carlo experiments, support the reliability of the exercise. We then evaluate the effects of policy rates on the DFC indicators using regime-dependent local projections with high-frequency monetary policy shocks. Tightening shocks have clear contractionary effects on real activity but only weak, and sometimes perverse, effects on the financial-cycle indicators. For real variables, a "pushing on a string" effect is also observed: the responses are larger in upswings than in downswings. These patterns are robust to alternative shock measures, sub-sample exclusions, and alternative regime estimates. The findings question a rate-centred "leaning against the wind" strategy and point toward a policy mix in which macroprudential instruments carry more of the burden for financial-cycle stabilisation.

<a id="sec:introduction"></a>
# Introduction and Motivation
Financial cycles have moved from the margins to the centre of macroeconomic policy debates since the global financial crisis. Credit booms and rising property prices can persist for many years while inflation remains muted and output looks stable, yet their reversals can impose large costs on activity, employment, and public finances. The post-crisis decade has therefore made it harder to maintain the conventional separation between monetary policy, traditionally tasked with inflation and real activity, and financial stability policy, traditionally treated as prudential. If financial conditions move over horizons longer than the ordinary business cycle, and if their reversals are macroeconomically expensive, policymakers face two practical questions: how to measure these cycles, and whether the standard policy instruments can influence them.

The Domestic Financial Cycle (DFC) framework developed in the Bank for International Settlements (BIS) tradition gives one influential answer to the measurement question. The cycle of interest is not the business cycle movement of output or unemployment, but the medium-term comovement of credit and property prices (Drehmann et al. 2012; Borio 2014a). The framework matters for policy because it underpins parts of the macroprudential debate, including the countercyclical capital buffer of Basel III and the case for central banks to "lean against the wind" of financial imbalances. It also raises two empirical questions that the rest of this thesis tries to answer. Do the credit and property price indicators used to define the DFC actually contain statistically meaningful medium-term cyclical behaviour, or are observed patterns artefacts of a methodology designed to look for them? And if such cycles are present, do conventional monetary policy shocks move them with enough force, and at acceptable macroeconomic cost, to justify a rate-centred response?

The first part of the thesis revisits the empirical foundations of the DFC using frequency-domain methods. Earlier work on business cycles often questioned whether macroeconomic aggregates contain genuine cyclical structure, since many series have spectral densities with the smooth, monotonic shape associated with persistent but noncyclical processes (Granger 1966; Sargent 1987). More recent contributions show that economically meaningful cycles can be recovered once attention shifts to the right variables and the right frequency bands (Comin and Gertler 2006; Beaudry et al. 2020). Applying this logic to financial cycle indicators, we estimate smoothed non-parametric spectral densities for property price growth, real credit growth, and the credit-to-GDP ratio, and use bootstrap confidence intervals, the formal local-peak tests of Beaudry et al. (2020), and Monte Carlo spurious-cycle diagnostics to assess whether the 48--96 quarter peaks implied by the DFC framework are present in the data rather than mechanically produced by the method.

The main analysis focuses on the United States and the United Kingdom, two advanced economies with long financial series and well-developed credit and property markets. For both countries the canonical DFC indicators display visible spectral mass in the 48--96 quarter band, and the formal peak test rejects a flat (white-noise) null for all of them. Against the more demanding AR(1) null the evidence is strongest for property price growth, which is stationary and shows clear local humps, and more mixed for real credit growth and credit-to-GDP, whose stationarity properties are less clean. A complementary exercise on unemployment, the investment-to-GDP ratio, inflation, and the Global Financial Cycle factor of Miranda-Agrippino and Rey (2020) finds no comparable peaks in those series, so the DFC-band concentration is not simply a low-frequency reflection of the business cycle or of global financial conditions. Cross-country evidence for Australia, Canada, Germany, France, and Japan is markedly more heterogeneous, with only a fraction of series-country pairs rejecting the AR(1) null. The results should therefore not be read as a claim that every advanced economy shares the same financial cycle.

The second part of the thesis asks whether conventional monetary policy can shape these cycles. This connects directly to the leaning against the wind debate: leaning requires not only that financial cycles exist, but that policy rates move credit and property prices with enough force and at a tolerable cost in output and inflation. Identification is delicate because high-frequency monetary surprises can be contaminated by central bank information effects, and because transmission may itself depend on the prevailing financial cycle phase. We estimate linear and regime-dependent local projections using high-frequency policy shocks identified following Jarociński and Karadi (2020), in both the median-rotation pure monetary policy form and the "poor man's" sign-restriction alternative. The baseline panel covers the United States and euro area economies for which pure MP shocks are available, with the United Kingdom added under the poor man's identification. The regime variable is built from the financial cycle extracted in the first part, classifying each quarter as an upswing or a downswing by the sign of the lagged change in the aggregate DFC; a recursive real-time variant, estimated using only data available at each date, serves as the natural robustness check.

The monetary policy results are not favourable to a rate-centred leaning strategy. Tightening surprises contract real activity in the expected way: GDP, consumption, and investment fall, and unemployment rises. The responses of the financial cycle indicators are weaker, less precise, and in some cases run in the wrong direction for a simple leaning argument. Real credit falls only modestly, property prices do not respond consistently, and the credit-to-GDP ratio can rise after a tightening because output contracts more than credit does. State dependence sharpens the tension rather than resolving it. For the real-side variables --- output, consumption, investment, and unemployment --- the point estimates are larger in upswings than in downswings, broadly consistent with a "pushing on a string" interpretation on the downside; the DFC indicators themselves show no comparable regime contrast, and their responses remain noisy even in upswings. These patterns survive alternative shock measures, subsample exclusions, and the real-time DFC regimes.

The thesis therefore makes two connected contributions. It provides a formal frequency-domain assessment of the indicators used in an influential policy framework, rather than treating the existence of the DFC as given; and it links the resulting financial cycle measure to state-dependent monetary policy transmission, so that policy can be evaluated in precisely the states that the DFC framework itself identifies as policy-relevant. The combined evidence supports monitoring financial cycles as a distinct macro-financial object, but does not support assigning the main burden of their stabilisation to conventional interest rate policy. The more defensible policy mix is one in which monetary policy remains focused on macroeconomic stabilisation while macroprudential tools address credit- and property market vulnerabilities more directly.

The rest of the thesis proceeds as follows. Section [2](#sec:financial_cycles) reviews the literature on business-financial cycles, develops the spectral methodology, tests for medium-term peaks in the DFC indicators, evaluates spurious cycle concerns, and extracts the country-specific financial cycle regimes used in the next section. Section [3](#sec:monetary_policy) studies the effects of monetary policy using linear and regime-dependent local projections with high-frequency policy shocks, and reports robustness checks under alternative shock measures, subsamples, and real-time DFC regimes. The final section concludes.

<a id="sec:financial_cycles"></a>
# Revisiting Financial Cycles
This section takes up the first of the two questions posed in the introduction: whether the medium-term cyclical content that the BIS Domestic Financial Cycle (DFC) framework (Drehmann et al. 2012; Borio 2014a) claims to identify is statistically present in the data, or merely an artefact of the methodology used to look for it. After surveying the relevant literature on real and financial cycles, we estimate non-parametric spectral densities for the standard BIS DFC indicators, formally test whether the medium-term peaks anticipated by the literature are statistically present, and contrast the results with macroeconomic and global financial indicators. The extracted cycles also provide the country-specific phase classification used in the following section to study state dependence in monetary policy transmission.

<a id="sec:cycles_literature"></a>
## Relevant Literature
### Early Debates

Discussions of cyclical behaviour in economic activity emerged quickly after the industrial revolution. As early as 1837, the British banker and politician Samuel Jones Loyd, Lord Overstone, formulated what became known as the Overstone Cycle of Trade (Baron 1971; Laidler 2011). Interest in cycles grew steadily and proliferated in the inter-war period, with proposals ranging from short Kitchin cycles of around 40 months to 15--25 year Kuznets swings and 40--60 year Kondratieff long waves (Kitchin 1923; Kuznets 1930; Kondratieff and Stolper 1935).

With the post-World War II advance of econometrics, the dominant view became that typical economic series display no obvious cyclical behaviour: any such behaviour would imply pronounced peaks in the spectral density at the corresponding frequencies, and these were not observed in macroeconomic aggregates such as industrial production, price indices, or monetary aggregates (Cunnyngham 1963; Nerlove 1964; Granger 1966; Sargent 1987). Most series instead displayed the "typical shape" --- a smooth, monotonic spectral density similar to Figure [1](#fig:ar1_example) that increases with periodicity (decreases with frequency) and shows no meaningful cyclical concentration, at least at short or medium periodicities.

<figure id="fig:ar1_example">
<img src="../assets/demos/ar1_three_domains.png" />
<p class="ox-thesis-note arithmatex"><em>Note:</em> Simulated process: <span class="math inline arithmatex"><em>x</em><sub><em>t</em></sub> = 0.85<em>x</em><sub><em>t</em> − 1</sub> + <em>ε</em><sub><em>t</em></sub></span>, <span class="math inline arithmatex">$\varepsilon_t \overset{\text{iid}}{\sim} \mathcal{N}(0, 1)$</span>, <span class="math inline arithmatex"><em>T</em> = 200</span> quarters. The figure shows the same process in the time, frequency, and periodicity domains. Its spectral density is monotonic and does not have a local cyclical peak.</p>
<figcaption>Spectral density of AR(1) process</figcaption>
</figure>

<figure>
<img src="../assets/demos/limitcycle_three_domains.png" />
<p class="ox-thesis-note arithmatex"><em>Note:</em> Simulated process: <span class="math inline arithmatex"><em>x</em><sub><em>t</em></sub> = 1.8909<em>x</em><sub><em>t</em> − 1</sub> − 0.9025<em>x</em><sub><em>t</em> − 2</sub> + <em>ε</em><sub><em>t</em></sub></span>, <span class="math inline arithmatex">$\varepsilon_t \overset{\text{iid}}{\sim} \mathcal{N}(0, 0.09)$</span>, <span class="math inline arithmatex"><em>T</em> = 200</span> quarters. The complex roots generate a stochastic cycle with periodicity around 64 quarters. Unlike the monotone AR(1) benchmark, the spectral density has a visible peak at the cycle frequency.</p>
<figcaption>Spectral density of a stochastic cycle</figcaption>
</figure>

A second strand of work argues that many of the cycles documented in earlier studies are artefacts of incorrect detrending or filtering rather than genuine economic dynamics. Nelson and Kang (1981) highlight that detrending a series with a stochastic trend (unit root) using deterministic methods (e.g. linear trend removal) can generate spurious cyclical patterns --- the Nelson--Kang critique. The widely used Hodrick--Prescott filter is subject to similar concerns, since it can both produce spurious short cycles and suppress genuine long ones (Harvey and Jaeger 1993; Cogley and Nason 1995; Hamilton 2017).

### Recent Empirical Discussions

More recent work has revisited the earlier consensus that macroeconomic fluctuations lack clear cyclical structure. A number of studies argue that meaningful cycles may in fact be present, but obscured by aggregation, non-stationarity, or the way the data are processed. In response to the critiques of standard detrending and filtering techniques, researchers have paid more attention to flexible spectral methods, developed filters robust to mild non-stationarity (e.g. the band-pass filters of Baxter and King (1999) and Christiano and Fitzgerald (2003)), and become more careful in selecting indicators.

Comin and Gertler (2006) is an influential early application of band-pass filters to medium-term cycles that conventional filters had ignored. Analysing post-war US data, they distinguish between short-term/high-frequency cycles (2--32 quarters) and medium-term/medium-frequency cycles (2--200 quarters), and find that medium-term cycles, which co-move across technology and capital utilisation, are more volatile and more persistent than their shorter-term counterparts. Subsequent work has refined this finding and pushed back against the view that fluctuations outside the conventional business cycle band are statistical artefacts (Pancrazi 2015), motivating the more rigorous spectral density framework of Beaudry et al. (2020).

Beaudry et al. (2020) re-examine the spectral densities of US macroeconomic and financial variables from 1948 to 2015 and document statistically significant peaks at medium-term frequencies, corresponding to cycles of roughly 36--40 quarters (9--10 years). Their results point to recurrent fluctuations that had previously gone unnoticed because earlier work overlooked several key cycle indicators. They also identify a related financial cycle in the spectral density peaks of interest rate spreads, the National Financial Conditions Index, and the Shiller P/E ratio. Because their main indicators (e.g. log non-farm business hours worked per capita, the employment rate, investment-to-GDP) are stationary without any detrending step, the estimated spectral peaks are unlikely to be manifestations of spurious cycles generated by inappropriate detrending. They also develop the econometric tools for further diagnosing the existence of cycles --- bootstrap confidence intervals and formal peak tests --- on which our analysis relies.

Beyond the business cycle, financial liberalisation and globalisation since the 1980s, together with recurring financial crises, have spurred renewed interest in analysing the financial system and its associated cycles. Recent empirical work on financial cycles has typically used one of three families of methods --- time-domain methods (e.g. turning point detection), frequency-domain methods (e.g. Fourier and wavelet analysis), and model-based methods --- or combinations of them.

In the frequency domain, Aikman et al. (2015) examine the spectral densities of the credit-to-GDP ratio, the real loan growth rate, and real GDP. Using a long panel extending to the nineteenth century, they document a medium-term cycle with a duration of around 13 years and variation larger than that of the short-term cycle. Verona (2016) focuses on US data and employs the continuous wavelet transform to capture both frequency and time variation, confirming medium-term credit and property cycles and finding equity prices to be a poor proxy for the financial cycle.

A separate line of work uses models to discipline the evaluation of cycles. Strohsal et al. (2019) impose parametric structure by estimating a time-domain ARMA model and transforming it into the frequency domain to identify cycle lengths, again finding that financial cycles (10--15 year swings in credit and house prices) are longer and stronger than business cycles (2--8 year swings in real GDP). Galati et al. (2016) and de Winter et al. (2017) decompose series into short, medium, and long cycles jointly using unobserved-components time-series models; they confirm medium-term financial cycles with large amplitudes, but document considerable heterogeneity across countries and time periods.

A parallel but related strand of literature, the *Global Financial Cycle (GFCy)*, focuses on the transnational interconnection of macro-finance (see Miranda-Agrippino and Rey (2022) for a review). Asset prices, capital flows, and financial conditions co-move strongly across countries, driven by a common global factor identified using dynamic factor models, with global risk conditions and US monetary policy as its key drivers (Rey 2015; Miranda-Agrippino and Rey 2020; Kalemli-Özcan 2019; Aldasoro et al. 2020). The GFCy is a distinct object from the DFC, and we use it below as a placebo against which to compare our domestic financial cycle results[^1].

Taken together, the more recent literature provides growing evidence that fluctuations at specific frequency ranges --- and especially at medium frequencies --- carry meaningful economic content when analysed with appropriate methods, and that financial conditions are tightly interconnected across national borders.

### Domestic Financial Cycles (DFC)

Apart from the above discussions, there is another influential concept of the financial cycle which is directly relevant to our main theme: the *Domestic Financial Cycle (DFC)*[^2]. The DFC was formulated most clearly by Drehmann et al. (2012) and has since become central to the Bank for International Settlements (BIS) view of macro-financial fluctuations (Borio 2014a). Its core claim is that credit and property prices do not merely respond passively to the business cycle. They can display their own medium-term expansions and contractions, often much longer than conventional output cycles, and these financial movements can shape both the probability and the severity of subsequent downturns.

The BIS had already warned about repeated financial booms and busts, and about the costly reversal of financial imbalances, well before the 2008 global financial crisis (Borio and P. W. Lowe 2002, 2004; Borio and P. Lowe 2002). The DFC framework formalises this concern empirically. Using turning point analysis based on Bry and Boschan (1971) and Harding and Pagan (2002), together with frequency-based filtering and comparisons of relative amplitudes across macro-financial series, Drehmann et al. (2012) identify the financial cycle with the medium-term joint movement of credit and property prices. Their evidence is deliberately not based on a single variable: equity prices do not fit the same medium-term pattern well, while credit and property prices produce a more coherent domestic cycle. The estimated cycle is considerably longer and larger than the traditional business cycle; in their post-1980 sample it can last close to two decades, and output contractions are much deeper when a business cycle downturn coincides with a financial cycle contraction. Related cross-country evidence also shows that recessions associated with credit crunches and house price busts tend to be more severe, while historical evidence links larger credit booms to more painful subsequent recessions (Claessens et al. 2012; Jordà et al. 2013).

Conceptually, the DFC is best understood as a medium-term balance sheet cycle. The central mechanism is a feedback loop between credit, collateral values, and risk-taking. Rising property prices increase collateral values, which relaxes borrowing constraints and supports further credit expansion. In the upswing, easier credit then feeds back into asset demand and property prices. At the same time, higher leverage reduces the system's loss-absorbing capacity, while larger property price gaps point to a greater risk of subsequent reversals. During contractions the same mechanism works in reverse: declining collateral values tighten borrowing constraints, weaken credit growth, and amplify losses in real activity, until the balance sheet slowly recovers. This logic is related to the financial accelerator mechanism in Bernanke et al. (1998), the collateral amplification in Kiyotaki and Moore (1997), and leverage cycle accounts such as Geanakoplos (2010). The BIS contribution is not to replace these structural mechanisms with a new model, but to turn their common macro-financial implication into an empirical monitoring framework centred on slow-moving leverage and collateral valuations. Potential economic mechanisms behind the DFC will be discussed in Section [2.4.1](#sec:cycles_explanation).

This also explains why the canonical DFC indicators are credit aggregates and property prices rather than, for example, equity prices, exchange rates, capital flows, or short-term risk premia. Those variables are certainly informative about financial conditions, and they are especially important in the GFCy literature, but they are more frequent, more forward-looking, and often more exposed to global risk sentiment. Credit and property prices are instead tightly connected to domestic balance sheets, collateral constraints, and bank lending. Housing is especially important because it is both a major household asset and a key form of collateral in advanced economies. For this reason, Drehmann et al. (2012) focus on credit and property prices; Aikman et al. (2015) provide complementary long-run evidence on credit cycles and banking crisis risk; and Drehmann et al. (2018) show why credit aggregates, especially the credit-to-GDP gap, became central to the countercyclical capital buffer discussion. The DFC is therefore not intended to summarise every financial variable or all financial/business cycles. It is *one particular financial cycle* that isolates the slow-moving component of domestic leverage and collateral valuations that is most closely tied to medium-term macro-financial vulnerabilities.

The term "cycle" should therefore be interpreted carefully. In the BIS tradition, the DFC is not a deterministic clock-like oscillation with a fixed period. It is a recurrent pattern of financial imbalance accumulation and unwinding. The duration of each episode can differ across countries and historical periods, especially because financial liberalisation, monetary regimes, prudential regulation, and housing market institutions change over time. This interpretation is also consistent with evidence from frequency-domain and time-frequency studies, which generally find medium-term credit and property price fluctuations but also document heterogeneity across countries and periods (Aikman et al. 2015; Verona 2016; Strohsal et al. 2019). The empirical question is therefore not whether every economy follows the same regular cycle, but whether credit and property prices contain economically meaningful medium-term fluctuations that are distinct from standard business cycle movements.

Operationally, Drehmann et al. (2012) construct the DFC by combining band-pass filtered measures of credit and property prices, targeting variations with periodicities between 32 and 120 quarters[^3]. This frequency range is deliberately lower than the conventional business cycle band, reflecting the idea that financial imbalances build up and unwind slowly. The framework has direct policy relevance. If financial cycle peaks are associated with financial crises and deeper recessions, then policymakers may want to monitor the cycle in real-time, tighten macroprudential tools or even policy rates during expansions, and avoid interpreting credit-driven booms as purely benign improvements in fundamentals. This policy reading is also reflected in work linking financial cycle information to potential output, recession risk, and macroprudential buffer calibration (Borio et al. 2016, 2020; Drehmann et al. 2018).

For this thesis, the importance of the DFC framework is twofold. First, it gives a policy-relevant definition of the financial state: whether the domestic credit and property cycle is in an upswing or a downswing. Second, it raises a measurement question that should not be taken for granted. If the DFC is constructed using filters that target medium-term frequencies, then one should first ask whether the underlying indicators actually contain statistically meaningful spectral mass in those frequency ranges. This motivates our frequency-domain reassessment below. Rather than assuming that the BIS DFC band is present by construction, we test whether the standard DFC indicators display medium-term peaks in the data before using the extracted cycle as the state variable in the monetary policy analysis.

### Summary of the Literature and Our Contribution

To sum up, some representative cycles documented across the literature surveyed above are summarised in Table [1](#tab:cycles_summary). We also report the periodicity band classifications used in our quantitative analysis. These bands are intended to roughly distinguish the lengths of different cycles. Due to the inherent stochasticity in real-world macro-finance series, exact boundaries are often blurred, and there are certain discrepancies among different authors regarding the length of the same category of cycles. Yet minor changes in periodicity band choices do not alter our main results.

<a id="tab:cycles_summary"></a>
<table class="ox-thesis-table arithmatex">
<caption>Summary of cycles</caption>
<thead>
<tr>
<th style="text-align: left;">Cycle</th>
<th style="text-align: left;">Description</th>
<th style="text-align: left;">Periodicity (Quarters)</th>
<th style="text-align: left;">Reference</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4" style="text-align: left;"><em>Early Classical Cycles</em></td>
</tr>
<tr>
<td style="text-align: left;">Kitchin Cycle</td>
<td style="text-align: left;">Short-term inventory cycle</td>
<td style="text-align: left;"><span class="math inline arithmatex">∼</span> 10</td>
<td style="text-align: left;">Kitchin (1923)</td>
</tr>
<tr>
<td style="text-align: left;">Kuznets Swing</td>
<td style="text-align: left;">Demographic / infrastructure swing</td>
<td style="text-align: left;">60–100</td>
<td style="text-align: left;">Kuznets (1930)</td>
</tr>
<tr>
<td style="text-align: left;">Kondratieff Long Wave</td>
<td style="text-align: left;">Long technological wave</td>
<td style="text-align: left;">160–240</td>
<td style="text-align: left;">Kondratieff and Stolper (1935)</td>
</tr>
<tr>
<td colspan="4" style="text-align: left;"><em>Recent Empirical Cycles</em></td>
</tr>
<tr>
<td style="text-align: left;">Short-term Business Cycle</td>
<td style="text-align: left;">Conventional NBER-style fluctuation in real activity</td>
<td style="text-align: left;">6–32</td>
<td style="text-align: left;">NBER (2023)</td>
</tr>
<tr>
<td style="text-align: left;">Medium-term Business-Financial Cycle</td>
<td style="text-align: left;">Medium-frequency component in NFB hours worked per capita, employment, investment/GDP, bond spread, P/E ratio, etc.</td>
<td style="text-align: left;">32–50</td>
<td style="text-align: left;">Comin and Gertler (2006; Beaudry et al. 2020)</td>
</tr>
<tr>
<td style="text-align: left;">Domestic Financial Cycle (DFC)</td>
<td style="text-align: left;">Cyclical upswing/downswing of credit and property prices, identified via turning point analysis and band-pass filtering</td>
<td style="text-align: left;">32–120</td>
<td style="text-align: left;">Claessens et al. (2012) and BIS research e.g. Drehmann et al. (2012)</td>
</tr>
<tr>
<td style="text-align: left;">Global Financial Cycle (GFCy)</td>
<td style="text-align: left;">Common global factor in asset prices, capital flows, and financial conditions (not a cycle in the strict sense of recurrent upswings and downswings)</td>
<td style="text-align: left;">—</td>
<td style="text-align: left;">Rey (2015; Miranda-Agrippino and Rey 2020)</td>
</tr>
<tr>
<td colspan="4" style="text-align: left;"><em>Classification Used in Our Analysis</em></td>
</tr>
<tr>
<td style="text-align: left;">Short-term Business Cycle</td>
<td style="text-align: left;">Conventional business cycle</td>
<td style="text-align: left;">6–32</td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: left;">Medium-term Business-Financial Cycle</td>
<td style="text-align: left;">Beaudry et al. (2020)-style business-financial cycle</td>
<td style="text-align: left;">32–48</td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: left;">Medium-term Domestic Financial Cycle (DFC)</td>
<td style="text-align: left;">Drehmann et al. (2012)-style cyclical upswing/downswing of credit and property prices</td>
<td style="text-align: left;">32–120</td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: left;">Refined Medium-term Domestic Financial Cycle (DFC Refined)</td>
<td style="text-align: left;">DFC with a narrowed periodicity band</td>
<td style="text-align: left;">48–96</td>
<td style="text-align: left;"></td>
</tr>
</tbody>
</table>

<p class="ox-thesis-note arithmatex"><em>Note:</em> The periodicity bands listed here are approximate and are used to distinguish the broad lengths of different cycles. In the spectral peak tests, we use the narrower refined domestic financial cycle band to pin down 48--96 quarter peaks in the US and UK. For cycle extraction, we use the broader 32--120 quarter DFC band to allow for cross-country heterogeneity and to remain close to Drehmann et al. (2012).</p>

Against this background, our contributions to the literature on financial cycles are threefold.

First, we provide a systematic frequency-domain assessment of the Domestic Financial Cycle (DFC) indicators introduced by Drehmann et al. (2012). DFC measures have been widely adopted by the BIS and by central banks to monitor financial stability, predict banking crises, and motivate macroprudential policy --- the countercyclical capital buffer in the Basel III framework being the most prominent example (Borio 2014a; Aldasoro et al. 2020). Existing work, however, has relied predominantly on time-domain methods (e.g. turning point detection) and has stopped short of formally testing whether the targeted cyclical content is statistically present in the underlying series. We fill this gap by combining smoothed non-parametric spectral density estimation, bootstrapped pointwise confidence intervals, and the formal local-peak tests of Beaudry et al. (2020) against both a flat (white-noise) null and a smoothly monotonic AR(1) null.

Second, we apply the same toolkit to a complementary set of macroeconomic and global financial indicators --- unemployment, the investment-to-GDP ratio, inflation, and the Global Financial Cycle factor of Miranda-Agrippino and Rey (2020) --- in order to assess whether the medium-term peaks documented for DFC indicators are a distinct domestic financial phenomenon or merely a low-frequency reflection of real or global cycles. Our results show that, for the UK and US, the 48--96 quarter peaks are essentially confined to credit and property price aggregates, supporting the view that the DFC captures a separate cyclical driver rather than a slow-moving counterpart of either the business cycle or the GFCy. This sharpens the case for treating financial cycle conditions as an independent dimension of macroeconomic state.

Besides, we replicate the analysis across the United States and the United Kingdom in the main text, and extend it to other economies with available data in Appendix [6](#app:further_spec_results). This explores the heterogeneity in financial dynamics across different economies and examines the external validity of our analysis. As a by-product, the extracted DFC series yield a country-specific dating of financial upswings and downswings, which we exploit in the following section as the state variable in a state-dependent local projection analysis of monetary policy transmission.

## Data and Methodology

### Data

To evaluate medium-term financial cycles, we focus on three key financial indicators: property price year-on-year growth, real credit year-on-year growth, and the credit-to-GDP ratio. These are the central DFC indicators identified by Drehmann et al. (2012) and the subsequent DFC literature. We also consider three potential business cycle indicators --- the unemployment rate, the investment-to-GDP ratio, and the inflation rate --- in order to assess whether similar cyclical patterns appear there. [Table](#tab:spectral_var_def) provides further details on variable definitions and sources.

<a id="tab:spectral_var_def"></a>
<table class="ox-thesis-table arithmatex">
<caption>Variable definitions, variables used in spectral analysis</caption>
<thead>
<tr><th>Variable</th><th>Description</th><th>Source</th></tr>
</thead>
<tbody>
<tr><td>Property Price Growth (YoY)</td><td>Real residential property price index, year-on-year growth (%)</td><td>BIS</td></tr>
<tr><td>Real Credit Growth (YoY)</td><td>Growth rate of credit to the private non-financial sector, deflated by CPI, year-on-year growth (%)</td><td>BIS</td></tr>
<tr><td>Credit/GDP</td><td>Credit to the private non-financial sector as a percentage of GDP (%)</td><td>BIS</td></tr>
<tr><td>Unemployment Rate</td><td>Unemployment as a share of the labour force (%)</td><td>OECD/Eurostat</td></tr>
<tr><td>Investment/GDP</td><td>Gross fixed capital formation as a share of GDP (%), seasonality adjusted</td><td>IMF</td></tr>
<tr><td>Inflation Rate</td><td>CPI quarter-on-quarter log growth (%), seasonality adjusted</td><td>BIS</td></tr>
</tbody>
</table>
<p class="ox-thesis-note arithmatex"><em>Note:</em> All series are quarterly. Growth rates are log changes expressed in percent; year-on-year transformations use four-quarter differences and quarter-on-quarter inflation uses one-quarter CPI log growth. The same processed variables feed the spectral-density figures and peak tests in the chapter.</p>

All series are aggregated to quarterly frequency where necessary. Year-on-year growth rates are used rather than quarter-on-quarter growth rates to be consistent with Drehmann et al. (2012) and to bypass seasonal adjustment. When the raw series are in levels, we take logs, compute the fourth quarter difference, and multiply by 100 to obtain percentage growth rates.

The main text inspects results for the United States and the United Kingdom in detail, because both are advanced economies with well-developed industrial and financial systems and long, high-quality data coverage. Appendix [6](#app:further_spec_results) reports results for the additional economies for which data are available. Summary statistics are reported in [Table](#tab:spectral_sum_stat).

<a id="tab:spectral_sum_stat"></a>
<table class="ox-thesis-table arithmatex">
<caption>Descriptive statistics, variables used in spectral analysis</caption>
<thead>
<tr><th>Country</th><th>Variable</th><th>Unit</th><th>Coverage</th><th>N</th><th>Mean</th><th>SD</th><th>Min</th><th>Max</th></tr>
</thead>
<tbody>
<tr><td></td><td>Property Price Growth (YoY)</td><td>%</td><td>1971 Q1–2025 Q3</td><td>219</td><td>1.77</td><td>5.52</td><td>-21.56</td><td>12.06</td></tr>
<tr><td></td><td>Real Credit Growth (YoY)</td><td>%</td><td>1951 Q1–2025 Q3</td><td>299</td><td>4.01</td><td>3.51</td><td>-5.09</td><td>12.45</td></tr>
<tr><td></td><td>Credit/GDP</td><td>%</td><td>1951 Q1–2025 Q3</td><td>299</td><td>115.96</td><td>32.88</td><td>53.60</td><td>172.00</td></tr>
<tr><td></td><td>Unemployment Rate</td><td>%</td><td>1955 Q1–2026 Q1</td><td>285</td><td>5.80</td><td>1.67</td><td>3.40</td><td>13.00</td></tr>
<tr><td></td><td>Investment/GDP</td><td>%</td><td>1970 Q1–2025 Q4</td><td>224</td><td>18.99</td><td>2.13</td><td>13.97</td><td>22.96</td></tr>
<tr><td>US</td><td>Inflation Rate</td><td>%</td><td>1950 Q2–2026 Q1</td><td>304</td><td>0.86</td><td>0.80</td><td>-2.87</td><td>3.87</td></tr>
<tr><td></td><td>Property Price Growth (YoY)</td><td>%</td><td>1969 Q2–2025 Q4</td><td>227</td><td>2.79</td><td>8.82</td><td>-19.68</td><td>33.69</td></tr>
<tr><td></td><td>Real Credit Growth (YoY)</td><td>%</td><td>1964 Q1–2025 Q3</td><td>247</td><td>4.13</td><td>6.05</td><td>-14.13</td><td>19.03</td></tr>
<tr><td></td><td>Credit/GDP</td><td>%</td><td>1964 Q1–2025 Q3</td><td>247</td><td>112.95</td><td>44.78</td><td>55.20</td><td>185.20</td></tr>
<tr><td></td><td>Unemployment Rate</td><td>%</td><td>1983 Q1–2025 Q4</td><td>172</td><td>6.79</td><td>2.29</td><td>3.70</td><td>11.30</td></tr>
<tr><td></td><td>Investment/GDP</td><td>%</td><td>1995 Q1–2025 Q4</td><td>124</td><td>17.68</td><td>1.42</td><td>14.90</td><td>22.06</td></tr>
<tr><td>GB</td><td>Inflation Rate</td><td>%</td><td>1950 Q2–2026 Q1</td><td>304</td><td>1.14</td><td>1.24</td><td>-1.59</td><td>8.40</td></tr>
</tbody>
</table>
<p class="ox-thesis-note arithmatex"><em>Note:</em> Statistics use the full non-missing quarterly sample for each country-variable pair. Variables are expressed in percent; inflation is CPI quarter-on-quarter log growth and the DFC financial indicators use the transformations listed in the variable-definition table.</p>

<a id="sec:spectral_density_estimation_method"></a>
### Spectral Density Estimation
Spectral density analysis studies how the variance of a stationary time series is distributed across frequencies. A pronounced peak in the spectral density at a given frequency indicates that fluctuations at that frequency account for a relatively large share of the series' variance, and so points to a recurrent cycle of the corresponding periodicity. We use *spectrum* as shorthand for the spectral density and *periodogram* for its finite-sample, discrete-frequency estimate.

Because the spectrum is only well defined for a stationary process, we first apply the Augmented Dickey--Fuller (ADF) test (Dickey and Fuller 1979) to each series.[^4] The null hypothesis is a unit root, so rejection provides evidence in favour of stationarity. The non-rejection that the test delivers for credit-to-GDP should therefore be read as part of the cautious interpretation of credit aggregate evidence developed below.

Then, we move on to implement our non-parametric spectrum estimation. Let $x_t$, for $t=1,\dots,n$, denote the demeaned series; demeaning removes the zero-frequency component so that it does not mechanically dominate the spectrum.[^5] The discrete Fourier transform at the Fourier frequencies $\omega_j = 2\pi j/N$ is $$X(\omega_j) = \sum_{t=1}^{n} x_t\, e^{-i\omega_j t},$$ Practically, we implement the more efficient Fast Fourier Transform (FFT) algorithm, shrinking complexity to $O(N\log N)$. The raw periodogram is then $$I(\omega_j) = \frac{1}{2\pi n}\left|X(\omega_j)\right|^2,$$ where $n$ is the sample length, not the padded length. With this normalisation the integral of $I$ over $[-\pi,\pi]$ approximates the sample variance, and the asymptotic distributional results invoked in Appendix [5](#app:spectral_diagnostics) apply directly. The periodogram is a noisy estimator of the spectrum at any single frequency, so smoothing is required for graphical display and pointwise inference. The formal peak test of Section [2.2.3](#sec:spectral_diagnosis) is, however, applied to the raw (unsmoothed) periodogram, because the $\chi^2_2$ asymptotic distribution of the normalised periodogram on which it relies requires the unsmoothed version.

Specifically, to obtain a more stable estimate, we smooth the raw periodogram with a Hamming kernel. The smoothed estimator is $$\hat{f}(\omega_j) = \sum_{|k|\leq M} w(k)\, I(\omega_{j+k}),$$ where $M$ is the bandwidth parameter and $\{w(k)\}_{|k|\le M}$ are Hamming weights normalised to sum to one.[^6] The smoothed spectrum is used for graphical display and for the bootstrap confidence intervals in Section [2.2.3](#sec:spectral_diagnosis). The resulting workflow is non-parametric and avoids the spurious cycles that arise from detrending or model-based filtering, though spectral analysis remains a descriptive exercise that does not by itself establish a structural mechanism for the cycles it identifies.

<figure>
<img src="../assets/demos/spec_estimation_pipeline.png" />
<p class="ox-thesis-note arithmatex"><em>Note:</em> Example series: US credit to the private non-financial sector as a percentage of GDP, post-1980 sample. The panels illustrate the workflow from the observed quarterly series to the raw periodogram and then to the smoothed spectral density estimate used in the chapter.</p>
<figcaption>Estimation of spectral density: an example</figcaption>
</figure>

<a id="sec:spectral_diagnosis"></a>
### Further Diagnosis of Spectral Properties
To assess whether the observed spectral patterns are statistically meaningful rather than artifacts of sampling variation, two additional diagnostic exercises are conducted using methods proposed by Beaudry et al. (2020). First, pointwise confidence intervals are constructed for the estimated spectral density. Second, a formal peak test is implemented to evaluate whether the estimated spectral density displays a statistically significant local hump in the frequency range of interest.

The confidence intervals, obtained by bootstrapping, provide a measure of uncertainty around the estimated spectral density at each frequency. This makes it possible to assess whether apparent peaks are robust to estimation noise. The resulting confidence bands are reported together with the baseline spectral plots.

Because confidence intervals are pointwise, however, they are not by themselves sufficient to determine whether the spectral density has a statistically significant hump shape. A local peak is inherently a relative concept: it concerns whether spectral mass in one band is high compared with neighbouring bands. For this reason, the analysis also implements a peak test that compares the estimated spectral density in the candidate business cycle band with the surrounding lower and higher frequency regions. This provides a direct statistical assessment of whether the estimated spectral density contains a meaningful local concentration of variance in the relevant periodicity range.

These two exercises serve as a diagnostic check on the descriptive spectral evidence. The confidence intervals quantify estimation uncertainty, while the peak test evaluates whether the apparent hump in the spectrum is statistically distinguishable from a flatter or more monotone spectral shape. Full details of the bootstrap procedure and the construction of the peak test are reported in Appendix [5](#app:spectral_diagnostics).

<a id="sec:guard_against_spurious_cycles"></a>
### Guarding Against Spurious Cycles
The spurious cycle concern is particularly relevant for long macro-financial series (Nelson and Kang 1981; Perron 1989; Hamilton 2017). A frequency-domain workflow avoids imposing a finite-dimensional law of motion, but it can still be misled if noncyclical persistence, structural breaks, or inappropriate transformations concentrate variance in the target band. The spectral evidence is therefore interpreted as supporting evidence of recurrent medium-term variation, but not as direct proof of a structural cycle.

To assess this risk, Appendix [5.3](#app:spurious_cycles) reports Monte Carlo diagnostics for the 48--96 quarter DFC peak test. The exercise applies the peak test component of the empirical workflow to artificial series whose data-generating processes are known. The size-adjusted AR(1)-null test rejects close to nominal rates for standard no-cycle benchmarks, including white noise, monotone AR(1) processes, a local-to-unit-root process, and the differenced random walk. This is reassuring: the procedure is not mechanically forced to find a DFC band peak merely because a series is persistent.

The same diagnostics also identify the main cases where caution is needed. Mean shifts, long-memory persistence, and very low-frequency placebo cycles can generate excess rejections even without a stable 48--96 quarter cycle. Consequently, the empirical interpretation below puts most weight on stationary indicators with clear local spectral peaks and formal peak test rejections, while treating level-like or ambiguously stationary credit aggregates as more suggestive than definitive.

Beyond the direct Monte Carlo assessment, we also estimate the spectral density of other macroeconomic series --- unemployment, the investment-to-GDP ratio, inflation, and the GFCy factor --- as an indirect placebo exercise in Section [2.3.2](#sec:other_related_indicators). The logic is straightforward: if our workflow were prone to mechanically generating medium-term peaks, the peaks should appear in these series too; their absence raises our confidence in the DFC results.

<a id="sec:cycle_extraction"></a>
### Extraction of Cycles
Having identified the relevant frequency band for the cycles of interest, we extract the corresponding cyclical component using the Christiano--Fitzgerald (CF) band-pass filter (Christiano and Fitzgerald 2003), following Drehmann et al. (2012). The CF filter provides an optimal finite-sample approximation to the ideal band-pass filter under mild assumptions about the data-generating process, and performs well for typical macroeconomic time series even when those assumptions are not exactly satisfied. Targeting a pre-specified frequency band explicitly also avoids the implicit mixing of frequencies inherent in detrending methods such as the Hodrick--Prescott filter (Hamilton 2017).

Let $x_t$ denote the (log-transformed) time series. The filtered cyclical component $\hat{x}_t$ is obtained as a linear transformation of the data: $$\hat{x}_t = \sum_{j=-k}^{k} w_j x_{t-j},$$ where the weights $w_j$ are chosen so that the resulting series approximates the component of $x_t$ associated with periodicities within the target band, while attenuating fluctuations outside that range. Consistent with Drehmann et al. (2012), the filtering is applied to transformations of the data, typically growth rates or first differences, as attempts to stationarise the series. The filtered series is then transformed back into levels (if needed) for interpretation by cumulating the extracted cyclical component over time.

## Results

<a id="sec:cycle_results_descriptive"></a>
### Medium Term Financial Cycles
We follow the workflow described in the methodology section to evaluate the power spectrum of the medium-term financial cycle indicators. Following Drehmann et al. (2012), we transform the raw series into the property price YoY growth rate, the real credit YoY growth rate, and the credit-to-GDP ratio.[^7] This minimal transformation is also intended to limit the risk of introducing spurious cycles. To assess stationarity, we run ADF tests on both the post-1980 subsample and the full sample, with results in [Table](#tab:adf_dfc). Property price growth is strongly stationary in both countries and in both sampling periods; no clear conclusion can be drawn for real credit growth or the credit-to-GDP ratio.

<a id="tab:adf_dfc"></a>
<table class="ox-thesis-table arithmatex">
<caption>ADF stationarity tests for DFC series, full sample and post-1980 sub-sample</caption>
<thead>
<tr><th colspan="2"></th><th colspan="2">Full Sample</th><th colspan="2">Post-1980</th><th colspan="3">Critical Values</th></tr>
<tr><th>Country</th><th>Variable</th><th>$N$</th><th>ADF</th><th>$N_{80}$</th><th>ADF$_{80}$</th><th>CV 1%</th><th>CV 5%</th><th>CV 10%</th></tr>
</thead>
<tbody>
<tr><td>GB</td><td>Property Price Growth (YoY)</td><td>227</td><td>-5.697***</td><td>184</td><td>-4.700***</td><td>-3.46</td><td>-2.88</td><td>-2.57</td></tr>
<tr><td>US</td><td>Property Price Growth (YoY)</td><td>219</td><td>-3.761***</td><td>183</td><td>-3.957***</td><td>-3.46</td><td>-2.88</td><td>-2.57</td></tr>
<tr><td>GB</td><td>Real Credit Growth (YoY)</td><td>247</td><td>-3.798***</td><td>183</td><td>-2.006</td><td>-3.46</td><td>-2.88</td><td>-2.57</td></tr>
<tr><td>US</td><td>Real Credit Growth (YoY)</td><td>299</td><td>-3.329**</td><td>183</td><td>-2.528</td><td>-3.44</td><td>-2.87</td><td>-2.57</td></tr>
<tr><td>GB</td><td>Credit/GDP</td><td>247</td><td>-1.158</td><td>183</td><td>-2.362</td><td>-3.46</td><td>-2.88</td><td>-2.57</td></tr>
<tr><td>US</td><td>Credit/GDP</td><td>299</td><td>-2.258</td><td>183</td><td>-1.945</td><td>-3.44</td><td>-2.87</td><td>-2.57</td></tr>
</tbody>
</table>
<p class="ox-thesis-note arithmatex"><em>Note:</em> $H_0$: unit root; $H_1$: stationary around a constant. Lag length is selected by AIC. Critical values are reported for the full-sample test and are from MacKinnon (1994). $^{***}$, $^{**}$, and $^{*}$ denote rejection at the 1%, 5%, and 10% levels.</p>

We nonetheless retain these series in their standard DFC form rather than imposing additional transformations to enforce strict stationarity. The same series feed the spectral peak test, the bootstrap confidence intervals, and the Christiano--Fitzgerald cycle extraction used in Section [2.2.5](#sec:cycle_extraction) and in the regime classification of the next section; differencing credit-to-GDP for the peak test alone would fracture this chain and absorb precisely the slow-moving variation in leverage that the DFC framework treats as the object of interest (Drehmann et al. 2012). Appendix [5.3](#app:spurious_cycles) also shows that the peak test rejects close to nominal size for both a local-to-unit-root process and a random walk process, so mild departures from strict stationarity do not on their own inflate the rejection rate. The cost is that property price growth provides the cleanest evidence, while the peaks in real credit growth and credit-to-GDP are best read in conjunction with the bootstrap bands, the macroeconomic and GFCy placebos of Section [2.3.2](#sec:other_related_indicators), and the agreement across indicators, rather than as stand-alone evidence.

Using the FFT and a Hamming kernel, we obtain the smoothed spectral density estimates shown in Figure [2](#fig:spectral_density_us) for the US, in both the post-1980 subsample and the full sample. For all three financial indicators, spectral peaks lie in the 48--96 quarter periodicity range (12--24 years) in the post-1980 subsample, consistent with medium-term cyclical behaviour. In the full sample, distinguishable peaks remain for property price growth and real credit growth but not for the credit-to-GDP ratio. As noted in the stationarity analysis, the relative ambiguity of the peak shape for real credit growth and credit-to-GDP likely reflects the mild stochastic trends detected in those series. The bootstrap confidence intervals for the post-1980 subsample in Figure [3](#fig:spectral_ci_us) are consistent with the same reading: the peaks remain visible across all reported CI bands.

Figures [4](#fig:spectral_density_uk) and [5](#fig:spectral_ci_uk) report the corresponding results for the UK. Spectral peaks again appear within the 48--96 quarter band for all three indicators and in both subsamples, consistent with the existence of medium-term cycles.

<figure id="fig:spectral_density_us">
<img src="../assets/spectraldensity/spectraldensity_DFC_IDUS_overlay.png" />
<p class="ox-thesis-note arithmatex"><em>Note:</em> Smoothed spectral densities for US property price YoY growth (panel A), real private credit YoY growth (panel B), and credit to the private non-financial sector as a percentage of GDP (panel C). Orange line: full sample; blue line: post-1980 sample. Background shading intensity indicates three periodicity ranges: 6–32 quarters (short-term business cycles), 32–48 quarters (medium-term business-financial cycles), 48–96 quarters (medium-term financial cycles).</p>
<figcaption>Spectral density of key US financial indicators</figcaption>
</figure>

<figure id="fig:spectral_ci_us">
<img src="../assets/spectraldensity/ci/nkr13/specCI_DFC_IDUS_post1980.png" />
<p class="ox-thesis-note arithmatex"><em>Note:</em> Post-1980 bootstrapped spectral density confidence intervals for US property price YoY growth (panel A), real private credit YoY growth (panel B), and credit to the private non-financial sector as a percentage of GDP (panel C). Shaded confidence bands report 90%, 80%, and 66% intervals around the smoothed estimate. Background shading intensity indicates three periodicity ranges: 6–32 quarters (short-term business cycles), 32–48 quarters (medium-term business-financial cycles), 48–96 quarters (medium-term financial cycles).</p>
<figcaption>Spectral density confidence intervals of key US financial indicators (post-1980 sample)</figcaption>
</figure>

<figure id="fig:spectral_density_uk">
<img src="../assets/spectraldensity/spectraldensity_DFC_IDGB_overlay.png" />
<p class="ox-thesis-note arithmatex"><em>Note:</em> Smoothed spectral densities for UK property price YoY growth (panel A), real private credit YoY growth (panel B), and credit to the private non-financial sector as a percentage of GDP (panel C). Orange line: full sample; blue line: post-1980 sample. Background shading intensity indicates three periodicity ranges: 6–32 quarters (short-term business cycles), 32–48 quarters (medium-term business-financial cycles), 48–96 quarters (medium-term financial cycles).</p>
<figcaption>Spectral density of key UK financial indicators</figcaption>
</figure>

<figure id="fig:spectral_ci_uk">
<img src="../assets/spectraldensity/ci/nkr13/specCI_DFC_IDGB_post1980.png" />
<p class="ox-thesis-note arithmatex"><em>Note:</em> Post-1980 bootstrapped spectral density confidence intervals for UK property price YoY growth (panel A), real private credit YoY growth (panel B), and credit to the private non-financial sector as a percentage of GDP (panel C). Shaded confidence bands report 90%, 80%, and 66% intervals around the smoothed estimate. Background shading intensity indicates three periodicity ranges: 6–32 quarters (short-term business cycles), 32–48 quarters (medium-term business-financial cycles), 48–96 quarters (medium-term financial cycles).</p>
<figcaption>Spectral density confidence intervals of key UK financial indicators (post-1980 sample)</figcaption>
</figure>

To complement the visual evidence we apply the spectral peak tests of Section [2.2.3](#sec:spectral_diagnosis). The tests use two reference nulls: a "flat" (white-noise) null under which the spectrum is constant over the test region, and a more demanding AR(1) null under which the spectrum takes the smoothly monotonic "typical shape" of Figure [1](#fig:ar1_example). Under each null, the test asks whether the spectrum is simultaneously high in the candidate 48--96 quarter band relative to both flanking trough regions (6--48 and 96--160 quarters) --- a joint, rather than univariate, condition.[^8] The alternative is therefore a local maximum in the DFC band, and the test does not preclude additional peaks elsewhere. Reported $p$-values are Monte Carlo joint-exceedance probabilities computed under the $\chi^2_2$ asymptotic distribution of the normalised periodogram. Appendix [5.3](#app:spurious_cycles) verifies that this asymptotic null is well calibrated in finite samples for standard no-cycle benchmarks --- white noise, monotone AR(1), local-to-unit-root, and the differenced random walk all reject close to the nominal size --- so the $p$-values can be read at face value for stationary inputs.[^9] We run the tests on the full sample only: with $T\approx 184$ in the post-1980 subsample, the 48--96 quarter band contains only two raw Fourier frequencies, too few for the chi-square approximation to be reliable. As reported in [Table](#tab:peak_test_dfc), the flat null is strongly rejected for every indicator; the AR(1) null is rejected at the 5% level for property price growth in both economies, while the credit-based indicators show more mixed evidence, possibly reflecting their weaker stationarity properties.

<a id="tab:peak_test_dfc"></a>
<table class="ox-thesis-table arithmatex">
<caption>Results of peak tests for US and UK DFC indicators</caption>
<thead>
<tr><th>Variable</th><th>Country</th><th>$p$ Flat (%)</th><th>$p$ AR(1) (%)</th></tr>
</thead>
<tbody>
<tr><td>Credit/GDP</td><td>GB</td><td>0.00***</td><td>10.21</td></tr>
<tr><td>Credit/GDP</td><td>US</td><td>0.00***</td><td>4.67**</td></tr>
<tr><td>Property Price Growth (YoY)</td><td>GB</td><td>0.01***</td><td>4.85**</td></tr>
<tr><td>Property Price Growth (YoY)</td><td>US</td><td>0.00***</td><td>4.42**</td></tr>
<tr><td>Real Credit Growth (YoY)</td><td>GB</td><td>0.00***</td><td>1.03**</td></tr>
<tr><td>Real Credit Growth (YoY)</td><td>US</td><td>0.01***</td><td>24.85</td></tr>
</tbody>
</table>
<p class="ox-thesis-note arithmatex"><em>Note:</em> Peak tests are run on the full sample for the refined DFC band of 48–96 quarters. $H_0$ is either a flat white-noise spectrum or an AR(1) spectrum; $H_1$ is a spectral peak in the 48–96 quarter band relative to the flanking troughs at 6–48 and 96–160 quarters. Entries are Monte Carlo $p$-values based on 1,000,000 draws. $^{***}$, $^{**}$, and $^{*}$ denote rejection at the 1, 5, and 10 percent levels.</p>

Taken together, the visual, bootstrap, and formal test evidence support the existence of medium-term financial cycles in property prices, real credit, and credit-to-GDP. Property price growth provides the cleanest case --- stationary, with clearly distinguishable peaks and strong rejections of both nulls --- and the other two indicators reinforce the picture even if individually less clean. This adds frequency-domain support to a DFC literature that has so far relied mainly on turning point and predictability analysis.

Having pinned down the relevant frequency band, we now extract the cycles and date their upswings and downswings. For credit-to-GDP, the cycle is produced by applying the Christiano--Fitzgerald filter directly to the level series with a 32--120 quarter passband[^10]; for real credit and real property prices, the same filter is applied to YoY growth rates and the result cumulated to recover the cycle in levels. The aggregate domestic financial cycle is then the unweighted mean of the three component cycles, each rebased to zero at 1985Q1 to align their levels.[^11] Figures [6](#fig:dfc_us) and [7](#fig:dfc_uk) show the extracted cycles and their components. Visual inspection is consistent with several patterns documented by Drehmann et al. (2012; Borio 2014a; Aldasoro et al. 2020): DFCs are longer than conventional business cycles, their peaks line up with systemic banking crises, and recessions cluster in downswings. We treat these as visual observations rather than as formal tests.

<figure id="fig:dfc_us">
<img src="../assets/demos/dfc_us.png" />
<p class="ox-thesis-note arithmatex"><em>Note:</em> Coloured lines show the component cycles for property prices, real credit, and credit-to-GDP, each rebased to zero at 1985Q1 to align their levels; the black line is their unweighted average, labelled as the domestic financial cycle. Grey shading marks NBER recessions and red dashed vertical lines mark systemic banking crisis onset dates from Laeven and Valencia (2018).</p>
<figcaption>Extracted US medium-term financial cycles</figcaption>
</figure>

<figure id="fig:dfc_uk">
<img src="../assets/demos/dfc_gb.png" />
<p class="ox-thesis-note arithmatex"><em>Note:</em> Coloured lines show the component cycles for property prices, real credit, and credit-to-GDP, each rebased to zero at 1985Q1 to align their levels; the black line is their unweighted average, labelled as the domestic financial cycle. Red dashed vertical lines mark systemic banking crisis onset dates from Laeven and Valencia (2018). No recession shading is shown for the UK.</p>
<figcaption>Extracted UK medium-term financial cycles</figcaption>
</figure>

<a id="sec:other_related_indicators"></a>
### Other Related Indicators
As an additional exercise, we examine the spectral properties of three traditional business cycle indicators: the unemployment rate, the investment-to-GDP ratio, and the inflation rate. The smoothed spectral density estimates and confidence intervals appear in Figures [8](#fig:spectral_density_macro_us), [9](#fig:spectral_ci_macro_us), [10](#fig:spectral_density_macro_uk), and [11](#fig:spectral_ci_macro_uk). With the exception of the US investment-to-GDP ratio, all series display some cyclicality within the conventional short-term business cycle range or in the 32--48 quarter band associated with Beaudry et al. (2020), but no peak appears within the 48--96 quarter band. The same holds for the Global Financial Cycle (GFCy) factor in Figure [12](#fig:spectral_property_gfcy), which displays a sharp peak in the 36--48 quarter range, consistent with the existing literature that aligns the GFCy with shorter-term business cycles (Aldasoro et al. 2020). These findings indicate that medium-term Domestic Financial Cycles, best characterised by property prices, real credit, and the credit-to-GDP ratio, are distinct cyclical phenomena from the other cycles identified in the literature.

This exercise also functions as a placebo test for spurious cycles. The unemployment rate, the investment-to-GDP ratio, and the inflation rate share several time-series properties with the DFC indicators (potential structural breaks, long memory, partial integration), so a workflow that mechanically generated medium-term peaks should produce them here as well. The fact that 48--96 quarter peaks consistently appear in the DFC indicators but not in these comparison series makes it unlikely that the DFC peaks are spurious.

<figure id="fig:spectral_density_macro_us">
<img src="../assets/spectraldensity/spectraldensity_REAL_IDUS_overlay.png" />
<p class="ox-thesis-note arithmatex"><em>Note:</em> Smoothed spectral densities for US unemployment (panel A), investment-to-GDP (panel B), and CPI quarter-on-quarter inflation (panel C). Orange line: full sample; blue line: post-1980 sample. Background shading intensity indicates three periodicity ranges: 6–32 quarters (short-term business cycles), 32–48 quarters (medium-term business-financial cycles), 48–96 quarters (medium-term financial cycles).</p>
<figcaption>Spectral density of key US macroeconomic indicators</figcaption>
</figure>

<figure id="fig:spectral_ci_macro_us">
<img src="../assets/spectraldensity/ci/nkr13/specCI_REAL_IDUS_post1980.png" />
<p class="ox-thesis-note arithmatex"><em>Note:</em> Post-1980 bootstrapped spectral density confidence intervals for US unemployment (panel A), investment-to-GDP (panel B), and CPI quarter-on-quarter inflation (panel C). Shaded confidence bands report 90%, 80%, and 66% intervals around the smoothed estimate. Background shading intensity indicates three periodicity ranges: 6–32 quarters (short-term business cycles), 32–48 quarters (medium-term business-financial cycles), 48–96 quarters (medium-term financial cycles).</p>
<figcaption>Spectral density confidence intervals of key US macroeconomic indicators (post-1980 sample)</figcaption>
</figure>

<figure id="fig:spectral_density_macro_uk">
<img src="../assets/spectraldensity/spectraldensity_REAL_IDGB_overlay.png" />
<p class="ox-thesis-note arithmatex"><em>Note:</em> Smoothed spectral densities for UK unemployment (panel A), investment-to-GDP (panel B), and CPI quarter-on-quarter inflation (panel C). Orange line: full sample; blue line: post-1980 sample. Background shading intensity indicates three periodicity ranges: 6–32 quarters (short-term business cycles), 32–48 quarters (medium-term business-financial cycles), 48–96 quarters (medium-term financial cycles).</p>
<figcaption>Spectral density of key UK macroeconomic indicators</figcaption>
</figure>

<figure id="fig:spectral_ci_macro_uk">
<img src="../assets/spectraldensity/ci/nkr13/specCI_REAL_IDGB_post1980.png" />
<p class="ox-thesis-note arithmatex"><em>Note:</em> Post-1980 bootstrapped spectral density confidence intervals for UK unemployment (panel A), investment-to-GDP (panel B), and CPI quarter-on-quarter inflation (panel C). Shaded confidence bands report 90%, 80%, and 66% intervals around the smoothed estimate. Background shading intensity indicates three periodicity ranges: 6–32 quarters (short-term business cycles), 32–48 quarters (medium-term business-financial cycles), 48–96 quarters (medium-term financial cycles).</p>
<figcaption>Spectral density confidence intervals of key UK macroeconomic indicators (post-1980 sample)</figcaption>
</figure>

<figure id="fig:spectral_property_gfcy">
<img src="../assets/spectraldensity/gfcy_spectral_panel.png" />
<p class="ox-thesis-note arithmatex"><em>Note:</em> Panel A plots the quarterly Global Financial Cycle factor of Miranda-Agrippino and Rey (2020). Panel B reports its smoothed spectral density, and panel C reports bootstrapped confidence intervals. Background shading intensity indicates three periodicity ranges: 6–32 quarters (short-term business cycles), 32–48 quarters (medium-term business-financial cycles), 48–96 quarters (medium-term financial cycles). The figure is used as a placebo comparison with the domestic financial cycle indicators.</p>
<figcaption>Series and spectral density of the global financial cycle (GFCy) factor</figcaption>
</figure>

<a id="sec:cycle_to_regime"></a>
### From Spectral Evidence to a Regime Indicator
The monetary policy analysis of the next section uses the financial cycle phase as a state variable in regime-dependent local projections. We define this regime by the sign of the change in the aggregate DFC, $$s_{i,t} = \mathbf{1}\!\left[\Delta \text{DFC}_{i,t} > 0\right],$$ and interact the monetary policy shock with its one quarter lag $s_{i,t-1}$ so that the regime is predetermined with respect to the shock. Classifying by the sign of $\Delta\text{DFC}$ avoids the need for a threshold parameter, a turning point algorithm, or a judgement call about where the peak of a given cycle lies; the cost is that quarters close to a turning point carry little information. Section [3.2.2](#sec:lp_method) also describes a recursive real-time variant in which the cycle is re-estimated using only data available up to each date.

The empirical weight that should be placed on this classification differs across countries. The US and UK have the longest financial data and the strongest formal peak test evidence, and they drive the baseline message of the next section. For the other five economies the cross-country evidence in Appendix [6](#app:further_spec_results) is markedly weaker, but we construct the same regime indicator there because the extraction is country-by-country and the classification rule depends only on the local sign of $\Delta\text{DFC}$, not on a strong claim about its periodicity. The cross-country results should therefore be read with this weaker spectral evidence in mind, and the headline conclusions weighted more heavily on the US and UK.

## Discussions

<a id="sec:cycles_explanation"></a>
### Understanding the Cycles
The empirical results above raise a natural question: what kind of economic mechanism could generate the patterns we have documented? We do not commit to a particular structural model. The medium-term financial cycle sits awkwardly between two well-developed but largely separate research programmes, and no single workhorse framework yet delivers all the features the evidence in this chapter demands of it. Rather than survey those frameworks in the abstract, it is useful to organise the discussion around three such features: a domestic medium-term periodicity of roughly twelve to twenty-four years, concentrated in credit and property price aggregates and distinct from both the short-run business cycle; asymmetric and nonlinear dynamics, with peaks aligned with systemic banking crises and recessions clustered in downswings rather than mirror image oscillations around a smooth trend; and cross-country heterogeneity, with the spectral evidence strong for the US and UK but considerably weaker and more indicator-specific for the five additional advanced economies in Appendix [6](#app:further_spec_results).

Consider first the periodicity. A structural account of the DFC should generate a cycle length close to the empirical 48--96 quarter range as an endogenous property, not as a transformation of the autocorrelation of some exogenous shock. The financial-frictions strand of modern macroeconomics --- the financial accelerator of Bernanke et al. (1998), the collateral-constraint model of Kiyotaki and Moore (1997), and the intermediary balance sheet frameworks of Gertler and Kiyotaki (2010; He and Krishnamurthy 2013; Brunnermeier and Sannikov 2014) --- supplies tractable amplification through net worth, collateral values, and intermediary capacity, but in their standard linearised forms the dominant periodicity is largely inherited from the persistence of the driving shocks. Limit cycle approaches are the main exception. Beaudry et al. (2020) show that strategic complementarities in household debt and durable-good decisions can push the deterministic skeleton of an otherwise standard model past a Hopf bifurcation, so that the economy converges to a stochastic limit cycle whose dominant frequency is determined by deep complementarity parameters rather than by shock persistence. Geanakoplos (2010) produces similarly long-lived cyclical dynamics from heterogeneous beliefs and endogenous margins, though at the cost of stepping outside the representative-agent framework. These approaches can in principle generate the observed periodicity; they have yet to be integrated into a standard macro-finance setting with credit, collateral, and intermediaries.

A second requirement is the production of slow accumulations followed by sharper unwindings, rather than symmetric oscillations. The financial-instability hypothesis of Minsky (1986, 1992), later synthesised by Aliber and Kindleberger (2017), fits this picture closely: long periods of stability erode the perceived need for prudent finance, balance sheets drift from hedge to speculative and eventually Ponzi positions, and a relatively minor shock can trigger a sharp reversal. The mechanism is intuitive but informal, and several quantitative contributions have attempted to embed related dynamics in equilibrium frameworks. Boissay et al. (2016) insert an interbank market with adverse selection into a conventional DSGE setting and obtain endogenous banking crises that arise from prolonged expansions. Bordalo et al. (2020) show that diagnostic expectations, under which agents overweight recent news, can generate endogenous credit booms followed by busts even in otherwise standard models. Adrian and Shin (2010, 2014) provide complementary evidence and theory on procyclical intermediary leverage that contributes to slow build-ups and abrupt unwindings. The limitation here is methodological as well as conceptual: most quantitatively serious macro-finance models are solved by perturbation around a stochastic steady state, which restricts by construction the size and asymmetry of the dynamics they can produce, even when the underlying mechanism is asymmetric in principle.

The third feature, cross-country heterogeneity, is harder for representative-agent models to accommodate. As shown in Appendix [6](#app:further_spec_results), the strength and indicator composition of the DFC differ substantially across our seven economies. Comparable heterogeneity in financial cycles and household-debt dynamics has been documented in broader cross-country panels (de Winter et al. 2017; Mian et al. 2017; Jorda et al. 2016), and can be mapped onto institutional differences --- the structure of housing finance, the balance between bank- and market-based intermediation, the design of prudential regimes, and position in the money hierarchy (Calza et al. 2013; Kuttner and Shim 2016; de Souza 2025) --- that are largely absent from standard macro-finance settings. The pattern we document is therefore most naturally read as an argument for models with explicit institutional and distributional content, rather than as a challenge to the DFC framework itself.

These three considerations help explain why no consensus structural model has yet emerged. Cycle length is rarely an organic prediction; nonlinearity and asymmetry are typically truncated by perturbation methods; cross-sectional and distributional channels are usually abstracted away; expectations formation of the kind a Minsky-style mechanism requires sits uneasily with rational expectations; and even where individual mechanisms are well understood in isolation, integrating them with monetary policy, macroprudential regulation, and an open-economy environment in a single tractable framework remains difficult. Besides, there are even more fundamental critiques questioning whether the general-equilibrium framework itself is well suited to a modern monetary economy, particularly because of its conflation of "saving" and "financing".[^12]

The empirical strategy adopted in this thesis takes this assessment as a starting point. The spectral evidence and the regime-dependent local projections that follow are designed to be informative about the existence and policy relevance of medium-term financial fluctuations without committing to a particular structural mechanism. The reading that financial imbalances accumulate slowly through credit and collateral feedback, are amplified by behaviour that becomes more risk-tolerant during long expansions, and unwind nonlinearly when the cycle turns is consistent with several of the frameworks discussed above. Pinning down a single theory that delivers the medium-term periodicity, the asymmetric boom-bust dynamics, the cross-country heterogeneity, and the state-dependent transmission patterns documented in the rest of the thesis is left for future work.

### Limitations

The evidence in this chapter is strongest when read as a set of mutually reinforcing results rather than as a claim that every financial series contains the same structural cycle. Three qualifications already raised at the relevant points in the chapter are worth restating together. First, frequency-domain methods are most transparent when the underlying series are stationary, so the cleanest evidence comes from property price growth, while real credit growth and credit-to-GDP should be read in conjunction with the other diagnostics rather than as stand-alone evidence (Section [2.3.1](#sec:cycle_results_descriptive)). Second, the Monte Carlo diagnostics of Appendix [5.3](#app:spurious_cycles) show that the peak test is not mechanically forced to reject for standard no-cycle benchmarks, but structural breaks and long-memory persistence remain identifiable failure modes that warrant caution for credit-aggregate evidence in particular. Third, the cross-country evidence is not uniform: similar medium-term patterns appear in the additional advanced economies of Appendix [6](#app:further_spec_results), but their strength and indicator composition differ in ways that point to genuine institutional heterogeneity rather than to a universal cycle (Section [2.3.3](#sec:cycle_to_regime), Section [2.4.1](#sec:cycles_explanation)).

<a id="sec:monetary_policy"></a>
# Effects of Monetary Policy in Financial Cycles
Building on the previous section, which supported the existence of medium-term domestic financial cycles in credit and property price aggregates, this section asks whether conventional monetary policy can meaningfully shape these cycles, and whether its effects depend on the prevailing financial cycle phase. We address both questions using regime-dependent local projections with high-frequency monetary policy shocks, identified following Jarociński and Karadi (2020) to purge central bank information effects, on a panel that covers the United States and euro area economies in the baseline, with the United Kingdom added under a secondary "poor man's" sign-restriction identification. The headline finding is that conventional monetary policy has limited and sometimes perverse traction on the DFC indicators relative to its clear effects on real activity, and the state dependence we estimate appears mainly on the real side rather than in the DFC indicators themselves --- a pattern we develop and qualify in the rest of the section.

<a id="relevant-literature"></a>
## Relevant Literature
### Effects of Monetary Policy on Property Prices and Credit

Our work contributes to a large empirical literature on the effects of monetary policy on property prices and credit. The literature generally finds that policy rates affect house prices, although the estimated magnitude is modest relative to broader macroeconomic responses. For the United States, Del Negro and Otrok (2007), using a Bayesian dynamic factor model on quarterly state-level house price data, find that monetary policy matters but that its contribution to the overall US housing boom is limited. Jarociński and Smets (2008), using a Bayesian VAR with an explicit housing sector, document sizeable and persistent house price responses to monetary policy shocks, implying that interest rate policy does shape housing valuations. Aastveit and Anundsen (2022) use more granular data across 263 US metropolitan areas and show that the effect varies with local housing supply elasticities and with the sign of the shock.

A second strand draws on international evidence. Dokko et al. (2011), comparing observed housing outcomes with those predicted by VARs estimated on earlier samples, argue that monetary policy was not the main driver of the 2000s global housing boom. Calza et al. (2013), in a cross-country VAR for industrialised economies, find that house prices respond significantly to monetary policy shocks, with stronger responses in economies with more flexible mortgage markets. Jordà et al. (2015) exploit the exchange-rate trilemma to identify monetary policy shocks --- economies with fixed exchange rates inherit short-rate fluctuations that are unrelated to domestic conditions --- and use instrumental-variable local projections to estimate that a one percentage point tightening induces house-price-to-income responses that peak at $-5.02\%$ around three years out.

Review and meta-analytic work delivers a consistent message. Williams (2016) surveys 11 studies on US and international samples and finds that, although house prices respond negatively to policy rates, real activity (real GDP, private consumption, and other measures) responds about 3.9 times as strongly on the median estimate, pointing to substantial macroeconomic costs of suppressing house prices via the policy rate. The meta-analysis of Ehrenbergerova et al. (2023) based on 237 estimates places the average response of house prices to a one percentage point policy rate tightening at roughly $-1.2\%$ at the two-year horizon, with larger effects when the credit-to-GDP ratio is high and after sustained house price increases.

For credit, the literature is more uniformly negative: tightening shocks suppress credit, and the empirical support is generally stronger than for house prices, though state dependence is pervasive. Aikman et al. (2016) use a Bayesian VAR with Cholesky identification and find that the credit-to-GDP gap responds negatively to federal funds rate shocks, in a regime-dependent way. Alpanda and Zubairy (2019; Alpanda et al. 2021) estimate local projections with several identification strategies (the narrative shocks of Romer and Romer (2004), sign restrictions, and short-run restrictions), and document a significant increase in the credit-to-GDP ratio following monetary easing in the US and in a panel of eighteen advanced economies, with asymmetries across high and low debt states. The negative effect of policy rates on credit also appears in other economies and in granular datasets (Jiménez et al. 2012; Jordà et al. 2020; Miranda-Agrippino et al. 2026).

### State Dependence of Monetary Policy Effects

We also contribute to a literature on state dependence in monetary policy transmission. Most of this literature focuses on the business cycle and reaches mixed conclusions. Lo and Piger (2005) use a Markov regime-switching unobserved components model on US data and distinguish "high response" and "low response" regimes; the high-response regimes coincide with recessions, and they conclude that monetary policy is more effective in downturns. Peersman and Smets (2002; Bruns and Piffer 2021) reach similar conclusions for European data using VARs. Tenreyro and Thwaites (2016), by contrast, find the opposite for the US: monetary policy is less powerful in recessions --- the well-known "pushing on a string" result. They estimate a smooth-transition local projection using narrative shocks in the spirit of Romer and Romer (2004). Jordà et al. (2020), using the trilemma instrument and a long panel since 1870, also document attenuation of monetary policy effects on real GDP during slumps, and Alpanda et al. (2021) reach the same conclusion on a panel of eighteen advanced economies with sign and short-run restrictions.

A smaller literature assesses the effectiveness of monetary policy across financial states. Most of this work focuses on the credit-to-GDP gap defined as the deviation from an HP-filtered trend with a large smoothing parameter, following Borio and P. Lowe (2002; Borio and Lowe 2004; Borio and Drehmann 2009). Aikman et al. (2016) apply a threshold BVAR on US data and find that monetary policy is less effective when the household credit-to-GDP gap is high. Alpanda and Zubairy (2019) reach a similar conclusion using local projections and narrative shocks, and Alpanda et al. (2021) reaffirm it on a panel with alternative identification strategies.

A recurring concern with this literature is that the trends and cycles used to define the regimes are typically ad hoc. There is no economic reason why an HP-filtered trend with a fixed smoothing parameter (e.g. $\lambda = 1{,}600$) should be interpreted as "potential" and deviations as "cycles", a critique that has been pressed forcefully by Borio et al. (2016; Hamilton 2017; Beaudry et al. 2020). We contribute to this discussion by using the formally tested medium-term financial cycle of Section [2](#sec:financial_cycles) as the regime variable. We also revisit the standard identification, in which high-frequency monetary surprises may be contaminated by central bank information effects, by adopting the two methods of Jarociński and Karadi (2020) to extract pure monetary shocks. Finally, we document regime-dependent dynamics behind the price puzzle familiar from much of the empirical macro literature (Ramey 2016), showing that it is concentrated in financial cycle downswings.

## Data and Methodology

### Data

We use four panel datasets in this section, reflecting two identification strategies for the monetary policy shock and two methods for constructing the DFC regime indicator. As summarised in [Table](#tab:mp_est_samples), the first two datasets use the median-rotation method of Jarociński and Karadi (2020) to identify high-frequency monetary policy shocks (we denote as "pure MP shocks"); the other two use the "poor man's" sign-restriction method proposed in the same paper. The shock identification and corresponding descriptive statistics are discussed in Section [3.2.3](#sec:mp_identification); the distinction between full-information and real-time DFC regimes is set out in Section [3.2.2](#sec:lp_method). The baseline panel uses pure MP shocks combined with the full-information regime; the other three panels serve as robustness checks.

Some descriptive statistics are provided in [Table](#tab:mp_descstats_outcomes). All panels are slightly unbalanced due to data availability. When calculating sample statistics, we restrict the US and euro area series in line with the coverage period of our main panel ("Pure MP Shocks + Full-information Regime"). For the UK series, we restrict the coverage in line with the time span of the "Poor Man's Method + Full-information Regime" panel. Reported figures are calculated for level series. For some outcome variables (real property price index, real credit, real GDP, CPI, real consumption, and real investment), we use their log form in local projections later.

<a id="tab:mp_est_samples"></a>
<table class="ox-thesis-table arithmatex">
<caption>Estimation samples by identification method and regime measure</caption>
<thead>
<tr><th>Panel</th><th>Economies</th><th>US</th><th>EA Members</th><th>GB</th></tr>
</thead>
<tbody>
<tr><td>Pure MP Shocks + Full-information Regime</td><td>US + EA (11 economies)</td><td>1990Q1–2026Q1</td><td>1999Q1–2025Q4</td><td>— (unavailable)</td></tr>
<tr><td>Pure MP Shocks + Real-time Regime</td><td>US + EA (9 economies)</td><td>1990Q1–2026Q1</td><td>1999Q1–2025Q4</td><td>— (unavailable)</td></tr>
<tr><td>Poor Man's Method + Full-information Regime</td><td>US + GB + EA (12 economies)</td><td>1991Q3–2019Q2</td><td>1999Q1–2021Q1</td><td>1997Q2–2026Q1</td></tr>
<tr><td>Poor Man's Method + Real-time Regime</td><td>US + GB + EA (10 economies)</td><td>1991Q3–2019Q2</td><td>1999Q1–2021Q1</td><td>1997Q2–2026Q1</td></tr>
</tbody>
</table>
<p class="ox-thesis-note arithmatex"><em>Note:</em> Full-information EA panels include FR, DE, IT, ES, NL, BE, FI, IE, PT, and GR; real-time EA panels include FR, DE, IT, ES, NL, BE, FI, and IE because recursive real-time DFC regimes are unavailable for PT and GR. All listed EA members adopt the euro in 1999Q1 except GR, which enters from 2001Q1. Each country enters a regime-dependent specification only in quarters where the relevant shock and regime variables are non-missing.</p>

<a id="tab:mp_descstats_outcomes"></a>
<table class="ox-thesis-table arithmatex">
<caption>Descriptive statistics, variables used in the monetary policy section</caption>
<thead>
<tr><th>Country</th><th>Variable</th><th>Unit</th><th>Coverage</th><th>N</th><th>Mean</th><th>SD</th><th>Min</th><th>Max</th></tr>
</thead>
<tbody>
<tr><td></td><td>Real property price index</td><td>Index 2010 = 100</td><td>1990 Q1–2025 Q3</td><td>143</td><td>114.05</td><td>25.60</td><td>82.26</td><td>161.39</td></tr>
<tr><td></td><td>Real credit</td><td>Billion USD</td><td>1990 Q1–2025 Q3</td><td>143</td><td>21,434.63</td><td>5,981.18</td><td>11,904.75</td><td>29,652.28</td></tr>
<tr><td></td><td>Credit/GDP</td><td>%</td><td>1990 Q1–2025 Q3</td><td>143</td><td>145.27</td><td>15.88</td><td>118.20</td><td>172.00</td></tr>
<tr><td></td><td>Real GDP</td><td>Billion USD</td><td>1990 Q1–2025 Q4</td><td>144</td><td>4,093.71</td><td>989.08</td><td>2,487.98</td><td>6,027.96</td></tr>
<tr><td></td><td>CPI</td><td>Index 2010 = 100</td><td>1990 Q1–2026 Q1</td><td>145</td><td>96.79</td><td>24.11</td><td>58.72</td><td>149.51</td></tr>
<tr><td></td><td>Unemployment rate</td><td>%</td><td>1990 Q1–2026 Q1</td><td>145</td><td>5.67</td><td>1.73</td><td>3.53</td><td>13.00</td></tr>
<tr><td></td><td>Real consumption</td><td>Billion USD</td><td>1990 Q1–2025 Q4</td><td>144</td><td>3,371.31</td><td>806.17</td><td>2,079.79</td><td>4,939.64</td></tr>
<tr><td>US</td><td>Real investment</td><td>Billion USD</td><td>1990 Q1–2025 Q4</td><td>144</td><td>834.12</td><td>256.69</td><td>405.61</td><td>1,351.42</td></tr>
<tr><td></td><td>Real property price index</td><td>Index 2010 = 100</td><td>1997 Q2–2025 Q4</td><td>109</td><td>98.33</td><td>20.11</td><td>47.22</td><td>122.22</td></tr>
<tr><td></td><td>Real credit</td><td>Billion GBP</td><td>1997 Q2–2025 Q3</td><td>108</td><td>2,547.90</td><td>470.25</td><td>1,309.04</td><td>3,080.00</td></tr>
<tr><td></td><td>Credit/GDP</td><td>%</td><td>1997 Q2–2025 Q3</td><td>108</td><td>155.88</td><td>18.44</td><td>109.60</td><td>185.20</td></tr>
<tr><td></td><td>Real GDP</td><td>Billion GBP</td><td>1997 Q2–2025 Q4</td><td>109</td><td>583.93</td><td>74.99</td><td>434.20</td><td>705.57</td></tr>
<tr><td></td><td>CPI</td><td>Index 2010 = 100</td><td>1997 Q2–2026 Q1</td><td>110</td><td>106.60</td><td>22.26</td><td>78.27</td><td>156.32</td></tr>
<tr><td></td><td>Unemployment rate</td><td>%</td><td>1997 Q2–2025 Q4</td><td>109</td><td>5.49</td><td>1.29</td><td>3.70</td><td>8.40</td></tr>
<tr><td></td><td>Real consumption</td><td>Billion GBP</td><td>1997 Q2–2025 Q4</td><td>109</td><td>482.91</td><td>64.80</td><td>344.40</td><td>582.16</td></tr>
<tr><td>GB</td><td>Real investment</td><td>Billion GBP</td><td>1997 Q2–2025 Q4</td><td>109</td><td>104.57</td><td>19.42</td><td>73.67</td><td>150.56</td></tr>
<tr><td></td><td>Real property price index</td><td>Index 2010 = 100</td><td>1999 Q1–2025 Q4</td><td>1063</td><td>98.07</td><td>20.46</td><td>52.77</td><td>189.31</td></tr>
<tr><td></td><td>Real credit</td><td>Billion EUR</td><td>1999 Q1–2025 Q3</td><td>1062</td><td>1,509.75</td><td>1,354.88</td><td>110.13</td><td>5,024.16</td></tr>
<tr><td></td><td>Credit/GDP</td><td>%</td><td>1999 Q1–2025 Q3</td><td>1062</td><td>175.70</td><td>63.64</td><td>58.10</td><td>377.00</td></tr>
<tr><td></td><td>Real GDP</td><td>Billion EUR</td><td>1999 Q1–2025 Q4</td><td>1071</td><td>234.62</td><td>219.17</td><td>27.70</td><td>774.37</td></tr>
<tr><td></td><td>CPI</td><td>Index 2010 = 100</td><td>1999 Q1–2025 Q4</td><td>1072</td><td>103.40</td><td>15.02</td><td>72.65</td><td>148.34</td></tr>
<tr><td></td><td>Unemployment rate</td><td>%</td><td>1999 Q1–2025 Q4</td><td>1072</td><td>9.14</td><td>4.59</td><td>2.90</td><td>28.07</td></tr>
<tr><td></td><td>Real consumption</td><td>Billion EUR</td><td>1999 Q1–2025 Q4</td><td>1069</td><td>178.00</td><td>168.32</td><td>17.71</td><td>602.21</td></tr>
<tr><td>EA</td><td>Real investment</td><td>Billion EUR</td><td>1999 Q1–2025 Q4</td><td>1069</td><td>50.88</td><td>46.39</td><td>4.41</td><td>168.40</td></tr>
</tbody>
</table>
<p class="ox-thesis-note arithmatex"><em>Note:</em> US and EA are restricted to the pure MP (JK) shock sample coverage, 1990Q1–2026Q1 and 1999Q1–2025Q4, respectively; GB is restricted to the poor man's shock sample coverage, 1997Q2–2026Q1. EA pools FR, DE, IT, ES, NL, BE, FI, IE, PT, and GR; coverage shows the earliest start to latest end across members. Credit/GDP and unemployment are in percent. Real credit is in billions of domestic currency at 2010 constant prices. Real GDP, consumption, and investment are divided by one billion and expressed in billions of domestic currency. Property-price and CPI variables are index numbers.</p>

<a id="tab:mp_var_def"></a>
<table class="ox-thesis-table arithmatex">
<caption>Variable definitions, variables used in the monetary policy section</caption>
<thead>
<tr><th>Variable</th><th>Description</th><th>Units</th><th>Source</th></tr>
</thead>
<tbody>
<tr><td>Real property price index</td><td>Real residential property prices index</td><td>Index, 2010 = 100</td><td>BIS</td></tr>
<tr><td>Real credit</td><td>Total credit to the private non-financial sector, CPI-deflated, at 2010 constant prices</td><td>Domestic currency, billion</td><td>BIS</td></tr>
<tr><td>Credit/GDP</td><td>Total credit to private non-financial sector as a share of GDP</td><td>%</td><td>BIS</td></tr>
<tr><td>Real GDP</td><td>Gross domestic product, constant 2010 prices, seasonally adjusted</td><td>Domestic currency, billion</td><td>IMF QNEA</td></tr>
<tr><td>CPI</td><td>Consumer price index, quarterly average of monthly observations</td><td>Index, 2010 = 100</td><td>BIS</td></tr>
<tr><td>Unemployment rate</td><td>Unemployment as a share of the labour force, seasonally adjusted</td><td>%</td><td>OECD / Eurostat</td></tr>
<tr><td>Real consumption</td><td>Final consumption expenditure, constant 2010 prices, seasonally adjusted</td><td>Domestic currency, billion</td><td>IMF QNEA</td></tr>
<tr><td>Real investment</td><td>Gross capital formation, constant 2010 prices, seasonally adjusted</td><td>Domestic currency, billion</td><td>IMF QNEA</td></tr>
<tr><td>Poor man's shock</td><td>JK poor man's MP shock: target surprise with CB-information-contaminated events zeroed out (same-sign shock and stock return). US/EA: JK monthly series summed to quarterly. GB: UKMPD Target filtered by FTSE100 future first month contract co-movement.</td><td>% p.a.</td><td>Jarociński and Karadi (2020); Braun et al. (2026)</td></tr>
<tr><td>Pure MP shock (JK)</td><td>JK median rotation: component of target surprise orthogonal to contemporaneous stock price movements. Monthly series with zeros on non-meeting months, summed to quarterly.</td><td>% p.a.</td><td>Jarociński and Karadi (2020)</td></tr>
<tr><td>DFC upswing (regime)</td><td>Binary regime indicator: 1 if DFC rose in the prior quarter, 0 otherwise. DFC is the unweighted average of normalised property price, real credit, and credit/GDP cycle components (constructed in the previous section); BIS series used as fallback for GR and PT.</td><td>0/1</td><td>BIS / own construction</td></tr>
</tbody>
</table>
<p class="ox-thesis-note arithmatex"><em>Note:</em> All variables are quarterly. The descriptive tables report level variables in their original units, while the local projections use log levels for real property prices, real credit, real GDP, CPI, real consumption, and real investment. Monetary-policy shocks are quarterly sums of high-frequency target surprises and are expressed in percentage points per annum.</p>

<figure id="fig:dfc_regime_dist">
<img src="../assets/monetary_policy/dfc_regime_heatmap.png" style="width:90.0%" />
<p class="ox-thesis-note arithmatex"><em>Note:</em> The heatmap reports the predetermined DFC regime used in the baseline regime-dependent local projections. Orange indicates an upswing, defined by a positive lagged change in the extracted DFC; blue indicates a downswing; grey indicates quarters with missing regime information. Euro area member countries enter from their available monetary policy shock sample.</p>
<figcaption>DFC regime by economy and time (quarter)</figcaption>
</figure>

<a id="sec:lp_method"></a>
### Local Projection
We use local projections (LP) to assess the dynamic impact of monetary policy, following the approach of Jordà (2005). Compared with vector autoregressions (VAR), LP has traditionally been viewed as "trading bias for variance": it is less prone to misspecification bias, but may exhibit greater estimation uncertainty and less smooth impulse responses. Recent work, however, suggests that this dichotomy is overly simplistic. Plagborg-Møller and Wolf (2021) show that, in population, LP and VAR estimate the same impulse responses under sufficiently rich lag structures, implying that they share a common estimand and differ mainly in their finite-sample properties. Extending this insight, Ludwig (2026) demonstrates that LP can be interpreted as a sequence of VAR forecasts with increasing lag length, while a standard VAR corresponds to a restricted version of this recursion. This perspective clarifies that the usual comparison between LP and VAR reflects differences in imposed structure rather than fundamentally different methodologies. In our setting --- characterised by externally identified shocks and an emphasis on state dependence --- the flexibility of LP, together with its transparent regression-based implementation, makes it a natural and robust choice.

We begin with a linear baseline specification: 

$$
y_{i,t+h} - y_{i,t-1} = \alpha_i^h + \beta^h \varepsilon_{i,t} + \gamma_1^h \Delta y_{i,t-1} + \gamma_2^h \Delta y_{i,t-2} + u_{i,t+h}, \quad h = 0, 1, \ldots, 12.
$$

Here, $y$ denotes the outcome variable, which is expressed either in logs (log RGDP, log CPI, log property prices) or in levels (credit/GDP ratio and the unemployment rate). The left-hand side, $y_{i,t+h} - y_{i,t-1}$, measures the accumulated change from one quarter before the shock through horizon $h$. For variables in logs, this can be interpreted approximately as a cumulative proportional change, while for variables in percentage levels it corresponds to a change in percentage points.

The variable $\varepsilon_{i,t}$ captures the monetary policy target surprise identified using the methods described above. Country fixed effects, $\alpha_i^h$, are included to absorb time-invariant heterogeneity across economies. We also include two lags of the dependent variable in first differences, $\Delta y_{i,t-1}$ and $\Delta y_{i,t-2}$, as standard controls. Standard errors are computed using Newey--West HAC with 4 lags to account for serial correlation in the residuals. The coefficients of interest, $\{\beta^h\}$, represent impulse responses, tracing out the cumulative effect of a one percentage point interest rate surprise over time.

We adopt a "long difference" specification ($y_{t+h} - y_{t-1}$) rather than a level specification ($y_{t+h}$). This choice is motivated by its more reliable small-sample properties and its robustness in the presence of non-stationarity, as discussed in Jordà et al. (2024) and Herbst and Johannsen (2024). Intuitively, this formulation directly estimates cumulative responses and reduces sensitivity to persistence in the data.

To examine whether monetary policy transmission depends on financial conditions, we extend the baseline model to allow for state dependence. In particular, we distinguish between upswing and downswing phases of the financial cycle using a nonlinear local projection with binary switching (Tenreyro and Thwaites 2016; Jordà and Taylor 2016; Alpanda and Zubairy 2019). The specification at each horizon $h$ is:

$$
y_{i,t+h} - y_{i,t-1} = \alpha_i^h + \beta_1^h \varepsilon_{i,t} s_{i,t-1} + \beta_2^h \varepsilon_{i,t} (1 - s_{i,t-1}) + \gamma_1^h \Delta y_{i,t-1} + \gamma_2^h \Delta y_{i,t-2} + u_{i,t+h}, \quad h = 0, 1, \ldots, 12.
$$

The regime indicator is 

$$
s_{i,t} = \mathbf{1}\!\left[\Delta \text{DFC}_{i,t} > 0\right],
$$

which equals one when the domestic financial cycle is in an upswing. Following the standard convention in regime-dependent local projections, the shock is interacted with the one quarter lag $s_{i,t-1}$, so that the regime classification is predetermined relative to the monetary policy surprise and the two interaction terms together partition the shock series.

Under this specification, the coefficients $\beta_1^h$ and $\beta_2^h$ capture the impulse responses conditioning on the economy being in the upswing ($s=1$) and downswing ($s=0$) of domestic financial cycle, respectively. Comparing these two sets of responses allows us to assess how the strength and persistence of monetary policy transmission vary across different phases of the financial cycle.

Lagging the regime variable addresses one timing concern --- the contemporaneous endogeneity of $s_{i,t}$ with respect to the shock $\varepsilon_{i, t}$ --- but it does not address a second, more subtle issue. The DFC at every date is extracted using the full sample of data, so the value of $s_{i,t-1}$ implicitly incorporates information from future quarters. This look-ahead is a feature of the cycle extraction step rather than of the lag structure, and as such cannot be removed simply by lagging. We therefore complement the standard *full-information* regime with a *real-time* regime in which the cycle is re-estimated each quarter using only past and contemporaneous information, 

$$
s_{i,t}^{\text{real-time}} = \mathbf{1}\!\left[\Delta (\text{DFC}_{i,t} \mid \mathbb{I}_{i,t}) > 0\right],
$$

where $\mathbb{I}_{i,t}$ denotes the information set available at quarter $t$. The real-time regime is noisier, especially near the endpoints of the sample, but it removes the look-ahead endogeneity and corresponds more closely to the regime classification a policymaker could actually construct in real-time. In the real-time specification the coefficients $\beta_1^h$ and $\beta_2^h$ are the impulse responses conditional on the economy being *estimated* to be in an upswing or downswing using only information available at $t-1$.

<a id="sec:mp_identification"></a>
### Identification of Monetary Policy Shocks
High-frequency monetary policy shocks are identified using changes in financial market variables within narrow windows around monetary policy announcements. These high-frequency movements are assumed to capture unexpected components of policy decisions, as market prices adjust almost instantaneously to new information.

Following Swanson (2021), we decompose these high-frequency changes across a range of financial instruments --- short-term interest rates, longer-term yields, and asset prices --- into a small number of orthogonal factors. These factors correspond to distinct dimensions of monetary policy surprises, including conventional target-rate shocks, forward guidance, and large-scale asset-purchase (QE/LSAP) components. The decomposition allows us to isolate the specific policy channel of interest rather than relying on a single market indicator. Results estimated using a raw Swanson-style target factor (Swanson 2021) are reported in Appendix [7.1](#app:mp_effects_raw).

A key concern in this literature is that high-frequency surprises may also reflect central bank information effects, whereby policy announcements reveal information about the economic outlook rather than purely exogenous policy actions. To address this, our main identification strategy follows Jarociński and Karadi (2020), who separate pure monetary policy shocks from central bank information shocks using the joint response of interest rates and equity prices. Intuitively, a contractionary monetary policy shock should raise interest rates and lower stock prices, while a positive co-movement between the two is interpreted as an information effect. Their decomposition is implemented via a median-rotation step that constructs a measure of pure monetary policy shocks orthogonal to the information component; we refer to these as "pure MP shocks" henceforth.

We also report results estimated using the "poor man's" identification of Jarociński and Karadi (2020). The poor man's approach applies a simple sign restriction: announcements at which the policy surprise co-moves positively with stock prices are discarded, on the assumption that they are more likely to reflect information effects. Because it requires no joint VAR-style rotation, the method can be applied event by event to a wider set of central banks; in particular, the median-rotation method requires a long enough event series that we do not have for the Bank of England, while the sign restriction is feasible event by event and lets us include the United Kingdom in the panel. We implement the sign restriction at event level and aggregate the retained surprises to quarterly frequency. The poor man's series is therefore noisier than the median-rotation series, because shocks are discarded and aggregation introduces measurement error, and we treat it as a robustness check rather than the baseline. Figure [14](#fig:mp_shocks) compares the two series.

Overall, the baseline identification based on Jarociński and Karadi (2020) is preferred, as it retains the full information content of high-frequency surprises while providing a more systematic separation between policy and information effects.

<a id="tab:mp_descstats_shocks"></a>
<table class="ox-thesis-table arithmatex">
<caption>Descriptive statistics, monetary policy shocks</caption>
<thead>
<tr><th>Country</th><th>Shock measure</th><th>Coverage</th><th>N</th><th>Mean</th><th>SD</th><th>Min</th><th>Max</th></tr>
</thead>
<tbody>
<tr><td>US</td><td>Poor man's method</td><td>1990 Q1--2026 Q1</td><td>145</td><td>-0.0225</td><td>0.1003</td><td>-0.4940</td><td>0.2433</td></tr>
<tr><td>GB</td><td>Poor man's method</td><td>1997 Q2--2026 Q1</td><td>110</td><td>-0.0046</td><td>0.0721</td><td>-0.3044</td><td>0.2291</td></tr>
<tr><td>EA</td><td>Poor man's method</td><td>1999 Q1--2025 Q4</td><td>108</td><td>0.0076</td><td>0.0585</td><td>-0.2205</td><td>0.2541</td></tr>
<tr><td>US</td><td>Pure monetary policy shocks</td><td>1990 Q1--2026 Q1</td><td>145</td><td>-0.0178</td><td>0.0847</td><td>-0.3765</td><td>0.1771</td></tr>
<tr><td>EA</td><td>Pure monetary policy shocks</td><td>1999 Q1--2025 Q4</td><td>108</td><td>0.0122</td><td>0.0540</td><td>-0.0956</td><td>0.2130</td></tr>
</tbody>
</table>
<p class="ox-thesis-note arithmatex"><em>Note:</em> All shock series are quarterly sums of high-frequency target surprises and are expressed in percentage points per annum. The pure monetary-policy shock is unavailable for GB.</p>

<figure id="fig:mp_shocks">
<img src="../assets/monetary_policy/shock-comparison-fed-ecb-boe-1.png" style="width:90.0%" />
<p class="ox-thesis-note arithmatex"><em>Note:</em> Quarterly monetary policy target surprises by central bank, expressed in percentage points per annum and summed within quarter. The poor man’s series applies the sign-restriction filter; the pure MP series follows the median-rotation method of Jarociński and Karadi (2020) and is available for the Federal Reserve and ECB but not for the Bank of England.</p>
<figcaption>Monetary policy shocks (target factor)</figcaption>
</figure>

## Results

### Results Using Pure Monetary Policy Shocks

Figures [15](#fig:mp_linear_jk) and [16](#fig:mp_regime_jk) report the main results. In the linear baseline (Figure [15](#fig:mp_linear_jk)), tightening surprises have clear short-run effects on real activity: real GDP, consumption, and investment fall, and the unemployment rate rises. These effects gradually fade and lose significance after about two years, consistent with most of the empirical and theoretical monetary policy literature. The responses of the financial cycle indicators are much weaker: real credit falls modestly and property prices drift slightly higher, both with only marginal significance. The credit-to-GDP ratio rises after a tightening shock, reflecting the larger response of real GDP than of credit. The asymmetry between the real and financial responses points to substantial macroeconomic costs of tightening without a clear financial stability gain, which we return to in the policy discussion.

Figure [16](#fig:mp_regime_jk) explores the same shocks state by state: the red lines report impulse responses conditional on a DFC upswing in the previous quarter, the blue lines conditional on a downswing. On the real side, the point estimates are larger in upswings than in downswings for real GDP, consumption, investment, the price level, and unemployment, broadly consistent with the "pushing on a string" result of Tenreyro and Thwaites (2016); a mild price puzzle (the price level rising after a tightening) appears only in the downswing. On the financial side, the responses are noisier and qualitatively different across regimes. Property prices fall after a tightening in downswings but rise modestly in upswings, while real credit shows no significant response in either regime. Combined with the larger contraction in real GDP, this produces a pronounced tightening-driven *increase* in the credit-to-GDP ratio in upswings --- the regime in which a leaning against the wind argument would most want it to fall.[^13] This is robust to alternative shock measures, subsamples, and the real-time DFC regimes. Taken together, the results suggest that conventional policy rates exert little control over the DFC indicators, and call into question the viability of taming the financial cycle through interest rate policy.

<figure id="fig:mp_linear_jk">
<img src="../assets/monetary_policy/pure-linear-panel-1.png" style="width:90.0%" />
<p class="ox-thesis-note arithmatex"><em>Note:</em> Linear local projection impulse responses to a one percentage point pure monetary policy shock identified using the median-rotation method of Jarociński and Karadi (2020). The sample includes the United States and euro area member countries with available pure MP shocks. Responses are accumulated changes from <span class="math inline arithmatex"><em>t</em> − 1</span> to horizon <span class="math inline arithmatex"><em>h</em></span>; shaded bands report 90% Newey–West confidence intervals.</p>
<figcaption>Estimated linear IRF, full-information regimes, pure MP shocks</figcaption>
</figure>

<figure id="fig:mp_regime_jk">
<img src="../assets/monetary_policy/pure-regime-panel-1.png" style="width:90.0%" />
<p class="ox-thesis-note arithmatex"><em>Note:</em> Regime-dependent local projection impulse responses to the pure MP shock in the United States and euro area member countries with available pure MP shocks. Red lines condition on a full-information DFC upswing and blue lines on a downswing; the regime indicator is lagged so that it is predetermined relative to the shock quarter. Shaded bands report 90% Newey–West confidence intervals.</p>
<figcaption>Estimated regime-dependent IRF, full-information regimes, pure MP shocks</figcaption>
</figure>

### Results Using the "Poor Man's" Method

Figures [17](#fig:mp_linear_pm) and [18](#fig:mp_regime_pm) report the same exercise using the poor man's identification. Because the sign-restriction method can be applied event by event, the panel is extended to include the United Kingdom; the trade-off is that more announcements are discarded and aggregation introduces additional measurement error, making the resulting series noisier. The qualitative pattern of the main results is unchanged. The only visible difference is a sign asymmetry in the real credit IRF, which disappears once the real-time DFC regime is used in Appendix [7.3](#app:mp_effects_realtime) and which we therefore attribute to potential look-ahead endogeneity in the full-information regime rather than to a genuine feature of the data. The other patterns --- larger point estimates for real variables in upswings, the price puzzle confined to downswings, the muted response of property prices, and the rise in the credit-to-GDP ratio following a tightening --- carry through.

<figure id="fig:mp_linear_pm">
<img src="../assets/monetary_policy/pm-linear-panel-1.png" style="width:90.0%" />
<p class="ox-thesis-note arithmatex"><em>Note:</em> Linear local projection impulse responses using the poor man’s monetary policy shock. The sign-restriction filter discards announcements more likely to reflect central bank information effects, which allows the panel to include the United Kingdom in addition to the United States and euro area member countries. Responses are accumulated changes from <span class="math inline arithmatex"><em>t</em> − 1</span> to horizon <span class="math inline arithmatex"><em>h</em></span>; shaded bands report 90% Newey–West confidence intervals.</p>
<figcaption>Estimated linear IRF, full-information regimes, “poor man’s” identification</figcaption>
</figure>

<figure id="fig:mp_regime_pm">
<img src="../assets/monetary_policy/pm-regime-panel-1.png" style="width:90.0%" />
<p class="ox-thesis-note arithmatex"><em>Note:</em> Regime-dependent local projection impulse responses using the poor man’s monetary policy shock and the full-information DFC regime. The panel includes the United States, the United Kingdom, and euro area member countries. Red lines condition on DFC upswings and blue lines on downswings; shaded bands report 90% Newey–West confidence intervals.</p>
<figcaption>Estimated regime-dependent IRF, full-information regimes, “poor man’s” identification</figcaption>
</figure>

## Robustness Checks

For robustness, we repeat the analysis using different subsamples and real-time upswing/downswing regimes. The corresponding results are reported in Appendices [7.2](#app:mp_effects_subsample) and [7.3](#app:mp_effects_realtime), respectively. For completeness, we also report estimates using raw target factor surprises, without filtering out potential central bank information effects, in Appendix [7.1](#app:mp_effects_raw). The main conclusions are robust across these checks.

The first subsample check excludes the Great Financial Crisis period from 2008Q3 to 2010Q4. The GFC is an extreme financial downswing with large shocks, impaired credit markets, frozen liquidity, unconventional policy, and crisis-specific dynamics (Tooze 2019). Dropping it tests whether the regime-dependent LP results are mechanically generated by the crisis episode. As shown in Figure [35](#fig:mp_linear_nogfc) and [38](#fig:mp_regime_nogfc), no qualitative result changes substantially after excluding the GFC. In addition, we check the results estimated on the pre-COVID-19 sample alone (ending at 2019Q4), since COVID and post-COVID observations are exceptional --- lockdowns, large fiscal transfers, supply disruptions, emergency central bank actions, and unusual inflation dynamics --- and excluding them ensures the local projections are not driven by pandemic-era outliers or non-standard transmission. A sample that drops both the GFC and the COVID periods is also considered. Results in Figures [41](#fig:mp_linear_precovid) to [50](#fig:mp_regime_precovid_nogfc) again align with our main conclusions.

In Appendix [7.3](#app:mp_effects_realtime), we also experiment with the real-time DFC regimes introduced in Section [3.2.2](#sec:lp_method). The real-time regime is noisier than the baseline by construction, but the qualitative pattern of the impulse responses survives, and the unresponsiveness of real credit relative to real GDP remains the most stable feature across specifications.

## Discussions

### Policy Implications

Our empirical findings speak directly to the "leaning against the wind" (LAW) debate: whether monetary policy should respond systematically to credit and property price build-ups in addition to inflation and real activity.

The case for leaning was developed most prominently by researchers at the Bank for International Settlements (Borio and P. Lowe 2002; Borio and P. W. Lowe 2002, 2004; Borio 2006, 2014a; Drehmann et al. 2012).[^14] In this view, financial cycles are longer and more damaging than ordinary business cycles, and credit and property price booms can keep building even when inflation looks subdued, so a central bank should sometimes tighten by more than an inflation-targeting rule would imply in order to restrain the build-up of imbalances. The underlying logic is intertemporal: a tighter policy today incurs short-run costs in output and inflation but reduces the probability or severity of a later financial bust, which in the BIS view is much more damaging than an ordinary recession. BIS work therefore argues against "benign neglect" of credit booms and against the asymmetry of aggressive easing in busts without comparable restraint in booms (Filardo and Rungcharoenkitkul 2016; Borio 2024).

The LAW case relies on two assumptions: that policy rates can effectively restrain credit and property prices, and that the resulting benefits outweigh the macroeconomic costs of tightening. Both have been challenged. Svensson (2017) sets out a parametric cost-benefit model in which the costs of tighter policy --- weaker activity, lower inflation --- exceed the benefits from slightly lower crisis risk, especially because a crisis is more damaging when the economy is already weak. Benati (2023) reaches a similar conclusion empirically: in a monetary BVAR combining zero and sign restrictions, the median ratio of the cumulative real credit to real GDP responses to a policy rate shock is roughly 3.4--3.6 over five- to ten-year horizons, meaning that materially reducing credit leverage requires a substantial output loss. Schularick et al. (2021), using trilemma IV in the spirit of Jordà et al. (2020) on a long panel, find that discretionary tightenings during credit and asset price booms are more likely to trigger crises than prevent them.[^15] A related theoretical literature reaches the same destination from different starting points. Galí (2014) shows that a stronger interest rate response to a rational asset price bubble can increase bubble volatility rather than stabilise it, and Kockerols and Kok (2019) extends Svensson's framework to the euro area and concludes that monetary LAW has net marginal costs while macroprudential tools can deliver net marginal benefits.

Our results are consistent with this critical literature. Real variables respond in the expected contractionary direction to a tightening shock, but the three DFC indicators do not. Their responses are weak, often statistically insignificant, and occasionally run in the wrong direction for a leaning argument. Tightening shocks do not consistently restrain the credit-to-GDP ratio --- and during financial cycle upswings can mechanically push it up, because real GDP responds more strongly than credit (Figures [16](#fig:mp_regime_jk) and [18](#fig:mp_regime_pm)). This is uncomfortable for a rate-centred LAW view: the credit-to-GDP ratio is one of the core indicators the BIS tradition uses to diagnose medium-term imbalances, so a policy that visibly raises it while contracting real activity imposes the cost of leaning without delivering the financial stability benefit.

The natural alternative is a larger role for macroprudential policy. Using a panel of 57 economies, Kuttner and Shim (2016) find that non-interest-rate instruments can slow housing credit and house price growth, with borrower-based tools particularly effective; Kockerols and Kok (2019) reach a similar conclusion for the euro area within the LAW cost-benefit framework. This policy mix reading is also closer to more recent BIS thinking, which assigns macroprudential policy a more prominent and targeted role in addressing financial vulnerabilities (Bank for International Settlements 2024, 2018), while stopping short of treating it as a complete substitute for monetary policy: macroprudential effectiveness is itself constrained by leakages, limited regulatory coverage, and the political economy frictions that make preventive tightening difficult during booms.

Overall, the evidence does not argue against caring about financial stability; it argues against assigning the policy rate the main burden of stabilising medium-term financial cycles. If credit and property price cycles move at horizons of a decade or more and respond only weakly --- and sometimes perversely --- to conventional monetary shocks, the rate-centred version of leaning becomes difficult to defend. A more coherent framework keeps monetary policy focused on inflation and macroeconomic stabilisation, and reserves the targeted intervention in credit and housing markets for the macroprudential side of the policy mix.

### Limitations

The results should be read with some care. The preferred shock measure is cleaner than a raw target factor surprise because it attempts to remove central bank information effects, but the separation is far from uncontroversial. It still rests on an identifying assumption about how interest rates and equity prices should move around policy announcements, which has been contested recently due to its omission of risk premium and information structure (Bauer and Swanson 2022; Cieslak et al. 2023; Fanelli and Marsi 2021). The "poor man's" version is useful because it broadens the sample and brings in the United Kingdom, but it does so by discarding events and then aggregating a noisier quarterly shock series. Therefore, the qualitative consistency across shock measures is more important than any single point estimate.

The estimates are also local treatment effects by nature: we assess the effects of monetary policy surprises, not a complete policy regime. A one quarter target-rate surprise is not the same as a central bank systematically leaning against financial imbalances for several years. Such a regime would involve the expected path of rates, communication, balance-sheet policy, macroprudential instruments, and possibly fiscal or regulatory responses. The evidence here is therefore narrower: it asks whether conventional interest rate surprises move the DFC indicators in a reliable direction. That is the relevant margin for a rate-centred version of leaning against the wind, but it does not exhaust the broader financial stability toolkit.

Also, the state-dependent estimates are particularly demanding on the data. Once the sample is split into upswings and downswings, the effective number of observations in each regime falls, while the financial variables themselves are slow-moving and often respond imprecisely over the horizons considered. This makes the regime comparisons informative about broad asymmetries, but less suitable for reading too much into the exact timing or size of every point on an impulse-response curve.

Panel pooling is another practical compromise. It helps recover common patterns from a limited number of high-frequency policy surprises, but the United States, the euro area, and the United Kingdom do not have identical transmission mechanisms. Mortgage contracts, banking systems, market finance, and macroprudential frameworks differ across them, and the empirical literature documents the resulting heterogeneity in monetary policy transmission (Alpanda et al. 2021; Calza et al. 2013; Corsetti et al. 2022; Altavilla et al. 2020; Bussière et al. 2021). Country fixed effects absorb average level differences but do not make the response to a policy surprise fully country-specific. The estimates should therefore be read as average advanced-economy responses rather than as policy multipliers for any single central bank.

These qualifications keep the policy conclusion conditional. The evidence does not say that monetary policy is irrelevant for financial stability, or that financial cycles should be ignored. It says something more specific: in these data, conventional policy rate surprises move real activity more clearly than the medium-term financial cycle indicators that a rate-centred leaning strategy would try to restrain. That makes the policy rate look like a blunt tool for this task, and points instead toward a broader policy mix in which macroprudential instruments carry more of the burden.

<a id="sec:conclusions"></a>
# Conclusions
This thesis has studied the relationship between financial cycles and monetary policy in two complementary steps: a frequency-domain assessment of whether the Domestic Financial Cycle (DFC) indicators contain statistically meaningful medium-term cyclical behaviour, and a regime-dependent analysis of how conventional monetary policy affects those cycles. The evidence supports treating the DFC as a distinct empirical object, particularly in the United States and the United Kingdom, but it does not support the view that higher policy rates can reliably restrain financial cycles at an acceptable macroeconomic cost.

The frequency-domain results back the core measurement claim of the DFC framework. For the US and UK, property price growth, real credit growth, and the credit-to-GDP ratio all display spectral mass in the 48--96 quarter range associated with medium-term financial cycles. Property price growth, which is stationary, gives the cleanest evidence and shows clearly distinguishable peaks in both countries. The formal peak test rejects a flat spectral null for every main DFC indicator and rejects the more demanding AR(1) null for most of them. The Monte Carlo diagnostics reported in the appendix strengthen this reading by showing that the test is not mechanically forced to reject for standard no-cycle benchmarks and that it has power against true 48--96 quarter cycles.

That said, the evidence is not a blanket endorsement of a universal financial cycle. The stationarity properties of credit aggregates are less clean, and the cross-country evidence for Australia, Canada, Germany, France, and Japan is markedly more heterogeneous, with only a fraction of series-country pairs rejecting the AR(1) null at conventional levels. The right conclusion is therefore not that every advanced economy shares the same DFC, but that credit and property price indicators can carry medium-term cyclical dynamics that are distinct from standard real-side fluctuations. The same point is reinforced by the placebo comparison with unemployment, inflation, the investment-to-GDP ratio, and the Global Financial Cycle factor, none of which reproduces the 48--96 quarter pattern.

These results matter for policy because they provide a concrete empirical state variable for studying monetary transmission. The extracted DFC regimes are not structural states observed without error, but they summarise a policy-relevant phase of the domestic credit and property cycle. The baseline analysis uses full-information regimes, and a real-time variant, re-estimated each period using only data available up to that date, serves as the natural robustness check. The real-time measure is noisier, as expected, but it does not overturn the qualitative message of the baseline. With this regime classification in hand, the second half of the thesis turns to whether conventional monetary policy can shape the financial cycles we have characterised.

The local projection results then show why the policy interpretation is harder than the measurement result. Tightening shocks identified from high-frequency surprises have clear contractionary effects on real activity: output, consumption, and investment fall, and unemployment rises. Their effects on the financial cycle indicators are much less robust. Real credit falls only modestly, property prices do not respond consistently, and the credit-to-GDP ratio can rise after a tightening because real activity contracts more than credit does. This is the empirical tension at the heart of the leaning against the wind debate: the policy instrument that is supposed to restrain financial imbalances moves real activity more reliably than the financial indicators used to diagnose those imbalances in the first place.

State dependence sharpens the tension rather than resolving it. For the real-side variables --- output, consumption, investment, and unemployment --- the point estimates of the impulse responses are larger in financial cycle upswings than in downswings, broadly consistent with a "pushing on a string" interpretation on the downside. The DFC indicators themselves do not show a comparable regime contrast: the responses of property prices and credit aggregates remain noisy and sometimes move in directions hard to reconcile with a clean leaning against the wind mechanism, so larger transmission to real activity in upswings does not translate into greater control over the financial cycle. The same broad pattern appears under the pure monetary policy shock, the "poor man's" sign-restriction alternative, raw target factor robustness checks, subsample exclusions, and the real-time DFC regimes.

The policy implication is therefore narrow but clear. The results do not say that financial stability should be ignored, or that monetary policy is irrelevant for financial conditions. They say that in these data, conventional policy rate surprises move real activity more clearly than the medium-term financial cycle indicators that a rate-centred leaning strategy would try to restrain. If credit and property price cycles evolve over horizons longer than a decade and respond only weakly or inconsistently to monetary shocks, assigning monetary policy the primary responsibility for financial cycle management is difficult to defend. A more coherent framework is one in which monetary policy remains focused on inflation and macroeconomic stabilisation while macroprudential tools carry more of the burden for targeted intervention in credit and housing markets.

Several limitations qualify these conclusions. The spectral analysis is descriptive: it identifies cyclical concentration in particular frequency bands but does not by itself identify the structural mechanisms that generate them, and the finite sample is demanding at long periodicities, where only a small number of complete cycles can be observed. The Monte Carlo diagnostics reduce the concern that the workflow mechanically creates cycles, but they also show that structural breaks, long memory, and very low-frequency movements can still generate false positives in difficult cases. On the monetary policy side, the shock identification is sharper than a raw target factor approach but is not infallible. The estimates identify the effects of policy surprises rather than full policy regimes, state-dependent local projections split an already limited sample, and panel pooling may understate institutional heterogeneity across the United States, the euro area, and the United Kingdom.

These limitations point toward several directions for future work. The most natural is to connect the empirical patterns documented here to structural mechanisms. As the discussion in Section [2.4.1](#sec:cycles_explanation) makes clear, no current workhorse macro-finance model jointly delivers the medium-term periodicity, the asymmetric boom-bust dynamics, and the cross-country heterogeneity of the DFC, and progress on this front would help move the literature from measurement toward explanation. A related extension is to compare monetary and macroprudential shocks directly within the same financial cycle setting, so that the policy mix conclusion drawn here can be tested rather than inferred. Developing real-time financial cycle measures that are stable enough for operational use, without relying on data that only become available with hindsight, would help bridge the gap between the empirical object identified in this thesis and the information set that policymakers actually have when deciding how to lean.

Overall, the thesis supports a financial cycle view of macroeconomic fluctuations while questioning a rate-centred response to it. Credit and property price cycles are empirically distinct and policy-relevant, and they deserve close monitoring. But lasting financial stability is more likely to require a policy mix in which monetary policy and macroprudential policy play different, complementary roles than a leaning against the wind strategy operating through the policy rate alone.

<a id="app:spectral_diagnostics"></a>
# Methodology Appendix for Further Diagnosis of Spectral Properties
This appendix first provides the details underlying the additional diagnostic exercises discussed in the main text. Following Beaudry et al. (2020), two complementary procedures are implemented: bootstrap confidence intervals for the estimated spectral density, and a formal hump shape test for a local peak in the business cycle range. Spectral confidence intervals quantify estimation uncertainty at each frequency, while the peak tests assess whether the apparent concentration of spectral mass in the target band is statistically significantly different from alternatives. In addition, Appendix [5.3](#app:spurious_cycles) assesses the specific risk of spurious cycles.

<a id="app:spectral_ci_method"></a>
## Spectral Density Confidence Intervals
Let $X=(x_1,\dots,x_T)'$ denote the observed mean-zero series, and let $\hat{S}(\omega_k;X)$ denote the estimated smoothed spectral density at the discrete frequencies $\omega_1,\dots,\omega_K$. The object of interest is the sampling distribution of the ratio $$\frac{\hat{S}(\omega_k;X)}{S(\omega_k)},$$ where $S(\omega_k)$ is the unknown true spectral density. Since the true spectral density is unobserved, the bootstrap treats the estimated spectral density $\hat{S}(\cdot;X)$ as the population spectral density and then asks how much variation would arise if repeated samples of length $T$ were drawn from a process with that spectral density.

To implement this procedure, the estimated spectral density is first inverted to recover the corresponding autocovariance function. Denoting the implied autocovariances by $\hat{R}_k$, these are used to construct the $T \times T$ covariance matrix $$\hat{\Sigma} =
    \begin{pmatrix}
        \hat{R}_0     & \hat{R}_1     & \cdots & \hat{R}_{T-1} \\
        \hat{R}_1     & \hat{R}_0     & \cdots & \hat{R}_{T-2} \\
        \vdots        & \vdots        & \ddots & \vdots        \\
        \hat{R}_{T-1} & \hat{R}_{T-2} & \cdots & \hat{R}_0
    \end{pmatrix}.$$ By construction, a Gaussian series generated from this covariance matrix has spectral density $\hat{S}(\cdot;X)$.

Let $B$ denote the Cholesky factor of $\hat{\Sigma}$, so that $\hat{\Sigma}=BB'$. For each bootstrap replication $j=1,\dots,N_b$ (we use $N_b=10{,}000$), draw $$\varepsilon_j \sim N(0,I_T),$$ and construct an artificial sample $$X_j = B\varepsilon_j.$$ For each simulated series $X_j$, re-estimate the spectral density using the same procedure as in the baseline analysis, namely zero-padding, FFT evaluation, construction of the periodogram, and Hamming-window smoothing. This yields a bootstrap distribution for $$\frac{\hat{S}(\omega_k;X_j)}{\hat{S}(\omega_k;X)}.$$ This is the standard parametric bootstrap pivot: $\hat{S}(\omega_k;X_j)/\hat{S}(\omega_k;X)$ approximates the sampling distribution of $\hat{S}(\omega_k;X)/S(\omega_k)$ when $\hat S(\cdot;X)$ is a consistent estimator of $S(\cdot)$, and is a finite-sample approximation otherwise. The empirical quantiles of the bootstrap distribution are then used to construct pointwise confidence intervals for the spectral density at each frequency.

These confidence intervals are pointwise rather than simultaneous. They are therefore informative about uncertainty at each individual frequency, but they do not by themselves provide a formal test of whether an apparent local hump is statistically significant relative to neighbouring frequencies. For that purpose, a separate peak test is required.

<a id="app:peak_test_method"></a>
## Peak Test
To evaluate whether the estimated spectral density displays a statistically significant local hump in the business cycle range, a shape restriction test is applied following Beaudry et al. (2020). The logic of the test is that a local peak is a relative property: the relevant question is not simply whether the spectral density is large at one frequency, but whether it is high in a candidate peak region relative to the surrounding lower- and higher-frequency bands.

Let $X_t$ be a stationary series with autocovariance function $$\gamma_k = \operatorname{cov}(X_t,X_{t-k}),$$ and spectral density $$f(\omega)=\frac{1}{2\pi}\sum_{k=-\infty}^{\infty} e^{-ik\omega}\gamma_k.$$ For a sample of length $n$, define the periodogram at the Fourier frequencies $\omega_j=2\pi j/n$ by $$I(\omega_j)=\frac{1}{2\pi n}\left|\sum_{t=1}^{n} X_t e^{-i\omega_j t}\right|^2,$$ consistent with the convention adopted in the body. Under standard large-sample results, the normalised periodogram $$R(\omega_j)=\frac{2I(\omega_j)}{f(\omega_j)}$$ is asymptotically distributed as independent $\chi^2_2$ random variables across Fourier frequencies away from $0$ and $\pi$, with $f(\omega_j)$ equal to the spectrum implied by the null under consideration.

The test partitions the relevant range of frequencies into three disjoint bands: a lower trough (high-frequency) region $\Omega_{T1}$, a candidate peak region $\Omega_P$, and an upper trough (low-frequency) region $\Omega_{T2}$. In our main analysis we adopt the *DFC Refined* configuration, in which $\Omega_P$ corresponds to periodicities of 48--96 quarters (*i.e.* roughly 12--24 years), $\Omega_{T1}$ covers 6--48 quarters, and $\Omega_{T2}$ covers 96--160 quarters. This partition is designed to detect the BIS style domestic financial cycle of Drehmann et al. (2012), and is applied to real credit, credit-to-GDP, and property price.

For each band $\Omega_q$, where $q \in \{T1,P,T2\}$, define the average normalised periodogram $$D_q=\frac{1}{m_q}\sum_{\omega_j \in \Omega_q} R(\omega_j),$$ where $m_q$ is the number of Fourier frequencies in region $\Omega_q$. Asymptotically, $$D_q \sim \frac{1}{m_q}\chi^2_{2m_q},$$ and the $D_q$ statistics are independent across the three regions.

Two null hypotheses are considered. Under the *flat null*, the spectrum is constant over the combined region, $$f(\omega_j)=\bar{f}, \qquad \omega_j \in \Omega_{T1}\cup\Omega_P\cup\Omega_{T2}.$$ Under the *AR(1) null*, the spectrum is assumed to take the shape implied by the best fitting AR(1) process, $$f(\omega_j)=\frac{\sigma^2}{2\pi g(\omega_j;\rho)},$$ where $$g(\omega;\rho)=1+\rho^2-2\rho\cos(\omega).$$ The autoregressive coefficient is estimated by the sample autocorrelation at lag one, $\hat\rho = \widehat{\operatorname{corr}}(x_{t-1},x_t)$, computed on the demeaned series, and the innovation variance is estimated by the sample variance of the implied residuals, $\hat\sigma^2 = \widehat{\operatorname{var}}(x_t-\hat\rho x_{t-1})$. The two estimators are asymptotically equivalent to OLS on $x_t=\rho x_{t-1}+\varepsilon_t$ under stationarity. The AR(1) null is the more relevant benchmark for our purposes because it captures the conventional view that macroeconomic spectra are smooth and monotone, with shapes similar to those of persistent autoregressive processes.

Let $d_q$ denote the observed realisation of $D_q$ under the chosen null. The test asks whether the candidate peak region is simultaneously high relative to both trough regions. The associated $p$-value is $$p=\Pr\left\{\frac{D_P}{D_{T1}} \geq \frac{d_P}{d_{T1}}
    \ \text{and} \
    \frac{D_P}{D_{T2}} \geq \frac{d_P}{d_{T2}}\right\}.$$ Because the joint distribution of these ratios is cumbersome analytically, the $p$-value is computed by Monte Carlo simulation. Specifically, repeated draws are taken from $$\tilde{D}_q \sim \frac{1}{m_q}\chi^2_{2m_q},$$ and the simulated distribution of $$\left(\frac{\tilde{D}_P}{\tilde{D}_{T1}},\frac{\tilde{D}_P}{\tilde{D}_{T2}}\right)$$ is used to evaluate how likely it is to observe ratios at least as large as those in the data. We use $10^6$ Monte Carlo draws to approximate the distribution. A small simulated $p$-value is therefore interpreted as evidence against the null of a flat or smoothly monotone spectrum, and in favour of a statistically significant hump in the candidate peak band $\Omega_P$.

This approach complements the confidence interval exercise. While bootstrap bands show the amount of estimation uncertainty at each frequency, the hump shape test directly addresses the more relevant question for cyclical analysis: whether spectral mass in the candidate business cycle band is unusually large relative to neighbouring bands. For that reason, the confidence intervals and the peak test are best viewed as complementary tools for diagnosing the robustness of the estimated spectral features.

<a id="app:spurious_cycles"></a>
## Spurious Cycle Diagnostics
This appendix addresses a specific concern about the frequency-domain evidence: if a methodology is designed to look for cycles, could it mechanically discover them even when the data-generating process contains none (i.e. produce spurious cycles)? We use Monte Carlo experiments to assess whether the empirical peak test workflow has a low false positive rate when applied to simulated series whose data-generating processes contain no 48--96 quarter cycle by construction, and whether it has reasonable power when such a cycle is present.

The connection between parametric time series models and the frequency-domain approach is best understood as a connection between two descriptions of second-order dynamics. For any covariance-stationary process, the autocovariance function defines a spectral distribution; when a spectral density exists, the autocovariance function and the spectral density are Fourier transform pairs (Wiener--Khinchin theorem). Finite order linear models make this relationship explicit by imposing a particular law of motion and therefore a particular spectral shape.

The approach used in the thesis also works with the distribution of variance across frequencies, but it does not estimate a complete parametric law of motion. Instead, it asks whether the observed variance is concentrated in a prespecified frequency band and whether that concentration is large relative to neighbouring bands and benchmark null processes. This is a useful trade-off for the thesis. The method is transparent, flexible, and can be applied consistently across countries and indicators without forcing the data into a low-dimensional dynamic specification. It is also directly aligned with the substantive claim being evaluated: whether financial indicators contain economically relevant medium-term variation. The limitation is that the evidence is more descriptive than structural. If a well specified parametric model were known, it could be more efficient and more explicit about the data-generating process. Conversely, persistent stationary processes, near-unit-root processes, structural breaks, long-memory processes, and inappropriate transformations can all generate spurious conclusions if the model is misspecified.

Our Monte Carlo experiments therefore serve as a diagnostic validation exercise. We apply the peak test component of the workflow described in Sections [2.2.2](#sec:spectral_density_estimation_method) and [2.2.3](#sec:spectral_diagnosis), together with a simple descriptive local hump check, to simulated data series, and ask where the procedure behaves well and where caution is needed. The simulated data generating processes are grouped into five classes. The first class contains stationary no-cycle benchmarks: white noise and monotone AR(1) spectra. These should be the easiest cases for the test, because they contain no genuine local peak in the DFC band. The second class contains persistence and transformation stress tests, including a local-to-unit-root process, a random walk in levels, and the correctly differenced version of a random walk. These distinguish two issues that are often blurred in applied work: the statistical behaviour of the peak test, and whether the input series is conceptually valid for spectral interpretation. The third class contains structural break and long-memory processes, which are intentionally difficult because they can concentrate power at low or medium frequencies without containing a stable cycle. The final two classes are not false positive checks: true 64-quarter cycles measure power, while 32- and 128-quarter placebo cycles test whether the procedure is specifically detecting the target DFC band rather than any nearby periodicity. Details about the simulated DGPs and motivations are summarised in the table below:

<a id="tab:spurious_cycle_dgps"></a>
<table class="ox-thesis-table arithmatex">
<caption>Simulation designs used in the spurious-cycle diagnostic.</caption>
<thead>
<tr><th>Class</th><th>DGP</th><th>True DFC cycle</th><th>Motivation</th></tr>
</thead>
<tbody>
<tr><td></td><td>White noise</td><td>No</td><td>Baseline size check: no persistence and no cyclical structure.</td></tr>
<tr><td></td><td>AR(1), rho = 0.85</td><td>No</td><td>Granger (1966) motivates smooth persistent spectra as a standard macroeconomic benchmark.</td></tr>
<tr><td>Stationary no-cycle benchmarks</td><td>AR(1), rho = 0.95</td><td>No</td><td>Granger (1966); this checks whether strong but monotone persistence is mistaken for a medium-term hump.</td></tr>
<tr><td></td><td>Local-to-unit-root AR(1), rho = 1 - 1/T</td><td>No</td><td>Near-unit-root persistence is a standard boundary case in the unit-root literature and is close to the stationarity concern in credit aggregates.</td></tr>
<tr><td></td><td>Random walk in levels</td><td>No</td><td>Nelson and Kang (1981) highlights how nonstationary series can generate pseudo-periodic behavior.</td></tr>
<tr><td>Persistence and transformation stress tests</td><td>Differenced random walk</td><td>No</td><td>This is the correctly transformed counterpart to a random walk in levels; it checks whether differencing removes the spurious-cycle problem.</td></tr>
<tr><td></td><td>Mean shift at T/2</td><td>No</td><td>Perron (1989) motivates breaks as a source of misleading persistence and low-frequency power.</td></tr>
<tr><td>Break and long-memory stress tests</td><td>Fractionally integrated, d = 0.35</td><td>No</td><td>Granger and Joyeux (1980); Hosking (1981) motivate long-memory persistence.</td></tr>
<tr><td></td><td>AR(2) stochastic cycle, 64 quarters, r = 0.90</td><td>Yes</td><td>Beaudry et al. (2020) motivates stochastic cyclical alternatives in the frequency domain.</td></tr>
<tr><td></td><td>AR(2) stochastic cycle, 64 quarters, r = 0.95</td><td>Yes</td><td>Beaudry et al. (2020) motivates stochastic cyclical alternatives in the frequency domain.</td></tr>
<tr><td></td><td>Sinusoid, 64 quarters, SNR = 0.5</td><td>Yes</td><td>A deterministic signal-plus-noise benchmark checks power against a transparent 48-96 quarter cycle.</td></tr>
<tr><td>Power benchmark</td><td>Sinusoid, 64 quarters, SNR = 1.0</td><td>Yes</td><td>A deterministic signal-plus-noise benchmark checks power against a transparent 48-96 quarter cycle.</td></tr>
<tr><td></td><td>Placebo sinusoid, 32 quarters, SNR = 1.0</td><td>No</td><td>Baxter and King (1999); Christiano and Fitzgerald (2003) motivate checking whether nearby filter bands are confused with the target band.</td></tr>
<tr><td>Frequency-specificity placebos</td><td>Placebo sinusoid, 128 quarters, SNR = 1.0</td><td>No</td><td>Baxter and King (1999); Christiano and Fitzgerald (2003) motivate checking whether nearby filter bands are confused with the target band.</td></tr>
</tbody>
</table>
<p class="ox-thesis-note arithmatex"><em>Note:</em> All processes use innovations $\varepsilon_t \sim N(0,1)$ and are demeaned before the spectral test. White noise: $x_t=\varepsilon_t$. AR(1): $x_t=\rho x_{t-1}+\varepsilon_t$, with $\rho\in\{0.85,0.95\}$. Local-to-unit-root AR(1): $x_t=(1-1/T)x_{t-1}+\varepsilon_t$. Random-walk level: $x_t=x_{t-1}+\varepsilon_t$. Differenced random walk: the observed stationary transform is $x_t=\Delta z_t=\varepsilon_t$ for $z_t=z_{t-1}+\varepsilon_t$. Mean shift: $x_t=\varepsilon_t+1.5 \times \mathbf{1}\{t>T/2\}$. Fractional process: $x_t=(1-L)^{-0.35}\varepsilon_t$. AR(2) stochastic cycle: $x_t=2r\cos(2\pi/64)x_{t-1}-r^2x_{t-2}+\varepsilon_t$, with $r\in\{0.90,0.95\}$. Sinusoid: $x_t=\sqrt{2s}\sin(2\pi t/p+\phi)+\varepsilon_t$, with $\phi\sim U(0,2\pi)$, $(p,s)\in\{(64,0.5),(64,1),(32,1),(128,1)\}$.</p>

The simulation uses $T=220$ observations, corresponding to the shorter empirical financial series in the thesis. For each process, 2,000 samples are simulated. The reported local hump rate is a conservative descriptive band average check: it records how often the smoothed spectrum has greater average power in the 48--96 quarter band than in both flanking trough regions, which mimics our visual diagnosis in Section [2.3.1](#sec:cycle_results_descriptive). The formal peak test columns report size-adjusted rejection rates[^16]. Ideally, the size-adjusted test should reject close to the nominal rate for stationary no-cycle benchmarks and for off-band placebo cycles that are well separated from the target band, but reject much more often when a true 48--96 quarter cycle is present in the data.

<a id="tab:spurious_cycle_results"></a>
<table class="ox-thesis-table arithmatex">
<caption>Simulation evidence on size-adjusted DFC-band peak detection, T = 220.</caption>
<thead>
<tr><th>DGP</th><th>True DFC cycle</th><th>Local hump (pct.)</th><th>AR(1) size-adj. 10 pct.</th><th>AR(1) size-adj. 5 pct.</th></tr>
</thead>
<tbody>
<tr><td>White noise</td><td>No</td><td>31.1</td><td>9.8</td><td>5.2</td></tr>
<tr><td>AR(1), rho = 0.85</td><td>No</td><td>0.3</td><td>9.5</td><td>4.6</td></tr>
<tr><td>AR(1), rho = 0.95</td><td>No</td><td>0.0</td><td>11.2</td><td>5.5</td></tr>
<tr><td>Local-to-unit-root AR(1), rho = 1 - 1/T</td><td>No</td><td>0.0</td><td>7.7</td><td>3.5</td></tr>
<tr><td>Random walk in levels</td><td>No</td><td>0.0</td><td>8.0</td><td>3.7</td></tr>
<tr><td>Differenced random walk</td><td>No</td><td>32.9</td><td>10.3</td><td>5.2</td></tr>
<tr><td>Mean shift at T/2</td><td>No</td><td>9.8</td><td>56.8</td><td>41.9</td></tr>
<tr><td>Fractionally integrated, d = 0.35</td><td>No</td><td>8.6</td><td>33.2</td><td>22.4</td></tr>
<tr><td>AR(2) stochastic cycle, 64 quarters, r = 0.90</td><td>Yes</td><td>0.0</td><td>47.4</td><td>36.4</td></tr>
<tr><td>AR(2) stochastic cycle, 64 quarters, r = 0.95</td><td>Yes</td><td>0.0</td><td>78.1</td><td>71.6</td></tr>
<tr><td>Sinusoid, 64 quarters, SNR = 0.5</td><td>Yes</td><td>0.0</td><td>100.0</td><td>100.0</td></tr>
<tr><td>Sinusoid, 64 quarters, SNR = 1.0</td><td>Yes</td><td>0.0</td><td>100.0</td><td>100.0</td></tr>
<tr><td>Placebo sinusoid, 32 quarters, SNR = 1.0</td><td>No</td><td>0.0</td><td>2.9</td><td>0.9</td></tr>
<tr><td>Placebo sinusoid, 128 quarters, SNR = 1.0</td><td>No</td><td>0.9</td><td>22.6</td><td>12.0</td></tr>
</tbody>
</table>
<p class="ox-thesis-note arithmatex"><em>Note:</em> True DFC cycle indicates whether the process contains a genuine cycle in the target 48–96 quarter band. Local hump is the share of simulations in which the smoothed spectrum has higher average power in the target band than in both neighbouring trough bands; it is a conservative descriptive band-average check, not a formal test or power measure. AR(1) size-adj. 10 pct. and 5 pct. report rejection rates, in percent, using cutoffs calibrated against the chi-square benchmark distribution used by the AR(1)-normalised peak test.</p>

<figure id="fig:spurious_cycle_simulation_summary">
<img src="../assets/spectraldensity/spurious_cycle_simulation_summary.png" />
<p class="ox-thesis-note arithmatex"><em>Note:</em> The bars report the size-adjusted rejection rate of the AR(1)-null peak test at the 5 percent level across 2,000 simulated samples with <span class="math inline arithmatex"><em>T</em> = 220</span>. The dashed vertical line marks the nominal 5 percent size. Processes with a true 48–96 quarter cycle are power benchmarks; other processes are false positive or frequency specificity checks.</p>
<figcaption>Simulation-based false positive and power diagnostics</figcaption>
</figure>

In the table above, the relevant baseline benchmark is the nominal rejection rate itself (i.e. ideally, the adjusted rejection rate at 10% level should be 10%). The stationary no-cycle benchmarks --- white noise, AR(1) processes, the local-to-unit-root process, and the differenced random walk --- produce rejection rates close to the nominal size. This is reassuring: the size-adjusted peak test is not simply forced to find a medium-term financial cycle in every persistent or stationary series. Random-walk levels also show low rejection rates in this design, but they remain invalid inputs for spectral interpretation because their population spectrum is not well defined in the usual stationary sense.

The main vulnerable cases are the mean shift process and the fractionally integrated process. Both contain no stable 48--96 quarter cycle, yet they reject much more often under the AR(1) benchmark. These rows identify a specific and interpretable limitation of the workflow: structural breaks and long-memory persistence can place enough power at medium frequencies to look like a local financial cycle peak. This does not undermine the whole procedure; rather, it clarifies when the empirical evidence should be treated most cautiously. By contrast, the true cycle rows --- the 64-quarter stochastic cycles and sinusoids --- are power benchmarks. Their high rejection rates show that the test can detect a genuine DFC-band cycle when one is present. The 32-quarter placebo sinusoid is rarely rejected, which suggests useful frequency specificity on the short side of the target band. The 128-quarter placebo sinusoid rejects more often, indicating that very low-frequency movements can still spill into the DFC band and should be treated cautiously.

The local hump column reinforces why visual inspection alone is not enough. Some no-cycle processes can sometimes place more smoothed spectral mass in the target band than in the flanking bands, even when the formal size-adjusted test does not reject. Conversely, true cycle designs can fail this conservative band average rule when power spills into a neighbouring low-frequency band, even though the formal peak test still rejects strongly. This distinction matters for the thesis: the evidence is strongest for stationary growth rate indicators with clear local peaks and AR(1)-null rejections, while level-like or ambiguously stationary credit aggregates should be interpreted as suggestive rather than definitive.

Overall, the simulation evidence supports the empirical workflow used in the thesis. It shows that a prespecified 48--96 quarter peak is not mechanically generated by standard no-cycle benchmarks, that the test has power against true DFC-band cycles, and that the main failure modes are concentrated in identifiable cases such as structural breaks and long-memory persistence. The results therefore strengthen the interpretation of the main spectral evidence, while also motivating the cautious treatment of level-like or ambiguously stationary financial aggregates.

<a id="app:further_spec_results"></a>
# Further Spectral Analysis Results
The main text focuses on the United States and the United Kingdom because of their long, high-quality data and well-established financial systems. This appendix complements that discussion by reporting the BGP local peak test on the same three Domestic Financial Cycle indicators -- credit-to-GDP, real credit growth, and property price growth -- for five additional advanced economies for which BIS data are available: Australia (AU), Canada (CA), Germany (DE), France (FR), and Japan (JP). The exercise uses the same DFC Refined band ($\Omega_P=[48,96]$ quarters, with flanking troughs $\Omega_{T1}=[6,48]$ and $\Omega_{T2}=[96,160]$) and the same Monte Carlo procedure ($10^6$ draws on the full sample) as in Section [2](#sec:financial_cycles) of the main text.[^17]

<a id="tab:peak_test_dfc_other"></a>
<table class="ox-thesis-table arithmatex">
<caption>Peak tests on DFC indicators for additional economies</caption>
<thead>
<tr><th>Variable</th><th>Country</th><th>$p$ Flat (%)</th><th>$p$ AR(1) (%)</th></tr>
</thead>
<tbody>
<tr><td>Credit/GDP</td><td>AU</td><td>0.00***</td><td>36.82</td></tr>
<tr><td>Credit/GDP</td><td>CA</td><td>0.00***</td><td>18.54</td></tr>
<tr><td>Credit/GDP</td><td>DE</td><td>0.00***</td><td>9.30*</td></tr>
<tr><td>Credit/GDP</td><td>FR</td><td>0.00***</td><td>32.08</td></tr>
<tr><td>Credit/GDP</td><td>JP</td><td>0.00***</td><td>3.86**</td></tr>
<tr><td>Property Price Growth (YoY)</td><td>AU</td><td>5.40*</td><td>16.21</td></tr>
<tr><td>Property Price Growth (YoY)</td><td>CA</td><td>0.02***</td><td>5.29*</td></tr>
<tr><td>Property Price Growth (YoY)</td><td>DE</td><td>0.18***</td><td>32.02</td></tr>
<tr><td>Property Price Growth (YoY)</td><td>FR</td><td>0.00***</td><td>3.16**</td></tr>
<tr><td>Property Price Growth (YoY)</td><td>JP</td><td>0.01***</td><td>38.96</td></tr>
<tr><td>Real Credit Growth (QoQ)</td><td>AU</td><td>0.15***</td><td>0.73***</td></tr>
<tr><td>Real Credit Growth (QoQ)</td><td>CA</td><td>54.40</td><td>58.95</td></tr>
<tr><td>Real Credit Growth (QoQ)</td><td>DE</td><td>0.03***</td><td>6.21*</td></tr>
<tr><td>Real Credit Growth (QoQ)</td><td>FR</td><td>0.00***</td><td>0.00***</td></tr>
<tr><td>Real Credit Growth (QoQ)</td><td>JP</td><td>0.00***</td><td>0.00***</td></tr>
</tbody>
</table>
<p class="ox-thesis-note arithmatex"><em>Note:</em> Peak tests are run on the full sample for the refined DFC band of 48–96 quarters. $H_0$ is either a flat white-noise spectrum or an AR(1) spectrum; $H_1$ is a spectral peak in the 48–96 quarter band relative to the flanking troughs at 6–48 and 96–160 quarters. Entries are $p$-values based on a simulated distribution of 1,000,000 draws. $^{***}$, $^{**}$, and $^{*}$ denote rejection at the 1, 5, and 10 percent levels.</p>

The results in [Table](#tab:peak_test_dfc_other) suggest that the picture across these additional economies is markedly more heterogeneous than for the US and UK. The flat (white-noise) null is rejected at the 1% level for almost every series-country pair, but this on its own is uninformative: the standard DFC indicators are highly persistent and load heavily on low frequencies, so any reasonable smoothing will deliver large spectral mass at long periodicities relative to a flat benchmark. The relevant question is whether that mass takes the form of a local hump in the 48--96 quarter band, and the AR(1) null speaks more directly to this. Once persistence is controlled for, the evidence becomes much patchier: the AR(1) null is rejected at the 5% level for only five of the fifteen series-country pairs (Australian, French, and Japanese real credit growth, plus Japanese credit-to-GDP and French property prices), and several indicators -- Australian property price growth, Canadian real credit growth, and Japanese property price growth among them -- yield AR(1) $p$-values well above 10%.

The pattern of rejection also differs across indicators by country in a way that does not point to a single common cycle: Australia and Japan show the cleanest evidence in credit aggregates, France and Canada in property prices, and Germany shows weaker evidence overall. Thus, while there is some local support for the BIS DFC band in each of these economies, no single indicator displays the kind of consistent, statistically robust hump that the US and UK results would lead one to expect. This cross-country heterogeneity is itself a useful finding: it suggests that the structural and institutional drivers of medium-term financial fluctuations differ across economies, and motivates the country-by-country phase estimation used in the monetary policy section of the thesis rather than imposing a common cycle definition across countries.

Direct visual inspection of the smoothed spectral density estimates reinforces this more cautious reading. Figures [20](#fig:spectral_density_au)--[28](#fig:spectral_density_jp) show the estimated spectral densities of the three DFC indicators in each of the five additional economies. The complementary figures [21](#fig:spectral_ci_au)--[29](#fig:spectral_ci_jp) report bootstrap confidence intervals (90%, 80%, 66%) around the full sample point estimate, computed using $10{,}000$ Gaussian draws from the implied autocovariance function as detailed in Appendix [5](#app:spectral_diagnostics). Apart from the indicators flagged by the formal test, clear local peaks in the 48--96 quarter band are in fact difficult to identify in many of these spectra. Overall, the additional cross-country evidence should be read as broadly consistent with -- but considerably weaker than -- the medium-term financial cycle documented for the US and UK, and as a reminder that the strength and even the existence of a clean DFC-band peak is itself country- and indicator-specific.

<figure id="fig:spectral_density_au">
<img src="../assets/spectraldensity/spectraldensity_DFC_OTHER_IDAU_overlay.png" />
<p class="ox-thesis-note arithmatex"><em>Note:</em> Smoothed estimated spectral density for Australian credit-to-GDP (panel A), property price YoY growth rate (panel B), and real credit QoQ growth rate (panel C). Orange line: full sample; blue line: post-1980 sample. Background shading intensity indicates three periodicity ranges: 6–32 quarters (short-term business cycles), 32–48 quarters (medium-term business-financial cycles), 48–96 quarters (medium-term financial cycles).</p>
<figcaption>Spectral density of key Australian financial indicators</figcaption>
</figure>

<figure id="fig:spectral_ci_au">
<img src="../assets/spectraldensity/ci/nkr13/specCI_DFC_OTHER_IDAU_full.png" />
<p class="ox-thesis-note arithmatex"><em>Note:</em> Bootstrapped spectral density confidence intervals for Australian credit-to-GDP (panel A), property price YoY growth rate (panel B), and real credit QoQ growth rate (panel C). Background shading intensity indicates three periodicity ranges: 6–32 quarters (short-term business cycles), 32–48 quarters (medium-term business-financial cycles), 48–96 quarters (medium-term financial cycles).</p>
<figcaption>Spectral density confidence intervals of key Australian financial indicators (full sample)</figcaption>
</figure>

<figure id="fig:spectral_density_ca">
<img src="../assets/spectraldensity/spectraldensity_DFC_OTHER_IDCA_overlay.png" />
<p class="ox-thesis-note arithmatex"><em>Note:</em> Smoothed estimated spectral density for Canadian credit-to-GDP (panel A), property price YoY growth rate (panel B), and real credit QoQ growth rate (panel C). Orange line: full sample; blue line: post-1980 sample. Background shading intensity indicates three periodicity ranges: 6–32 quarters (short-term business cycles), 32–48 quarters (medium-term business-financial cycles), 48–96 quarters (medium-term financial cycles).</p>
<figcaption>Spectral density of key Canadian financial indicators</figcaption>
</figure>

<figure id="fig:spectral_ci_ca">
<img src="../assets/spectraldensity/ci/nkr13/specCI_DFC_OTHER_IDCA_full.png" />
<p class="ox-thesis-note arithmatex"><em>Note:</em> Bootstrapped spectral density confidence intervals for Canadian credit-to-GDP (panel A), property price YoY growth rate (panel B), and real credit QoQ growth rate (panel C). Background shading intensity indicates three periodicity ranges: 6–32 quarters (short-term business cycles), 32–48 quarters (medium-term business-financial cycles), 48–96 quarters (medium-term financial cycles).</p>
<figcaption>Spectral density confidence intervals of key Canadian financial indicators (full sample)</figcaption>
</figure>

<figure id="fig:spectral_density_de">
<img src="../assets/spectraldensity/spectraldensity_DFC_OTHER_IDDE_overlay.png" />
<p class="ox-thesis-note arithmatex"><em>Note:</em> Smoothed estimated spectral density for German credit-to-GDP (panel A), property price YoY growth rate (panel B), and real credit QoQ growth rate (panel C). Orange line: full sample; blue line: post-1980 sample. Background shading intensity indicates three periodicity ranges: 6–32 quarters (short-term business cycles), 32–48 quarters (medium-term business-financial cycles), 48–96 quarters (medium-term financial cycles).</p>
<figcaption>Spectral density of key German financial indicators</figcaption>
</figure>

<figure id="fig:spectral_ci_de">
<img src="../assets/spectraldensity/ci/nkr13/specCI_DFC_OTHER_IDDE_full.png" />
<p class="ox-thesis-note arithmatex"><em>Note:</em> Bootstrapped spectral density confidence intervals for German credit-to-GDP (panel A), property price YoY growth rate (panel B), and real credit QoQ growth rate (panel C). Background shading intensity indicates three periodicity ranges: 6–32 quarters (short-term business cycles), 32–48 quarters (medium-term business-financial cycles), 48–96 quarters (medium-term financial cycles).</p>
<figcaption>Spectral density confidence intervals of key German financial indicators (full sample)</figcaption>
</figure>

<figure id="fig:spectral_density_fr">
<img src="../assets/spectraldensity/spectraldensity_DFC_OTHER_IDFR_overlay.png" />
<p class="ox-thesis-note arithmatex"><em>Note:</em> Smoothed estimated spectral density for French credit-to-GDP (panel A), property price YoY growth rate (panel B), and real credit QoQ growth rate (panel C). Orange line: full sample; blue line: post-1980 sample. Background shading intensity indicates three periodicity ranges: 6–32 quarters (short-term business cycles), 32–48 quarters (medium-term business-financial cycles), 48–96 quarters (medium-term financial cycles).</p>
<figcaption>Spectral density of key French financial indicators</figcaption>
</figure>

<figure id="fig:spectral_ci_fr">
<img src="../assets/spectraldensity/ci/nkr13/specCI_DFC_OTHER_IDFR_full.png" />
<p class="ox-thesis-note arithmatex"><em>Note:</em> Bootstrapped spectral density confidence intervals for French credit-to-GDP (panel A), property price YoY growth rate (panel B), and real credit QoQ growth rate (panel C). Background shading intensity indicates three periodicity ranges: 6–32 quarters (short-term business cycles), 32–48 quarters (medium-term business-financial cycles), 48–96 quarters (medium-term financial cycles).</p>
<figcaption>Spectral density confidence intervals of key French financial indicators (full sample)</figcaption>
</figure>

<figure id="fig:spectral_density_jp">
<img src="../assets/spectraldensity/spectraldensity_DFC_OTHER_IDJP_overlay.png" />
<p class="ox-thesis-note arithmatex"><em>Note:</em> Smoothed estimated spectral density for Japanese credit-to-GDP (panel A), property price YoY growth rate (panel B), and real credit QoQ growth rate (panel C). Orange line: full sample; blue line: post-1980 sample. Background shading intensity indicates three periodicity ranges: 6–32 quarters (short-term business cycles), 32–48 quarters (medium-term business-financial cycles), 48–96 quarters (medium-term financial cycles).</p>
<figcaption>Spectral density of key Japanese financial indicators</figcaption>
</figure>

<figure id="fig:spectral_ci_jp">
<img src="../assets/spectraldensity/ci/nkr13/specCI_DFC_OTHER_IDJP_full.png" />
<p class="ox-thesis-note arithmatex"><em>Note:</em> Bootstrapped spectral density confidence intervals for Japanese credit-to-GDP (panel A), property price YoY growth rate (panel B), and real credit QoQ growth rate (panel C). Background shading intensity indicates three periodicity ranges: 6–32 quarters (short-term business cycles), 32–48 quarters (medium-term business-financial cycles), 48–96 quarters (medium-term financial cycles).</p>
<figcaption>Spectral density confidence intervals of key Japanese financial indicators (full sample)</figcaption>
</figure>

<a id="app:mp_effects"></a>
# Further Results on Monetary Policy Effects
<a id="app:mp_effects_raw"></a>
## Monetary Policy Effects Using Raw Target Factor Surprises
<figure id="fig:mp_raw" class="ox-thesis-figure-group">
<figure id="fig:mp_linear_raw">
<img src="../assets/monetary_policy/lin-baseline-panel-1.png" />
<figcaption>Linear IRF</figcaption>
</figure>
<figure id="fig:mp_regime_raw">
<img src="../assets/monetary_policy/dfc-regime-panel-1.png" />
<figcaption>Regime-dependent</figcaption>
</figure>
<p class="ox-thesis-note arithmatex"><em>Note:</em> Both panels use the raw target factor surprise before removing potential central bank information effects. Panel (a) reports the baseline linear local projection; panel (b) reports the full-information DFC regime-dependent specification. Responses are accumulated changes over the local projection horizon and shaded bands report 90% Newey–West confidence intervals.</p>
<figcaption>Estimated IRF with raw target factor surprises</figcaption>
</figure>

<a id="app:mp_effects_subsample"></a>
## Monetary Policy Effects Using Subsamples
<figure id="fig:mp_linear_nogfc" class="ox-thesis-figure-group">
<figure id="fig:mp_linear_nogfc_jk">
<img src="../assets/monetary_policy/subsample-no-gfc-baseline-jk.png" />
<figcaption>Pure MP shock</figcaption>
</figure>
<figure id="fig:mp_linear_nogfc_pm">
<img src="../assets/monetary_policy/subsample-no-gfc-baseline-pm.png" />
<figcaption>“Poor man’s” identification</figcaption>
</figure>
<p class="ox-thesis-note arithmatex"><em>Note:</em> The figure repeats the baseline linear LP after excluding 2008Q3–2010Q4. Panel (a) uses the pure MP shock; panel (b) uses the poor man’s shock. Responses are accumulated changes over the local projection horizon and shaded bands report 90% Newey–West confidence intervals.</p>
<figcaption>Baseline linear LP robustness, excluding the Great Financial Crisis</figcaption>
</figure>

<figure id="fig:mp_regime_nogfc" class="ox-thesis-figure-group">
<figure id="fig:mp_regime_nogfc_jk">
<img src="../assets/monetary_policy/subsample-no-gfc-regime-jk.png" />
<figcaption>Pure MP shock</figcaption>
</figure>
<figure id="fig:mp_regime_nogfc_pm">
<img src="../assets/monetary_policy/subsample-no-gfc-regime-pm.png" />
<figcaption>“Poor man’s” identification</figcaption>
</figure>
<p class="ox-thesis-note arithmatex"><em>Note:</em> The figure repeats the full-information DFC regime-dependent LP after excluding 2008Q3–2010Q4. Panel (a) uses the pure MP shock; panel (b) uses the poor man’s shock. Red lines condition on DFC upswings and blue lines on downswings; shaded bands report 90% Newey–West confidence intervals.</p>
<figcaption>Regime-dependent LP robustness, excluding the Great Financial Crisis</figcaption>
</figure>

<figure id="fig:mp_linear_precovid" class="ox-thesis-figure-group">
<figure id="fig:mp_linear_precovid_jk">
<img src="../assets/monetary_policy/subsample-pre-covid-baseline-jk.png" />
<figcaption>Pure MP shock</figcaption>
</figure>
<figure id="fig:mp_linear_precovid_pm">
<img src="../assets/monetary_policy/subsample-pre-covid-baseline-pm.png" />
<figcaption>“Poor man’s” identification</figcaption>
</figure>
<p class="ox-thesis-note arithmatex"><em>Note:</em> The figure repeats the baseline linear LP on the sample ending in 2019Q4. Panel (a) uses the pure MP shock; panel (b) uses the poor man’s shock. Responses are accumulated changes over the local projection horizon and shaded bands report 90% Newey–West confidence intervals.</p>
<figcaption>Baseline linear LP robustness, pre-COVID sample</figcaption>
</figure>

<figure id="fig:mp_regime_precovid" class="ox-thesis-figure-group">
<figure id="fig:mp_regime_precovid_jk">
<img src="../assets/monetary_policy/subsample-pre-covid-regime-jk.png" />
<figcaption>Pure MP shock</figcaption>
</figure>
<figure id="fig:mp_regime_precovid_pm">
<img src="../assets/monetary_policy/subsample-pre-covid-regime-pm.png" />
<figcaption>“Poor man’s” identification</figcaption>
</figure>
<p class="ox-thesis-note arithmatex"><em>Note:</em> The figure repeats the full-information DFC regime-dependent LP on the sample ending in 2019Q4. Panel (a) uses the pure MP shock; panel (b) uses the poor man’s shock. Red lines condition on DFC upswings and blue lines on downswings; shaded bands report 90% Newey–West confidence intervals.</p>
<figcaption>Regime-dependent LP robustness, pre-COVID sample</figcaption>
</figure>

<figure id="fig:mp_linear_precovid_nogfc" class="ox-thesis-figure-group">
<figure id="fig:mp_linear_precovid_nogfc_jk">
<img src="../assets/monetary_policy/subsample-pre-covid-no-gfc-baseline-jk.png" />
<figcaption>Pure MP shock</figcaption>
</figure>
<figure id="fig:mp_linear_precovid_nogfc_pm">
<img src="../assets/monetary_policy/subsample-pre-covid-no-gfc-baseline-pm.png" />
<figcaption>“Poor man’s” identification</figcaption>
</figure>
<p class="ox-thesis-note arithmatex"><em>Note:</em> The figure repeats the baseline linear LP on the sample ending in 2019Q4 while excluding 2008Q3–2010Q4. Panel (a) uses the pure MP shock; panel (b) uses the poor man’s shock. Responses are accumulated changes over the local projection horizon and shaded bands report 90% Newey–West confidence intervals.</p>
<figcaption>Baseline linear LP robustness, pre-COVID sample excluding the Great Financial Crisis</figcaption>
</figure>

<figure id="fig:mp_regime_precovid_nogfc" class="ox-thesis-figure-group">
<figure id="fig:mp_regime_precovid_nogfc_jk">
<img src="../assets/monetary_policy/subsample-pre-covid-no-gfc-regime-jk.png" />
<figcaption>Pure MP shock</figcaption>
</figure>
<figure id="fig:mp_regime_precovid_nogfc_pm">
<img src="../assets/monetary_policy/subsample-pre-covid-no-gfc-regime-pm.png" />
<figcaption>“Poor man’s” identification</figcaption>
</figure>
<p class="ox-thesis-note arithmatex"><em>Note:</em> The figure repeats the full-information DFC regime-dependent LP on the sample ending in 2019Q4 while excluding 2008Q3–2010Q4. Panel (a) uses the pure MP shock; panel (b) uses the poor man’s shock. Red lines condition on DFC upswings and blue lines on downswings; shaded bands report 90% Newey–West confidence intervals.</p>
<figcaption>Regime-dependent LP robustness, pre-COVID sample excluding the Great Financial Crisis</figcaption>
</figure>

<a id="app:mp_effects_realtime"></a>
## Results Using Real-time Regimes
Figures [51](#fig:dfc_us_comparison) and [52](#fig:dfc_uk_comparison) compare the full-information estimates of the domestic financial cycle and their real-time counterparts for the US and the UK. Figure [53](#fig:dfc_regime_dist_realtime) shows the distribution of the real-time upswing/downswing regime. The real-time series is subject to the standard "endpoint problem" in macroeconometrics at each date $t$, hence it is noisier than the full-information series: there are some ex post spurious switches between upswings and downswings. In addition, the more demanding data requirements exclude Portugal and Greece from our samples. Estimated IRFs using the real-time regimes are reported in Figure [56](#fig:mp_regime_realtime).

<figure id="fig:dfc_us_comparison">
<img src="../assets/demos/dfc_full_vs_realtime_us.png" />
<p class="ox-thesis-note arithmatex"><em>Note:</em> The blue line is the full-information composite DFC estimated using the full sample. Lighter grey lines are recursive real-time estimates obtained by re-running the same DFC filter on selected vintages ending every eight quarters from 1990, plus the final vintage. Grey shading marks NBER recessions and red dashed vertical lines mark systemic banking crisis onset dates from Laeven and Valencia (2018).</p>
<figcaption>Extracted US medium-term financial cycles, full-information vs real-time</figcaption>
</figure>

<figure id="fig:dfc_uk_comparison">
<img src="../assets/demos/dfc_full_vs_realtime_gb.png" />
<p class="ox-thesis-note arithmatex"><em>Note:</em> The blue line is the full-information composite DFC estimated using the full sample. Lighter grey lines are recursive real-time estimates obtained by re-running the same DFC filter on selected vintages ending every eight quarters from 1990, plus the final vintage. Red dashed vertical lines mark systemic banking crisis onset dates from Laeven and Valencia (2018); no recession shading is shown for the UK.</p>
<figcaption>Extracted UK medium-term financial cycles, full-information vs real-time</figcaption>
</figure>

<figure id="fig:dfc_regime_dist_realtime">
<img src="../assets/monetary_policy/dfc_regime_realtime_heatmap.png" />
<p class="ox-thesis-note arithmatex"><em>Note:</em> The heatmap reports the predetermined real-time DFC regime used in the robustness checks. Orange indicates a lagged recursive real-time upswing, blue indicates a lagged recursive real-time downswing, and grey indicates missing real-time regime information.</p>
<figcaption>Real-time DFC regime by economy and time (quarter)</figcaption>
</figure>

<figure id="fig:mp_regime_realtime" class="ox-thesis-figure-group">
<figure id="fig:mp_regime_realtime_jk">
<img src="../assets/monetary_policy/pure-regime-realtime-panel-1.png" />
<figcaption>Pure MP shock</figcaption>
</figure>
<figure id="fig:mp_regime_realtime_pm">
<img src="../assets/monetary_policy/pm-regime-realtime-panel-1.png" />
<figcaption>“Poor man’s” identification</figcaption>
</figure>
<p class="ox-thesis-note arithmatex"><em>Note:</em> The figure repeats the regime-dependent LP using recursive real-time DFC regimes instead of full-information regimes. Panel (a) uses the pure MP shock; panel (b) uses the poor man’s shock. Red lines condition on real-time DFC upswings and blue lines on downswings; shaded bands report 90% Newey–West confidence intervals.</p>
<figcaption>Regime-dependent LP robustness, real-time DFC regime</figcaption>
</figure>


# References

<a id="refs"></a>
Aastveit, Knut Are, and André K. Anundsen. 2022. "Asymmetric Effects of Monetary Policy in Regional Housing Markets." *American Economic Journal: Macroeconomics* 14 (4): 499--529. <https://doi.org/10.1257/mac.20190011>.

Adrian, Tobias, and Hyun Song Shin. 2010. "Liquidity and Leverage." *Journal of Financial Intermediation*.

Adrian, Tobias, and Hyun Song Shin. 2014. "Procyclical Leverage and Value-at-Risk." *The Review of Financial Studies* 27 (2): 373--403. <https://doi.org/10.1093/rfs/hht068>.

Aikman, David, Andrew G. Haldane, and Benjamin D. Nelson. 2015. "Curbing the Credit Cycle." *The Economic Journal* 125 (585): 1072--109. <https://doi.org/10.1111/ecoj.12113>.

Aikman, David, Andreas Lehnert, Nellie Liang, and Michele Modugno. 2016. "Financial Vulnerabilities, Macroeconomic Dynamics, and Monetary Policy." SSRN Scholarly Paper No. 2810052. Rochester, NY, Pre-published July. <https://doi.org/10.17016/FEDS.2016.055>.

Aldasoro, Iñaki, Stefan Avdjiev, Claudio Borio, and Piti Disyatat. 2020. *Global and Domestic Financial Cycles: Variations on a Theme*. May 11. <https://www.bis.org/publ/work864.htm>.

Aliber, Robert Z., and Charles Poor Kindleberger. 2017. *Manias, Panics, and Crashes: A History of Financial Crises*. Seventh edition. Palgrave Macmillan.

Alpanda, Sami, Eleonora Granziera, and Sarah Zubairy. 2021. "State Dependence of Monetary Policy Across Business, Credit and Interest Rate Cycles." *European Economic Review* 140 (November): 103936. <https://doi.org/10.1016/j.euroecorev.2021.103936>.

Alpanda, Sami, and Sarah Zubairy. 2019. "Household Debt Overhang and Transmission of Monetary Policy." *Journal of Money, Credit and Banking* 51 (5): 1265--307. <https://www.jstor.org/stable/26740822>.

Altavilla, Carlo, Fabio Canova, and Matteo Ciccarelli. 2020. "Mending the Broken Link: Heterogeneous Bank Lending Rates and Monetary Policy Pass-Through." *Journal of Monetary Economics* 110 (April): 81--98. <https://doi.org/10.1016/j.jmoneco.2019.01.001>.

Bank for International Settlements. 2018. *IV. Moving Forward with Macroprudential Frameworks*. Bank for International Settlements.

Bank for International Settlements. 2024. *II. Monetary Policy in the 21st Century: Lessons Learned and Challenges Ahead*. Bank for International Settlements.

Baron, Samuel Jones Lloyd Overstone, 1st. 1971. *The Correspondence of Lord Overstone*. Cambridge University Press. <https://books.google.com?id=EI0hzQEACAAJ>.

Bauer, Michael D., and Eric T. Swanson. 2022. "A Reassessment of Monetary Policy Surprises and High-Frequency Identification." Working Paper No. 29939. Pre-published April. <https://doi.org/10.3386/w29939>.

Baxter, Marianne, and Robert G. King. 1999. "Measuring Business Cycles: Approximate Band-Pass Filters for Economic Time Series." *The Review of Economics and Statistics* 81 (4): 575--93. <https://doi.org/10.1162/003465399558454>.

Beaudry, Paul, Dana Galizia, and Franck Portier. 2020. "Putting the Cycle Back into Business Cycle Analysis." *American Economic Review* 110 (1): 1--47. <https://doi.org/10.1257/aer.20190789>.

Benati, Luca. 2023. "Exploring the Trade-Off Between Leaning Against Credit and Stabilizing Economic Activity." *Economics Letters* 223 (February): 110994. <https://doi.org/10.1016/j.econlet.2023.110994>.

Bernanke, Ben, Mark Gertler, and Simon Gilchrist. 1998. "The Financial Accelerator in a Quantitative Business Cycle Framework." *NBER Working Paper Series* w6455.

Boissay, Frédéric, Fabrice Collard, and Frank Smets. 2016. "Booms and Banking Crises." *Journal of Political Economy* 124 (2): 489--538. <https://doi.org/10.1086/685475>.

Bordalo, Pedro, Nicola Gennaioli, Yueran Ma, and Andrei Shleifer. 2020. "Overreaction in Macroeconomic Expectations." *American Economic Review* 110 (9): 2748--82. <https://doi.org/10.1257/aer.20181219>.

Borio, Claudio. 2006. "Monetary and Prudential Policies at a Crossroads? New Challenges in the New Century." *SSRN Electronic Journal*, BIS Working Papers. <https://doi.org/10.2139/ssrn.948135>.

Borio, Claudio. 2014a. "The Financial Cycle and Macroeconomics: What Have We Learnt?" *Journal of Banking & Finance* 45: 182--98. <https://www.sciencedirect.com/science/article/pii/S0378426613003063>.

Borio, Claudio. 2014b. *The International Monetary and Financial System: Its Achilles Heel and What to Do about It*. August 31. <https://www.bis.org/publ/work456.htm>.

Borio, Claudio. 2017. *Through the Looking Glass*.

Borio, Claudio. 2024. *Whither Inflation Targeting as a Global Monetary Standard?* December.

Borio, Claudio, and Piti Disyatat. 2011. "Global Imbalances and the Financial Crisis: Link or No Link?" *SSRN Electronic Journal*, ahead of print. <https://doi.org/10.2139/ssrn.1859410>.

Borio, Claudio, Piti Disyatat, and Mikael Juselius. 2016. "Rethinking Potential Output: Embedding Information about the Financial Cycle." *Oxford Economic Papers*, December 19, gpw063. <https://doi.org/10.1093/oep/gpw063>.

Borio, Claudio, and Mathias Drehmann. 2009. "Assessing the Risk of Banking Crises -- Revisited." SSRN Scholarly Paper No. 1513316. Rochester, NY, Pre-published March 2. <https://papers.ssrn.com/abstract=1513316>.

Borio, Claudio, Mathias Drehmann, and Fan Dora Xia. 2020. "Forecasting Recessions: The Importance of the Financial Cycle." *Journal of Macroeconomics* 66 (December): 103258. <https://doi.org/10.1016/j.jmacro.2020.103258>.

Borio, Claudio, and Philip Lowe. 2002. "Assessing the Risk of Banking Crises." *BIS Quarterly Review*. <https://ideas.repec.org//a/bis/bisqtr/0212e.html>.

Borio, Claudio, and Philip William Lowe. 2002. "Asset Prices, Financial and Monetary Stability: Exploring the Nexus." *SSRN Electronic Journal*, BIS Working Papers. <https://doi.org/10.2139/ssrn.846305>.

Borio, Claudio, and Philip William Lowe. 2004. "Securing Sustainable Price Stability: Should Credit Come Back from the Wilderness?" SSRN Scholarly Paper No. 782324. Rochester, NY, Pre-published July 1. <https://doi.org/10.2139/ssrn.782324>.

Brunnermeier, Markus K., and Yuliy Sannikov. 2014. "A Macroeconomic Model with a Financial Sector." *American Economic Review* 104 (2): 379--421. <https://doi.org/10.1257/aer.104.2.379>.

Bruns, Martin, and Michele Piffer. 2021. "Monetary Policy Shocks over the Business Cycle: Extending the Smooth Transition Framework." *IDEAS Working Paper Series from RePEc* (St. Louis, United States). <https://www.proquest.com/docview/2585942729?pq-origsite=primo&searchKeywords=Bruns%2C%20M.%2C%20Piffer%2C%20M.%2C%202021.%20Monetary%20Policy%20Shocks%20over%20the%20Business%20Cycle%3A%20Extending%20the%20Smooth%20Transition%20Framework.%20Mimeo.&sourcetype=Working%20Papers>.

Bry, Gerhard, and Charlotte Boschan. 1971. *Cyclical Analysis of Time Series: Selected Procedures and Computer Programs*. Book. NBER. <https://www.nber.org/books-and-chapters/cyclical-analysis-time-series-selected-procedures-and-computer-programs>.

Bussière, Matthieu, Jin Cao, Jakob de Haan, et al. 2021. "The Interaction Between Macroprudential Policy and Monetary Policy: Overview." *Review of International Economics* 29 (1): 1--19. <https://doi.org/10.1111/roie.12505>.

Calza, Alessandro, Tommaso Monacelli, and Livio Stracca. 2013. "Housing Finance and Monetary Policy." *Journal of the European Economic Association* 11: 101--22. <https://www.jstor.org/stable/23355061>.

Christiano, Lawrence J., and Terry J. Fitzgerald. 2003. "The Band Pass Filter." *International Economic Review* 44 (2): 435--65. <https://doi.org/10.1111/1468-2354.t01-1-00076>.

Cieslak, Anna, Stephen Hansen, Michael McMahon, and Song Xiao. 2023. "Policymakers' Uncertainty." Working Paper No. 31849. Pre-published November. <https://doi.org/10.3386/w31849>.

Claessens, Stijn, M. Ayhan Kose, and Marco E. Terrones. 2012. "How Do Business and Financial Cycles Interact?" *Journal of International Economics*, Symposium on the Global Dimensions of the Financial Crisis, vol. 87 (1): 178--90. <https://doi.org/10.1016/j.jinteco.2011.11.008>.

Cogley, Timothy, and James M. Nason. 1995. "Effects of the Hodrick-Prescott Filter on Trend and Difference Stationary Time Series Implications for Business Cycle Research." *Journal of Economic Dynamics and Control* 19 (1): 253--78. <https://doi.org/10.1016/0165-1889(93)00781-X>.

Comin, Diego, and Mark Gertler. 2006. "Medium-Term Business Cycles." *American Economic Review* 96 (3): 523--51. <https://doi.org/10.1257/aer.96.3.523>.

Corsetti, Giancarlo, Joao B Duarte, and Samuel Mann. 2022. "One Money, Many Markets." *Journal of the European Economic Association* 20 (1): 513--48. <https://doi.org/10.1093/jeea/jvab030>.

Cunnyngham, Jon. 1963. *The Spectral Analysis of Economic Time Series: 3.214:14*. U.S. Dept. of Commerce, Bureau of the Census. <https://hdl.handle.net/2027/pst.000070961997>.

Del Negro, Marco, and Christopher Otrok. 2007. "99 Luftballons: Monetary Policy and the House Price Boom Across U.S. States." *Journal of Monetary Economics* 54 (7): 1962--85. <https://doi.org/10.1016/j.jmoneco.2006.11.003>.

Dickey, D., and Wayne Fuller. 1979. "Distribution of the Estimators for Autoregressive Time Series With a Unit Root." *JASA. Journal of the American Statistical Association* 74 (June). <https://doi.org/10.2307/2286348>.

Dokko, Jane, Brian Doyle, Michael Kiley, et al. 2011. "Monetary Policy and the Global Housing Bubble." *Economic Policy* 26 (April): 237--87. <https://doi.org/10.1111/j.1468-0327.2011.00262.x>.

Drehmann, Mathias, Claudio Borio, and Kostas Tsatsaronis. 2012. "Characterising the Financial Cycle: Don't Lose Sight of the Medium Term!" *BIS Working Papers*.

Drehmann, Mathias, Claudio Borio, and Kostas Tsatsaronis. 2018. "Anchoring Countercyclical Capital Buffers: The Role of Credit Aggregates." *27th Issue (November 2011) of the International Journal of Central Banking*. <https://www.ijcb.org/journal/ijcb11q4a8.htm>.

Ehrenbergerova, Dominika, Josef Bajzik, and Tomas Havranek. 2023. "When Does Monetary Policy Sway House Prices? A Meta-Analysis." *IMF Economic Review* 71 (2): 538--73. <https://doi.org/10.1057/s41308-022-00185-5>.

Fanelli, Luca, and Antonio Marsi. 2021. "Unconventional Monetary Policy in the Euro Area: A Tale of Three Shocks." *SSRN Electronic Journal*, ahead of print. <https://doi.org/10.2139/ssrn.3924827>.

Filardo, Andrew, and Phurichai Rungcharoenkitkul. 2016. "A Quantitative Case for Leaning Against the Wind." *BIS Working Papers*, December.

Galati, Gabriele, Irma Hindrayanto, Siem Jan Koopman, and Marente Vlekke. 2016. "Measuring Financial Cycles in a Model-Based Analysis: Empirical Evidence for the United States and the Euro Area." *Economics Letters* 145 (August): 83--87. <https://doi.org/10.1016/j.econlet.2016.05.034>.

Galí, Jordi. 2014. "Monetary Policy and Rational Asset Price Bubbles." *American Economic Review* 104 (3): 721--52. <https://doi.org/10.1257/aer.104.3.721>.

Geanakoplos, John. 2010. "The Leverage Cycle." *NBER Macroeconomics Annual* 24 (1): 1--66. <https://doi.org/10.1086/648285>.

Gertler, Mark, and Nobuhiro Kiyotaki. 2010. "Financial Intermediation and Credit Policy in Business Cycle Analysis." In *Handbook of Monetary Economics*, vol. 3. Elsevier. <https://doi.org/10.1016/B978-0-444-53238-1.00011-9>.

Granger, C. W. J. 1966. "The Typical Spectral Shape of an Economic Variable." *Econometrica* 34 (1): 150--61. <https://doi.org/10.2307/1909859>.

Hamilton, James D. 2017. *Why You Should Never Use the Hodrick-Prescott Filter*. NBER Working Paper Series No. W23429. National Bureau of Economic Research.

Harding, Don, and Adrian Pagan. 2002. "Dissecting the Cycle: A Methodological Investigation." *Journal of Monetary Economics* 49 (2): 365--81. <https://doi.org/10.1016/S0304-3932(01)00108-8>.

Harvey, A. C., and A. Jaeger. 1993. "Detrending, Stylized Facts and the Business Cycle." *Journal of Applied Econometrics* 8 (3): 231--47. <https://www.jstor.org/stable/2284917>.

He, Zhiguo, and Arvind Krishnamurthy. 2013. "Intermediary Asset Pricing." *American Economic Review* 103 (2): 732--70. <https://doi.org/10.1257/aer.103.2.732>.

Herbst, Edward P., and Benjamin K. Johannsen. 2024. "Bias in Local Projections." *Journal of Econometrics* 240 (1): 105655. <https://doi.org/10.1016/j.jeconom.2024.105655>.

Jarociński, Marek, and Peter Karadi. 2020. "Deconstructing Monetary Policy Surprises--- The Role of Information Shocks." *American Economic Journal: Macroeconomics* 12 (2): 1--43. <https://doi.org/10.1257/mac.20180090>.

Jarociński, Marek, and Frank R. Smets. 2008. "House Prices and the Stance of Monetary Policy." *Review* 90 (4). <https://doi.org/10.20955/r.90.339-366>.

Jiménez, Gabriel, Steven Ongena, José-Luis Peydró, and Jesús Saurina. 2012. "Credit Supply and Monetary Policy: Identifying the Bank Balance-Sheet Channel with Loan Applications." *American Economic Review* 102 (5): 2301--26. <https://doi.org/10.1257/aer.102.5.2301>.

Jorda, Oscar, Moritz Schularick, and Alan M Taylor. 2016. *Macrofinancial History and the New Business Cycle Facts*.

Jordà, Òscar. 2005. "Estimation and Inference of Impulse Responses by Local Projections." *American Economic Review* 95 (1): 161--82. <https://doi.org/10.1257/0002828053828518>.

Jordà, Òscar, Moritz Schularick, and Alan M. Taylor. 2013. "When Credit Bites Back." *Journal of Money, Credit and Banking* 45 (s2): 3--28. <https://doi.org/10.1111/jmcb.12069>.

Jordà, Òscar, Moritz Schularick, and Alan M. Taylor. 2015. "Betting the House." *Journal of International Economics*, 37th Annual NBER International Seminar on Macroeconomics, vol. 96 (July): S2--18. <https://doi.org/10.1016/j.jinteco.2014.12.011>.

Jordà, Òscar, Moritz Schularick, and Alan M. Taylor. 2020. "The Effects of Quasi-Random Monetary Experiments." *Journal of Monetary Economics* 112 (June): 22--40. <https://doi.org/10.1016/j.jmoneco.2019.01.021>.

Jordà, Òscar, and Alan M. Taylor. 2016. "The Time for Austerity: Estimating the Average Treatment Effect of Fiscal Policy." *The Economic Journal* 126 (590): 219--55. <https://doi.org/10.1111/ecoj.12332>.

Jordà, Òscar, Alan M. Taylor, and Columbia University. 2024. "Local Projections." *Federal Reserve Bank of San Francisco, Working Paper Series* 2024 (24): 01--58. <https://doi.org/10.24148/wp2024-24>.

Kalemli-Özcan, Ṣebnem. 2019. "U.S. Monetary Policy and International Risk Spillovers." Working Paper No. 26297. Pre-published September. <https://doi.org/10.3386/w26297>.

Kitchin, Joseph. 1923. "Cycles and Trends in Economic Factors." *The Review of Economics and Statistics* 5 (1): 10--16. <https://doi.org/10.2307/1927031>.

Kiyotaki, Nobuhiro, and John Moore. 1997. "Credit Cycles." *The Journal of Political Economy* (Chicago) 105 (2): 211--48. <https://doi.org/10.1086/262072>.

Kockerols, Thore, and Christoffer Kok. 2019. *Leaning Against the Wind: Macroprudential Policy and the Financial Cycle.* European Central Bank. <https://doi.org/10.2866/744981>.

Kohn, Meir. 1986. "Monetary Analysis, the Equilibrium Method, and Keynes's \"General Theory\"." *Journal of Political Economy* 94 (6): 1191--224. <https://www.jstor.org/stable/1833095>.

Kondratieff, N. D., and W. F. Stolper. 1935. "The Long Waves in Economic Life." *The Review of Economics and Statistics* 17 (6): 105--15. <https://doi.org/10.2307/1928486>.

Kuttner, Kenneth N., and Ilhyock Shim. 2016. "Can Non-Interest Rate Policies Stabilize Housing Markets? Evidence from a Panel of 57 Economies." *Journal of Financial Stability* 26 (October): 31--44. <https://doi.org/10.1016/j.jfs.2016.07.014>.

Kuznets, Simon. 1930. *Secular Movements in Production and Prices; Their Nature and Their Bearing Upon Cyclical Fluctuations*. Houghton Mifflin company.

Laeven, Luc, and Fabian Valencia. 2018. "Systemic Banking Crises Revisited." *IMF Working Papers* 2018 (206). <https://doi.org/10.5089/9781484376379.001.A001>.

Laidler, David E. W. 1999. *Fabricating the Keynesian Revolution: Studies of the Inter-War Literature on Money, the Cycle, and Unemployment*. Historical Perspectives on Modern Economics. Cambridge Univ. Press.

Laidler, David E. W. 2011. "The Monetary Economy and the Economic Crisis." *SSRN Electronic Journal*, ahead of print. <https://doi.org/10.2139/ssrn.1759503>.

Lo, Ming Chien, and Jeremy Piger. 2005. "Is the Response of Output to Monetary Policy Asymmetric? Evidence from a Regime-Switching Coefficients Model." *Journal of Money, Credit and Banking* 37 (5): 865--86. <https://www.jstor.org/stable/3839150>.

Ludwig, Julian F. 2026. "Local Projections Are VAR Predictions of Increasing Order." SSRN Scholarly Paper No. 6441981. Rochester, NY, Pre-published March 19. <https://doi.org/10.2139/ssrn.6441981>.

MacKinnon, James G. 1994. "Approximate Asymptotic Distribution Functions for Unit-Root and Cointegration Tests." *Journal of Business & Economic Statistics* 12 (2): 167--76. <https://doi.org/10.2307/1391481>.

Mian, Atif, Amir Sufi, and Emil Verner. 2017. "Household Debt and Business Cycles Worldwide\*." *The Quarterly Journal of Economics* 132 (4): 1755--817. <https://doi.org/10.1093/qje/qjx017>.

Minsky, Hyman P. 1986. *Stabilizing an Unstable Economy*. Twentieth Century Fund Report. Yale University Press.

Minsky, Hyman P. 1992. "The Financial Instability Hypothesis." SSRN Scholarly Paper No. 161024. Rochester, NY, Pre-published May 1. <https://doi.org/10.2139/ssrn.161024>.

Miranda-Agrippino, Silvia, Tsvetelina Nenova, and Hélène Rey. 2026. *The Ins & Outs of Chinese Monetary Policy Transmission*. National Bureau of Economic Research. <https://www.nber.org/papers/w34626>.

Miranda-Agrippino, Silvia, and Hélène Rey. 2020. "U.S. Monetary Policy and the Global Financial Cycle." *The Review of Economic Studies* 87 (6): 2754--76. <https://doi.org/10.1093/restud/rdaa019>.

Miranda-Agrippino, Silvia, and Hélène Rey. 2022. "The Global Financial Cycle." In *Handbook of International Economics*, vol. 6. Elsevier. <https://doi.org/10.1016/bs.hesint.2022.02.008>.

NBER. 2023. "US Business Cycle Expansions and Contractions." March 14. <https://www.nber.org/research/data/us-business-cycle-expansions-and-contractions>.

Nelson, Charles R., and Heejoon Kang. 1981. "Spurious Periodicity in Inappropriately Detrended Time Series." *Econometrica* 49 (3): 741--51. <https://doi.org/10.2307/1911520>.

Nerlove, Marc. 1964. "Spectral Analysis of Seasonal Adjustment Procedures." *Econometrica* 32 (3): 241--86. <https://doi.org/10.2307/1913037>.

Pancrazi, Roberto. 2015. "The Heterogeneous Great Moderation." *European Economic Review* 74 (February): 207--28. <https://doi.org/10.1016/j.euroecorev.2014.12.005>.

Peersman, Gert, and Frank Smets. 2002. "Are the Effects of Monetary Policy in the Euro Area Greater in Recessions Than in Booms?" In *Monetary Transmission in Diverse Economies*, edited by Lavan Mahadeva and Peter Sinclair. Cambridge University Press. <https://doi.org/10.1017/CBO9780511492488.003>.

Perron, Pierre. 1989. "The Great Crash, the Oil Price Shock, and the Unit Root Hypothesis." *Econometrica* 57 (6): 1361--401. <https://doi.org/10.2307/1913712>.

Plagborg-Møller, Mikkel, and Christian K. Wolf. 2021. "Local Projections and VARs Estimate the Same Impulse Responses." *Econometrica* 89 (2): 955--80. <https://doi.org/10.3982/ECTA17813>.

Ramey, Valerie A. 2016. "Macroeconomic Shocks and Their Propagation." In *Handbook of Macroeconomics*, vol. 2. Elsevier. <https://doi.org/10.1016/bs.hesmac.2016.03.003>.

Rey, Hélène. 2015. *Dilemma Not Trilemma: The Global Financial Cycle and Monetary Policy Independence*. No. w21162. National Bureau of Economic Research. <https://doi.org/10.3386/w21162>.

Romer, Christina D, and David H Romer. 2004. "A New Measure of Monetary Shocks: Derivation and Implications." *American Economic Review* 94 (4): 1055--84. <https://doi.org/10.1257/0002828042002651>.

Sargent, Thomas J. 1987. *Macroeconomic Theory*. 2nd ed. Economic Theory, Econometrics, and Mathematical Economics. Academic Press.

Schularick, Moritz, Lucas ter Steege, and Felix Ward. 2021. "Leaning Against the Wind and Crisis Risk." *American Economic Review: Insights* 3 (2): 199--214. <https://doi.org/10.1257/aeri.20200310>.

Schumpeter, Joseph A. 1961. *History of Economic Analysis*. 4th Edition. 1954. Oxford University Press.

Souza, Cinthia de. 2025. "The Eurozone's Contradiction: How the Power of Finance Subordinates the Periphery and Threatens Monetary Integration." *New Political Economy* 0 (0): 1--23. <https://doi.org/10.1080/13563467.2025.2594705>.

Strohsal, Till, Christian R. Proaño, and Jürgen Wolters. 2019. "Characterizing the Financial Cycle: Evidence from a Frequency Domain Analysis." *Journal of Banking & Finance* 106 (September): 568--91. <https://doi.org/10.1016/j.jbankfin.2019.06.010>.

Svensson, Lars. 2017. "Cost-Benefit Analysis of Leaning Against the Wind." *Journal of Monetary Economics* 90 (October): 193--213. <https://doi.org/10.1016/j.jmoneco.2017.07.004>.

Swanson, Eric T. 2021. "Measuring the Effects of Federal Reserve Forward Guidance and Asset Purchases on Financial Markets." *Journal of Monetary Economics* 118 (March): 32--53. <https://doi.org/10.1016/j.jmoneco.2020.09.003>.

Tenreyro, Silvana, and Gregory Thwaites. 2016. "Pushing on a String: US Monetary Policy Is Less Powerful in Recessions." *American Economic Journal: Macroeconomics* 8 (4): 43--74. <https://doi.org/10.1257/mac.20150016>.

Tooze, J. Adam. 2019. *Crashed: How a Decade of Financial Crises Changed the World*. Penguin Books.

Verona, Fabio. 2016. "Time--Frequency Characterization of the U.S. Financial Cycle." *Economics Letters* 144 (July): 75--79. <https://doi.org/10.1016/j.econlet.2016.04.024>.

Wicksell, Knut. (1898) 1935. *Interest and Prices: A Study of the Causes Regulating the Value of Money*. MacMillan.

Williams, John C. 2016. "Measuring the Effects of Monetary Policy on House Prices and the Economy." *BIS Papers Chapters* 88: 7--16. <https://ideas.repec.org//h/bis/bisbpc/88-03.html>.

Winter, Jasper de, Siem Jan Koopman, Irma Hindrayanto, and Anjali Chouhan. 2017. "Modeling the Business and Financial Cycle in a Multivariate Structural Time Series Model." SSRN Scholarly Paper No. 3057349. Rochester, NY, Pre-published October 16. <https://doi.org/10.2139/ssrn.3057349>.

[^1]: Despite the name, the GFCy is not a cycle in the strict sense of recurrent upswings and downswings, but a common global factor capturing co-movement in international financial conditions --- which is why we use it here as a placebo/extension rather than as the main object of interest.

[^2]: This name is used to distinguish it from the global financial cycle (GFCy).

[^3]: More details in section [2.2.5](#sec:cycle_extraction).

[^4]: The ADF regression is specified with an intercept and no deterministic time trend (the "drift" form), with lag length selected by AIC and asymptotic critical values from MacKinnon (1994). The drift specification is the natural choice for the indicators we test: year-on-year growth rates of property prices and real credit are not expected to display a deterministic linear trend, and credit-to-GDP --- although clearly trending in levels over our samples --- is not appropriately modelled as deterministically trend-stationary either.

[^5]: Before the Fourier transform is taken, the series is also zero-padded from length $n$ to $N=1024$. Zero-padding does not add information: it leaves the underlying transform $\sum_{t=1}^n x_t e^{-i\omega t}$ unchanged and simply evaluates it on the finer grid $\omega_j=2\pi j/N$ rather than $2\pi j/n$, improving the visual resolution of the estimated spectrum at long periodicities (Beaudry et al. 2020).

[^6]: In symmetric form, the unnormalised Hamming weights are $\tilde w(k) = 0.54 + 0.46\cos(\pi k/M)$ for $|k|\le M$, and the weights used in the smoothing are $w(k) = \tilde w(k)/\sum_{|\ell|\le M}\tilde w(\ell)$, so that $\sum_{|k|\le M} w(k) = 1$. The raised-cosine shape of the Hamming window provides good sidelobe suppression and limits spectral leakage from strong low-frequency components into adjacent cyclical bands. The bandwidth $M$ controls a standard bias--variance trade-off: smaller $M$ preserves sharper peaks and more frequency resolution at the cost of more variance, while larger $M$ delivers a smoother but blurrier estimate. We set $M=6$ (i.e. $\mathit{nkr}=2M+1=13$ kernel points) throughout the chapter, following Beaudry et al. (2020).

[^7]: Year-on-year (YoY) growth is used here for consistency with Drehmann et al. (2012) and to bypass seasonal adjustment; switching to quarter-on-quarter (QoQ) growth does not alter our conclusions.

[^8]: See Appendix [5.2](#app:peak_test_method) for the formal definition in terms of band-averaged normalised periodograms.

[^9]: The same appendix identifies two finite-sample failure modes more relevant to credit-to-GDP: mean shifts and long-memory persistence can both place enough mass in the DFC band to inflate the rejection rate. We therefore read the credit/GDP peak test rejection as suggestive rather than definitive.

[^10]: We use a wider passband for extraction than for detection. The peak test asks the sharp binary question of whether a spectral maximum sits inside the conventional DFC band, and a narrow target band sharpens the test against a smooth AR(1) shape. Extraction has the different objective of recovering the time-domain realisation of the cyclical component for use in the regime classification of Section [3.2.3](#sec:mp_identification): because any finite-length filter rolls off gradually around the edges of its passband, a too-narrow extraction band discards spectral mass close to but outside 48--96 quarters that the filter cannot cleanly separate. We therefore follow Drehmann et al. (2012) in using the broader 32--120 quarter band for extraction. The resulting regime indicator is robust to the narrower 48--96 quarter band.

[^11]: Rebasing rather than standardising to unit variance preserves the relative amplitudes of the components, so a large swing in property prices is not mechanically rescaled to match the much smaller swings in credit-to-GDP, while giving the three series a common reference date for visual comparison.

[^12]: The "saving" vs "financing" distinction is frequently emphasised by Claudio Borio, former Head of the Monetary and Economic Department of the BIS (see e.g. Borio and Disyatat (2011; Borio 2014a, 2014b, 2017)). Saving is an *ex post* national-accounts residual --- income not consumed --- while financing is an *ex ante* cash-flow concept: access to purchasing power via money or credit. Expenditure is constrained by financing rather than by saving; in a monetary economy, banks actively create purchasing power through credit rather than channelling pre-existing savings, and the conflation of the two has led to repeated misunderstandings of financial cycles and global imbalances. In pure real analysis frameworks, which treat money as a veil, the distinction collapses. The deeper root is the long-standing debate between "real analysis" and "monetary analysis", traceable at least to Wicksell (\[1898\] 1935) and most actively pursued in the inter-war period before being largely sidelined by the post-war mainstream --- a question of intellectual history beyond the scope of this thesis (see Schumpeter (1961; Laidler 1999, 2011; Kohn 1986)).

[^13]: Meanwhile, we caution that the difference in the upswing/downswing IRFs should be read as differences in point estimates rather than as formal tests of regime equality.

[^14]: We use "BIS" as shorthand for the institution and its associated researchers; debates within this group are beyond the scope of this thesis.

[^15]: Their cycles are constructed using HP or band-pass filters targeting 2--16 years, which do not match the medium-term DFC band of the BIS literature; the comparison should therefore be made with that caveat in mind.

[^16]: The raw tail measure from the two-ratio peak statistic is best understood as an extremeness score rather than an exact finite-sample $p$-value. Because the statistic combines evidence against two neighbouring trough regions, a fixed raw cutoff need not deliver the intended rejection probability under the null. The size adjustment therefore calibrates the cutoff against simulated draws from the chi-square benchmark distribution used by the peak test after AR(1) normalization and for the same band counts, so that a nominal 5 percent rule rejects about 5 percent of benchmark no-cycle draws under that reference distribution. After this calibration, differences in rejection rates across DGPs are easier to interpret as false positive risk or power, rather than as artefacts of the finite-sample scaling of the raw statistic.

[^17]: Here, for real credit growth, we report the QoQ growth rather than the YoY growth due to data availability; the QoQ and YoY growths deliver the same qualitative conclusions for economies where both measures are available.
