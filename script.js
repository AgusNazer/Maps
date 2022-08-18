function iniciarMap(){
    var coord = {lat:-38.0619895 ,lng: -57.5646011};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 8,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}