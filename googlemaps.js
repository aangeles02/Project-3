function initMap() {
  var uluru = {lat:41.8781, lng: -87.6298};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru}
			
			
			);
  var marker = new google.maps.Marker({position: uluru, map: map});
	var school = {
		lat: 41.9658,
		lng: -87.7142
	};
	var marker = new google.maps.Marker( {
	position: school,
	map: map,
	title: 'Theodore Roosevelt High School'
});
  var bikeLayer = new google.maps.BicyclingLayer();
  bikeLayer.setMap(map);
	  var transitLayer = new google.maps.TransitLayer();
  transitLayer.setMap(map);
	
}

