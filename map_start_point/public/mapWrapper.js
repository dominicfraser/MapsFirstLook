var MapWrapper = function(position, zoom, container){

  this.googleMap = new google.maps.Map(container, {
      zoom: zoom,
      center: position
  });
  this.markers = [];
}

MapWrapper.prototype = {
  addMarker: function(position){
    var marker = new google.maps.Marker({
      position: position,
      map: this.googleMap
    })
      this.markers.push(marker);

  },
  addClickEvent: function(){
    google.maps.event.addListener(this.googleMap, 'click', function(event){
      var position = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      }

      this.addMarker(position);

    }.bind(this))
  },
  setCenter: function(position){
    this.googleMap.setCenter(position);
  },
  moveToCurrentPosition: function(){
    console.log("in function")

    function success(position){
      console.log("got position")
      this.googleMap.setCenter({lat: position.coords.latitude, lng: position.coords.longitude});
    };

    function failure(){
      console.log("didnt get position")
    };

    navigator.geolocation.getCurrentPosition(success, failure);
  }
}