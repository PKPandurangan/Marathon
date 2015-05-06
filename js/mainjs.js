var globalKill = function() {};
var UI;



(function($) {

	"use strict";

	var site_url = 'http://localhost/mara';

	globalKill.prototype = {

		init : function() {

			this.widget_countdown();
			this.widget_carousel();
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
		}

		

	} // end globalKill.prototype


	$(document).ready(function(){
		var UI = new globalKill();
		UI.init();
	});

})(jQuery);