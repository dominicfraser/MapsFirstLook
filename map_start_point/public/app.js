var initialize = function(){
  var center = {lat: 50.71, lng: -74.00};
  var container = document.getElementById("main-map");

  var mainMap = new MapWrapper(center, 5, container);
  mainMap.addMarker(center)
  mainMap.addMarker({lat: 45.501689, lng: -73.567256})

  var contentS = "<p>This is a place</p>"
  var infoWindow = new google.maps.InfoWindow({
    content: contentS
  })

  mainMap.markers[1].addListener('click', function(){
    infoWindow.open(mainMap, mainMap.markers[1])
  })

  mainMap.addClickEvent();

// BUTTONS
  var gtButton = document.getElementById("gt-button")
  gtButton.addEventListener('click', function(){
    mainMap.setCenter({lat: 5.415792, lng:100.322514})
  })

  var qButton = document.getElementById("q-button")
  qButton.addEventListener('click', function(){
    mainMap.moveToCurrentPosition();
  })
}


window.addEventListener('load', initialize);

