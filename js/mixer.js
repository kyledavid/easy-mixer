$(document).ready(function() {

    var controlButtons = document.querySelector('.mix-controls').querySelectorAll('button');
    
    controlButtons.forEach(function(button) {
        button.addEventListener('mouseup', filterItems);
    });

    sortContainerItems();

    /* Sort all items in a .mix-container alphabetically by taxonomy data */

    function sortContainerItems() {
        var mixItems = document.querySelectorAll('.mix');
        var mixArray = [...mixItems];


        mixArray = (mixArray).sort(function(firstBox, secondBox) {
            var firstTax = firstBox.dataset.tax;
            var secondTax = secondBox.dataset.tax;

            return firstTax.charAt(0) > secondTax.charAt(0);
        });

        mixArray.forEach(function(item) {
            document.querySelector('.mix-container').appendChild(item);
        });
    }

    /* determine how to filter mix items */

    function filterItems() {

        var filter = this.dataset.filter;
        var filterString = '[data-tax="' + filter + '"]';

        if (filter === 'all') {
            showAllItems();
        } else if (filter === 'none') {
            applyFilter('.mix');
        } else {
            applyFilter(filterString, filter);
        }   

    }

    /* Hide all items with the target filter data */

    function applyFilter(filterString, rawFilter) {

        var mixItems = document.querySelectorAll('.mix');
        var filteredItems = $(mixItems).filter(filterString);

        console.log(rawFilter);

        var otherItems = $(mixItems).filter(function(i, item) {
            return item.dataset.tax != rawFilter;
        });

        $(filteredItems).each(function(i, item) {
            $(item).fadeOut();
        });

        $(otherItems).each(function(i, item) {
            $(item).fadeIn();
        });
    }

    function showAllItems() {
        
        var mixItems = document.querySelectorAll('.mix');

        $(mixItems).each(function(i, item) {
            $(item).fadeIn();
        });
    }
    
});