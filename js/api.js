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


 //source of live forecast api
 var settings = {
      "url": "https://besttime.app/api/v1/forecasts/live?api_key_private=pri_0bc6ad2618fe4bb0b9092c84f41b3010&venue_name=ARoS Aarhus Art Museum&venue_address=Aros Allé 2 8000 Aarhus Denmark ",

      "data": {
           'api_key_private': 'pri_0bc6ad2618fe4bb0b9092c84f41b3010',
           'venue_name': 'ARoS Aarhus Art Museum',
           'venue_address': 'Aros Allé 2 8000 Aarhus Denmark'
      },
      "method": "POST"
 };

 $.ajax(settings).done(function (response) {
      console.log(response);


      let live_forecast = response.analysis.venue_live_busyness;
      let detailsBG = document.getElementById("on-map-details");
      let iconBG = document.getElementById("icon-bg");
      let locationIcon = document.getElementById("location-icon");

      console.log(live_forecast);

      //change of colors in container displaying details of place

      if (live_forecast >= 0 && live_forecast < 20) {
           detailsBG.style.background = "#27d07d";
           iconBG.style.background = "#27d07d";
      } else
      if (live_forecast >= 20 && live_forecast < 40) {
           detailsBG.style.background = "#95db76";
           iconBG.style.background = "#95db76";
      } else
      if (live_forecast >= 40 && live_forecast < 60) {
           detailsBG.style.background = "#fbe570";
           iconBG.style.background = "#fbe570";
      } else
      if (live_forecast >= 60 && live_forecast < 80) {
           detailsBG.style.background = "#fd9964";
           iconBG.style.background = "#fd9964";
      } else
      if (live_forecast >= 80 && live_forecast <= 100) {
           detailsBG.style.background = "#ff5959";
           iconBG.style.background = "#ff5959";
      } else {
           detailsBG.style.background = "#555555";
           iconBG.style.background = "#555555";

      };

      //change of position of location icon in gradient bar

      locationIcon.style.marginLeft = "calc(" +
           live_forecast + "vw / 2)";
 });