mapboxgl.accessToken =
     'pk.eyJ1IjoiZ2VvMjM5NiIsImEiOiJjazdkMTdlbTgwcWw5M2xtczVtMjMwanZnIn0.uQkYdlcY9PRmbuT_ocGcuQ';
var map = new mapboxgl.Map({
     container: 'map',
     style: 'mapbox://styles/geo2396/ckf74ig33439n19qlk83udscf',
     center: [10.150088, 56.117216],
     zoom: 14.0
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



     let itsUndefined = response.analysis;
     let detailsBG = document.getElementById("on-map-details");
     let iconBG = document.getElementById("icon-bg");
     let locationIcon = document.getElementById("location-icon");


     if (itsUndefined == undefined) {
          detailsBG.style.background = "#555555";
          iconBG.style.background = "#555555";
          locationIcon.style.opacity = '0';
          console.log('i work here');
     } else {
          let live_forecast = response.analysis.venue_live_busyness;
          console.log(live_forecast);



          //change of colors in container displaying details of place

          if (live_forecast > 0 && live_forecast < 20) {
               detailsBG.style.background = "#27d07d";
               iconBG.style.background = "#27d07d";
          }
          if (live_forecast >= 20 && live_forecast < 40) {
               detailsBG.style.background = "#95db76";
               iconBG.style.background = "#95db76";
          }
          if (live_forecast >= 40 && live_forecast < 60) {
               detailsBG.style.background = "#fbe570";
               iconBG.style.background = "#fbe570";
          }
          if (live_forecast >= 60 && live_forecast < 80) {
               detailsBG.style.background = "#fd9964";
               iconBG.style.background = "#fd9964";
          }
          if (live_forecast >= 80 && live_forecast <= 100) {
               detailsBG.style.background = "#ff5959";
               iconBG.style.background = "#ff5959";
          } else {
               detailsBG.style.background = "#555555";
               iconBG.style.background = "#555555";
               locationIcon.style.opacity = '0';


          };
          //change of position of location icon in gradient bar
          locationIcon.style.marginLeft = "calc(" + live_forecast + "vw / 2)";



     }
})
//Peter's code

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

     //  for (let i = 0; i <= 6; i++) {
     //       for (let j = 2; j <= 14; j = j + 2) {
     //            //getting crowdedness of this place from 8 to 20 every 2 hours j = 2 is truly 8am and j = 14 is 8pm
     //            busyness.push(week[i].hour_analysis[j].intensity_nr);
     //            //  week[i].hour_analysis[j].intensity_nr;
     //            console.log(busyness)
     //          
     //            for (let k = 0; k <= 6; k++) {
     //                 charts[k].style.height = busyness[k] + "px"
     //                 //trying to set a height of each chart using busyness
     //            }
     //       }
     //  }
     var date = new Date();
     var Day = date.getDay();
     if (Day == 0) {
          Day = 6;
     } else {
          Day = Day - 1;
     }
     console.log(Day);
     var busyness = [];
     busyness.push(week[Day].hour_analysis[2].intensity_nr + 3);
     busyness.push(week[Day].hour_analysis[4].intensity_nr + 3);
     busyness.push(week[Day].hour_analysis[6].intensity_nr + 3);
     busyness.push(week[Day].hour_analysis[8].intensity_nr + 3);
     busyness.push(week[Day].hour_analysis[10].intensity_nr + 3);
     busyness.push(week[Day].hour_analysis[12].intensity_nr + 3);
     busyness.push(week[Day].hour_analysis[14].intensity_nr + 3);

     console.log(busyness);
     const charts = document.querySelectorAll("#home .graph-wrapper .graph-column");
     for (let j = 0; j <= 6; j++) {
          if (busyness[j] === "9993" || busyness[j] === "N/A3") {
               busyness[j] = 0;
               charts[j].style.height = busyness[j];
          } else {
               charts[j].style.height = busyness[j] * 20 + "px";
               if (busyness[j] == 5) {
                    charts[j].style.backgroundColor = '#ff5959';
               }
               if (busyness[j] == 4) {
                    charts[j].style.backgroundColor = '#fd9964';
               }
               if (busyness[j] == 3) {
                    charts[j].style.backgroundColor = ' #fbe570';

               }
               if (busyness[j] < 3) {
                    charts[j].style.backgroundColor = '#27d07d';
               }
          }
     }

});


let _places = [];

async function fetchVenues() {
     let url = `JSON/placelist.json`;
     let response = await fetch(url); // fetch and wait the response
     let data = await response.json(); // read response body and wait for parsing the JSON
     _places = data.places;
     appendPlaces(_places);
     appendMarkers();
}
fetchVenues();

function appendMarkers() {
     for (const place of _places) {
          new mapboxgl.Marker()
               .setLngLat(place.coords)
               .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
                    .setHTML('<h3>' + place.venue_name + '</h3><p>' + place.venue_address + '</p>'))
               .addTo(map);
     }
}


function appendPlaces(places) {
     let htmlTemplate = "";
     for (let place of places) {
          let name = place.venue_name;
          let adress = place.venue_address;

          htmlTemplate += /*html*/
               `
         <li onclick="showPlace('${place.venue_name}')"> 
          <h3>${name}</h3>
           <p> ${adress}</p>
         </li>
       `;
     }
     document.querySelector(".venue_container").innerHTML = htmlTemplate;
}

function showPlace(name) {
     console.log(name);
     let placeToShow = getPlace(name);
     console.log(placeToShow);
     // do what you want to do with "placeToShow" 😊
     hideSearch();
     map.flyTo({ center: placeToShow.coords });
}

function getPlace(name) {
     return _places.find(place => place.venue_name === name);
}

//  function goToPins(places, pinList, map, searchContainer) {
//       for (let i = 0; i < 23; i++) {
//            places[i].addEventListener("click", () => {
//                 map.flyTo({
//                      center: [10.20594, 56.1065844],
//                      speed: 0.2
//                 });
//                 searchContainer.style.display = 'none';
//            })
//       }
//  }

function search(value) {
     console.log(value);
     let filteredPlaces = [];
     for (let place of _places) {
          let name = place.venue_name.toLowerCase();
          if (name.includes(value.toLowerCase())) {
               filteredPlaces.push(place);
          }
     }

     console.log(filteredPlaces);
     appendPlaces(filteredPlaces);
}




const searchContainer = document.querySelector('.search_container');
const searchBar = document.querySelector('#home>input');
const xIcon = document.querySelector('.search_container > i');

searchBar.addEventListener('click', () => {
     searchContainer.style.display = 'block';
})
xIcon.addEventListener('click', () => {
     searchContainer.style.display = 'none';
})
document.querySelector(".mapboxgl-ctrl-logo").style.display = 'none';

function hideSearch() {
     searchContainer.style.display = 'none';
}


var pinList = document.querySelectorAll('.mapboxgl-marker');