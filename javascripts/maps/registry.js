// Resolve a possibly relative URL against a base (page or another file)
function resolveUrl(url, base) {
    try { return new URL(url, base).toString(); }
    catch { return url; }
}

// Test if a vector source has a valid extent
function hasExtent(source) {
    const e = source.getExtent();
    return e && isFinite(e[0]) && isFinite(e[1]) && isFinite(e[2]) && isFinite(e[3]);
}

// === Map definitions registry ===
const MAPS = {
    bosnia: function (el) {
        const raster = new ol.layer.Tile({ source: new ol.source.OSM() });

        const view = new ol.View({
            center: ol.proj.fromLonLat([17.9, 43.6]),
            zoom: 7
        });

        const source = new ol.source.Vector();
        const vectorLayer = new ol.layer.Vector({
            source,
            declutter: true,
            style: function (feature) {
                return new ol.style.Style({
                    image: new ol.style.Circle({
                        radius: 6,
                        fill: new ol.style.Fill({ color: 'red' }),
                        stroke: new ol.style.Stroke({ color: 'white', width: 2 })
                    }),
                    text: new ol.style.Text({
                        text: feature.get('name') || '',
                        font: 'bold 12px sans-serif',
                        offsetY: -14,
                        fill: new ol.style.Fill({ color: '#111' }),
                        stroke: new ol.style.Stroke({ color: '#fff', width: 3 }),
                        overflow: true
                    })
                });
            }
        });

        const map = new ol.Map({
            target: el,
            layers: [raster, vectorLayer],
            view
        });

        function fitIfReady() {
            if (!hasExtent(source)) return;
            view.fit(source.getExtent(), {
                padding: [20, 20, 20, 20],
                duration: 250,
                maxZoom: 10
            });
        }

        // Load config + data if provided on the element
        const cfgAttr = el.dataset.config;
        if (cfgAttr) {
            const cfgUrl = resolveUrl(cfgAttr, document.baseURI);

            fetch(cfgUrl)
                .then(r => {
                    if (!r.ok) throw new Error(`Config HTTP ${r.status}`);
                    return r.json();
                })
                .then(cfg => {
                    const citiesUrlRaw = cfg?.cities?.geojson;
                    if (!citiesUrlRaw) return;

                    // IMPORTANT: resolve GeoJSON path relative to the CONFIG file location
                    const citiesUrl = resolveUrl(citiesUrlRaw, cfgUrl);

                    const fmt = new ol.format.GeoJSON();
                    return fetch(citiesUrl)
                        .then(r => {
                            if (!r.ok) throw new Error(`GeoJSON HTTP ${r.status}`);
                            return r.json();
                        })
                        .then(geo => {
                            const feats = fmt.readFeatures(geo, {
                                dataProjection: 'EPSG:4326',
                                featureProjection: view.getProjection()
                            });
                            source.addFeatures(feats);
                            fitIfReady();
                        });
                })
                .catch(err => {
                    console.warn('Bosnia map: failed to load config/data:', err)
                });
        }

        return map;
    }
};

// === Expose builder ===
window.buildMap = function buildMap(el) {
    const name = el.dataset.map;
    const fn = MAPS[name];
    if (!fn) return null;
    return fn(el);
};
