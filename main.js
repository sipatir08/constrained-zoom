import ImageTile from 'https://cdn.skypack.dev/ol/source/ImageTile.js';
import Map from 'https://cdn.skypack.dev/ol/Map.js';
import TileLayer from 'https://cdn.skypack.dev/ol/layer/Tile.js';
import View from 'https://cdn.skypack.dev/ol/View.js';

const key = 'yG9QFNAMUeIRGplc9abD';
const attributions =
  '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ' +
  '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new ImageTile({
        attributions: attributions,
        url:
          'https://api.maptiler.com/maps/satellite/{z}/{x}/{y}.jpg?key=' + key,
        tileSize: 512,
      }),
    }),
  ],
  view: new View({
    center: [-13553864, 5918250], // Koordinat pusat peta
    zoom: 11,                    // Zoom awal
    minZoom: 9,                  // Zoom minimum
    maxZoom: 13,                 // Zoom maksimum
  }),
});
