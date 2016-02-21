//Search Box function with autocomplete
function initAutocomplete(map) {

  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  // [START region_getplaces]
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
  // [END region_getplaces]
}

function initMap() {
  //Make map
  var customMapTypeId = 'custom_style';

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: {lat: 47.5977499, lng: -122.3299049},
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL,
      position: google.maps.ControlPosition.TOP_LEFT
    },
    mapTypeControl: false,
    streetViewControl:false
  });

  //Ask for location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      map.setCenter(pos);

      var marker = new google.maps.Marker({
        position: pos,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 8,
          strokeColor:"#FFFFFF",
          strokeOpacity:0.8,
          strokeWeight:0.75,
          fillColor: "#7773B6",
          fillOpacity: 1,
        },
        map: map,
        title: "You are here."
       });
    });
  }

  //Keep map centered upon resize
  var center;
  function calculateCenter() {
    center = map.getCenter();
  }
  google.maps.event.addDomListener(map, 'idle', function() {
    calculateCenter();
  });
  google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(center);
  });
  //Style map
  var customMapType = new google.maps.StyledMapType([
      {
        stylers: [
          {saturation: -90},
          {visibility: 'simplified'},
          {gamma: 2.0},
          {weight: 1.0}
        ]
      },
      {
        elementType: 'labels',
        stylers: [{visibility: 'on'}]
      },
      {
        featureType: 'water',
        stylers: [{color: '#C6D4E9'}]
      }
    ], {
      name: 'Custom Style'
  });

  map.mapTypes.set(customMapTypeId, customMapType);
  map.setMapTypeId(customMapTypeId);


  var infowindow = new google.maps.InfoWindow({
    content: ""
  });

  for (var i = 0; i < galleries.length; i++) {
    (function() {
    // create an infowindow
    var contentString = '<h3>' + galleries[i].name + '</h3>' + '<p>' + galleries[i].desc + '</p>' + '<p>' + galleries[i].url + '</p>';
    // var infowindow = new google.maps.InfoWindow({
    //   content: contentString
    // });

     // create a marker
    var marker = new google.maps.Marker({
      position: {lat: galleries[i].lat,	lng: galleries[i].lng},
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 8,
        strokeColor:"#FFFFFF",
        strokeOpacity:0.8,
        strokeWeight:0.75,
        fillColor: "#E37B01",
        fillOpacity: 1,
      },
      map: map,
      title: galleries[i].name
     });
    marker.addListener('click', function() {
      infowindow.setContent(contentString);
      infowindow.open(map, marker);
    })
  })()
  }

  initAutocomplete(map);
}
