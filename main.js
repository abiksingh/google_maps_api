function initMap(){

  let MapOptions = {
      zoom: 9,
      center:{lat:28.7041, lng:77.1025}
  }

  let map = new google.maps.Map(document.getElementById('map'), MapOptions);

  // Listen for Lat and Lng anywhere in the map
  google.maps.event.addListener(map, 'click', 
  function(event){
    addMarker({coords:event.latLng});
  
  });



//   //Settng Marker

//   let mark = new google.maps.Marker({
//       position:{lat: 28.4595, lng:77.0266},
//       map:map,
//       icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
//   })

   

//   let infoWindow = new google.maps.InfoWindow({
//       Content:'<h1>Gurgaon</h1>'
//   })

//   mark.addListener('click', Devent)
//   function Devent(){
//    infoWindow.open(map, mark);   
//   }


const Markers = [
    {
        coords:{lat: 28.4595, lng:77.0266},
        iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        content:'<h1>Gurgaon</h1>'
    },
    {
        coords:{lat: 28.6692, lng:77.4538},
        content:'<h1>Ghaziabad</h1>'
    },

    {
        coords:{lat: 28.5355, lng:77.3910},
        content:'<h1>Noida</h1>'
    }

];

Markers.forEach(mar => addMarker(mar));


// addMarker({
//     coords:{lat: 28.4595, lng:77.0266},
//     iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
//     content:'<h1>Gurgaon</h1>'
// })
// addMarker({
//     coords:{lat: 28.6692, lng:77.4538},
//     content:'<h1>Ghaziabad</h1>'
// })
// addMarker({
//     coords:{lat: 28.5355, lng:77.3910},
//     content:'<h1>Noida</h1>'
// })


    function addMarker(props){
    let mark = new google.maps.Marker({
              position:props.coords,
               map:map,
              // icon:props.iconImage
           });

           if(props.iconImage){
               mark.setIcon(props.iconImage);

           }

           if(props.content){
            let infoWindow = new google.maps.InfoWindow({
                      Content:props.content
                   })
                
                   mark.addListener('click', Devent)
                   function Devent(){
                    infoWindow.open(map, mark);   
                   }
           }
    }

}