 mapboxgl.accessToken =
      'pk.eyJ1IjoiZ2VvMjM5NiIsImEiOiJjazdkMTdlbTgwcWw5M2xtczVtMjMwanZnIn0.uQkYdlcY9PRmbuT_ocGcuQ';
 var monument = [10.149364, 56.1175095];
 var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/geo2396/ckf74ig33439n19qlk83udscf',
      center: monument,
      zoom: 14.0
 });
 map.on('click', function (e) {
      var features = map.queryRenderedFeatures(e.point, {
           layers: ['try-3'] // replace this with the name of the layer
      });

      if (!features.length) {
           return;
      }

      var feature = features[0];

      var popup = new mapboxgl.Popup({
                offset: [0, -15]
           })
           .setLngLat(feature.geometry.coordinates)
           .setHTML('<h3>' + feature.properties.title + '</h3><p>' + feature.properties.description +
                '</p>')
           .addTo(map);
 });

 