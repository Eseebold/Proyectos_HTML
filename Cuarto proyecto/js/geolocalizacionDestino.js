
var destino = { // Iturribide Kalea
  lat: 43.257944,
  lng: -2.918926
}

   var origen ={ // Moyua Plaza
  lat: 43.263025,
  lng: -2.934989
}

 

  if (navigator.geolocation) { // Si Geolocalizacion funciona carga la nueva coordenada
    navigator.geolocation.getCurrentPosition(function(position) {
       origen = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }


function initMap() {
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var directionsService = new google.maps.DirectionsService;
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {
      lat: 43.257975,
      lng: -2.918951
    }
  });

  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById('right-panel'));

  calculateAndDisplayRoute(origen,destino,directionsService, directionsDisplay);
}

function calculateAndDisplayRoute(origen,destino,directionsService, directionsDisplay) {
  var start = origen;
  var end = destino;
  directionsService.route({
    origin: start,
    destination: end,
    travelMode: google.maps.TravelMode.TRANSIT
  }, function (response, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}