var journeys = {};


function getJourneys() {


    fetch('https://play.bristolfilmacademy.com/journey')
        .then((response) => response.json())
        .then((responseJson) => {
            journeys = responseJson;
            //journeys.forEach(mapJourneys);

            console.log(journeys);

            for (i=0;i<journeys.length;i++) {

              // create a closure to preserve the value of "i"
              (function(i){
                window.setTimeout(function(){
                    console.log(i);
                  mapJourneys(journeys[i]);
                }, i * 500);

              }(i));

            }
        })
        .catch(function(error) {
          console.log('There has been a problem with your fetch operation: ' + error.message);
           // ADD THIS THROW error
          throw error;
        });
}

function mapJourneys(journey) {



    var redLine = viewer.entities.add({
        name : 'Red line on the surface',
        polyline : {
            positions : Cesium.Cartesian3.fromDegreesArray([journey.start_lat, journey.start_long,
                                                            journey.end_lat, journey.end_long]),
            width : 1,
            material : Cesium.Color.TURQUOISE
        }
    });
}


getJourneys();
