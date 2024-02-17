var mapa = L.map('mapa').setView([-0.192603, -78.507486],7);
L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.{ext}', {
	minZoom: 0,
	maxZoom: 20,
	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'png'}).addTo(mapa);

$.getJSON("https://sajive29.github.io/EJERCICIO-1/TESIS_2012.geojson",function(data){
  var clusteredPoints = L.markerClusterGroup();
var marker = L.geoJson(data,{
  onEachFeature: function (feature, layer){
layer.bindPopup('<b>Titulo: </b>' + feature.properties.TITULO_TESIS_O_INVESTIGACION + '<br>\<b>Autor(es): </b>' + feature.properties.field_14 + '<br>\<b>Tutor(es): </b>' + feature.properties.field_19)
  }
    }, 
     );
  clusteredPoints.addLayer(marker);
  mapa.addLayer(clusteredPoints)
});