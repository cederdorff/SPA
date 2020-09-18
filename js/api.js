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

 //BestTimes API code
 //  var settings = {
 //       "url": "https://besttime.app/api/v1/keys/pri_0bc6ad2618fe4bb0b9092c84f41b3010",
 //       "method": "GET"
 //  };

 //  $.ajax(settings).done(function (response) {
 //       console.log(response);
 //  });


 var settings = {
      "url": "https://besttime.app/api/v1/venues",
      "data": {
           'api_key_private': 'pri_0bc6ad2618fe4bb0b9092c84f41b3010'
      },
      "method": "GET"
 };

 $.ajax(settings).done(function (response) {
      console.log(response);
 });

 var settings = {
      "url": "https://besttime.app/api/v1/forecasts?api_key_private=pri_0bc6ad2618fe4bb0b9092c84f41b3010&venue_name=ARoS Aarhus Art Museum&venue_address=Aros Allé 2 8000 Aarhus Denmark ",
      "data": {
           'api_key_private': 'pri_0bc6ad2618fe4bb0b9092c84f41b3010',
           'venue_name': 'ARoS Aarhus Art Museum',
           'venue_address': 'Aros Allé 2 8000 Aarhus Denmark'
      },
      "method": "POST"
 };

 $.ajax(settings).done(function (response) {
      console.log(response);
      let data = response;
      let week = data.analysis;
      for (let i = 0; i <= 6; i++) {

           for (let j = 2; j <= 14; j = j + 2) {
                let busyness = week[i].hour_analysis[j].intensity_nr;
                busyness += 3;
                console.log(busyness)
                const charts = document.querySelectorAll("#home .graph-wrapper .graph-column")
                for (let k = 0; k <= 6; k++) {
                     charts[k].style.height = busyness[k] + "px"
                }
           }
      }
 });