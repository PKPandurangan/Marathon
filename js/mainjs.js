var globalKill = function() {};
var UI;



(function($) {

	"use strict";

	var site_url = 'http://localhost/mara';

	globalKill.prototype = {

		init : function() {

			this.widget_countdown();
			this.widget_carousel();
			this.show_map();
		},

		widget_countdown : function()
		{
			var newYear = new Date(); 
			newYear = new Date(newYear.getFullYear() + 1, 1 - 1, 1); 
			$('#countDown').countdown({until: newYear}); 

		}, //end widget_countdown

		widget_carousel : function() {
			$('#carousel-gallery-holder .carousel').owlCarousel({
				items : 4,
				autoHeight : true
			});
		},

		widget_lightgallery : function() {
			$("#light-gallery").lightGallery(); 
		}, 

		show_map : function() {

			var map;
			var myLatlng = new google.maps.LatLng(13.050075, 80.282420);
			var myLatlng2 = new google.maps.LatLng(13.040919, 80.262186);
			var image1 = 'img/marker_start.png';
			var image2 = 'img/marker_finish.png';


			function initialize() {


				var directionsDisplay;
				var directionsService = new google.maps.DirectionsService();

				directionsDisplay = new google.maps.DirectionsRenderer();
				var mapOptions = {
					zoom: 15,
					center: new google.maps.LatLng(13.045581, 80.272056),
					scrollwheel: false

				};
				map = new google.maps.Map(document.getElementById('route-map'),
				  mapOptions);
				directionsDisplay.setMap(map);


				// var marker = new google.maps.Marker({
				//   position: myLatlng,
				//   map: map,
				//   title: 'start',
				//   icon: image1
				// });	
				// var marker2 = new google.maps.Marker({
				//   position: myLatlng2,
				//   map: map,
				//   title: 'finish',
				//   icon: image2
				// });

				var start = new google.maps.LatLng(13.050075, 80.282420);
				var end = new google.maps.LatLng(13.040919, 80.262186);

				var request = {
					origin: start,
					destination: end,
					travelMode: google.maps.TravelMode.DRIVING
				};

				directionsService.route(request, function(response, status) {
					if (status == google.maps.DirectionsStatus.OK) {
					  directionsDisplay.setDirections(response);
					}
				});
			}


			google.maps.event.addDomListener(window, 'load', initialize);
		}

		

	} // end globalKill.prototype


	$(document).ready(function(){
		var UI = new globalKill();
		UI.init();
	});

})(jQuery);