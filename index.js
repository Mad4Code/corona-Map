console.log("atleast index file is being connected");
function updateMap() {
    // map.on('load', ()=>{
    console.log("loading map with realtime data")
    fetch("data.json")
        .then(response => response.json())
        .then(rsp => {
            // console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;
                const description = "Infected - " + element.infected + "\n" + "Sick - " + element.sick + "\n" + "Dead - " + element.dead + "\n";
                cases = element.infected;
                if (cases>255){
                    color = "rgb(255, 0, 0)";
                }

                else{
                    color = `rgb(${cases}, 0, 0)`;
                }
                // adding popup
                popup = new mapboxgl.Popup({ offset: 25}).setHTML(description);
                // Mark on the map
                new mapboxgl.Marker({
                    'draggable': false,
                    'color': color,
                    'marker-size': 'small'
                }).setLngLat([longitude, latitude])
                .setPopup(popup)
                .addTo(map); 
            
            });
        });
    // });
}

let interval = 20000;
setInterval( updateMap, interval); 