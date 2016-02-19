function initMap() {
  //Make map//
  var customMapTypeId = 'custom_style';

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: {lat: 47.6005363, lng: -122.3318866},
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL,
      position: google.maps.ControlPosition.TOP_LEFT
    },
    mapTypeControl: false,
    streetViewControl:false
  });

  //Style map//
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



  var allMarkers = [];
  // another Way
  /*
  galleries.forEach(function(gallery) {
    var contentString = '<h3>' + galleries.name + '</h3>' + '<p>' + galleries.desc + '</p>' + '<p>' + galleries.url + '</p>';

  })
  */

  for (var i = 0; i < galleries.length; i++) {
    (function() {
    // create an infowindow
    var contentString = '<h3>' + galleries[i].name + '</h3>' + '<p>' + galleries[i].desc + '</p>' + '<p>' + galleries[i].url + '</p>';
    console.log(contentString);
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

     // create a marker
    var marker = new google.maps.Marker({
      position: {lat: galleries[i].lat,	lng: galleries[i].lng},
      map: map,
      title: galleries[i].name
     });
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    })
  })()
  }

  function attachListener(infowindow, marker) {


  }

  // //Create marker with info window//
  // var contentString = '<h3>' + galleries[0].name + '</h3>' + '<p>' + galleries[0].desc + '</p>' + '<p>' + galleries[0].url + '</p>';
  //
  // var infowindow = new google.maps.InfoWindow({
  //   content: contentString
  // });
  //
  // var marker = new google.maps.Marker({
  //     position: {lat: galleries[0].lat,	lng: galleries[0].lng},
  //     map: map,
  //     // title: galleries[0].name
  // });
  // marker.addListener('click', function() {
  //   infowindow.open(map, marker);
  // });
  //
}
