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
 //       "url": "https://besttime.app/api/v1/venues",
 //       "data": {
 //            'api_key_private': 'pri_0bc6ad2618fe4bb0b9092c84f41b3010'
 //       },
 //       "method": "GET"
 //  };

 //  $.ajax(settings).done(function (response) {
 //       console.log(response);
 //  });

 var settings = {
      "url": "https://besttime.app/api/v1/forecasts?api_key_private=pri_0bc6ad2618fe4bb0b9092c84f41b3010&venue_name=ARoS Aarhus Art Museum&venue_address=Aros Allé 2 8000 Aarhus Denmark ",
      "data": {
           'api_key_private': 'pri_0bc6ad2618fe4bb0b9092c84f41b3010',
           'venue_name': 'ARoS Aarhus Art Museum',
           'venue_address': 'Aros Allé 2 8000 Aarhus Denmark'
      },
      "method": "POST"
 };
 //getting data from above venue
 $.ajax(settings).done(function (response) {
      console.log(response);
      let data = response;
      let week = data.analysis;
      let busyness = [];
      //  for (let i = 0; i <= 6; i++) {
      //       for (let j = 2; j <= 14; j = j + 2) {
      //            //getting crowdedness of this place from 8 to 20 every 2 hours j = 2 is truly 8am and j = 14 is 8pm
      //            busyness.push(week[i].hour_analysis[j].intensity_nr);
      //            //  week[i].hour_analysis[j].intensity_nr;
      //            console.log(busyness)
      //            const charts = document.querySelectorAll("#home .graph-wrapper .graph-column");
      //            for (let k = 0; k <= 6; k++) {
      //                 charts[k].style.height = busyness[k] + "px"
      //                 //trying to set a height of each chart using busyness
      //            }
      //       }
      //  }
      var today = new Date();
      var Day = today.getDay();
      for (let i = 2; i <= 14; i + 2)[
           week[Day].hour_analysis[i].intensity_nr
      ]
 });