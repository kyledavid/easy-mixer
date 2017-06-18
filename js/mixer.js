$(document).ready(function() {

	var controlButtons = document.querySelector('.mix-controls').querySelectorAll('button');

	controlButtons.forEach(function(button) {
		button.addEventListener('mouseup', filterItems);
	});

	function filterItems() {
		var filter = this.dataset.filter;

		if (filter === 'all') {
			showAllItems();
		} else if (filter === 'none') {
			applyFilter('.mix');
		} else {
			applyFilter(filter);
		}	

	}

	function showAllItems() {
		var mixItems = document.querySelectorAll('.mix');

		$(mixItems).each(function(i, item) {
			$(item).show();
		});
	}

	function applyFilter(filter) {
		var mixItems = document.querySelectorAll('.mix');
		var filteredItems = $(mixItems).filter(filter);

		var otherItems = $(mixItems).filter(function(i, item) {
			console.log(item.classList.contains(filter.substr(1)));
			return !item.classList.contains(filter.substr(1));
		});

		$(filteredItems).each(function(i, item) {
			$(item).hide();
		});

		$(otherItems).each(function(i, item) {
			$(item).show();
		})
	}
	
});