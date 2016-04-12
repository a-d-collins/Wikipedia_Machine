// This may prove problematic when search results are being displayed
$(document).on('click', function(event) {
    if (!$(event.target).parents('.searchBox').length && !$('.searchBox').hasClass('postSearch')) {
        // Collapse .searchBox
        $('.searchBox').removeClass('expandedSearchBox');
        $('.searchButton').removeClass('faded');
    } else {
        // Do nothing
    }
});

// Called when #searchInput is clicked
function expandSearchBox() {
    // If #searchInput is focus...
    if ($('#searchInput').is(':focus')) {
        // Fix the width of the searchBox with class 'expandedSearchBox'
        $('.searchBox').addClass('expandedSearchBox');
        // If #searchInput is empty...
        if (!$('#searchInput').val()) {
            // Fade the .searchButton
            $('.searchButton').addClass('faded');
        } else {
            // Otherwise, make .searchButton clickable with class 'clickable'
            $('.searchButton').addClass('clickable');
        }
    } else {
        // Do nothing
    }
}

function searchButtonClick() {
    if ($('.searchButton').hasClass('clickable')) {
        // Remove preSearch effects on .searchBox
        $('.searchBox').removeClass('preSearch');
        // postSearch effects
        $('.searchBox, #searchInput, .searchButton').addClass('postSearch');
    } else {
        $('#searchInput').focus();
    }
}