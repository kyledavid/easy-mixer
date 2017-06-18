$(document).ready(function() {

	var mixItems = document.querySelectorAll('.mix');
	var newList = $(mixItems).filter('.green-box');

	$(newList).each(function(i, item) {
		$(item).hide();
	});

});