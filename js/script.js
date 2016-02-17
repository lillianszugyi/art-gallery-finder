//Style map
function initMap() {
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

  //Make map
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

  map.mapTypes.set(customMapTypeId, customMapType);
  map.setMapTypeId(customMapTypeId);

  //Make ONE marker
  var contentString = galleries[2].name + galleries[2].desc + galleries[2].url;

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  var marker = new google.maps.Marker({
      position: {lat: galleries[2].lat,	lng: galleries[2].lng},
      map: map,
      title: galleries[2].name
    });
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });


}
