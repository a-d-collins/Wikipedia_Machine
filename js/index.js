// Handles the appearance of the searchButton when the #searchInput field switches between empty/populated
function searchButtonEffects() {
    // If #searchInput is empty...
    if (!$('#searchInput').val()) {
        // Fade the .searchButton
        $('.searchButton').addClass('faded');
        
        // the if statement may not be necessary here.
        if ($('.searchButton').hasClass('clickable')) {
            $('.searchButton').removeClass('clickable');
        }
    } else {
        // Otherwise, make .searchButton clickable with class 'clickable'
        $('.searchButton').addClass('clickable');
        // And if .searchButton has class 'faded', which will occur when text is entered into an empty input field...
        if ($('.searchButton').hasClass('faded')) {
            // remove class faded
            $('.searchButton').removeClass('faded');
        }
    }
}

// Called when #searchInput is clicked
function expandSearchBox() {
    // If #searchInput is focus...
    if ($('#searchInput').is(':focus')) {
        // Fix the width of the searchBox with class 'expandedSearchBox'
        $('.searchBox').addClass('expandedSearchBox');
        // handle search button effects
        searchButtonEffects();
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

$(document).ready(function () {
    // Remove class 'faded' when input field is populated
    $('#searchInput').keyup(function(event) {
        searchButtonEffects();
    });
    
    // When document senses a click...
    // NOTE: This may prove problematic when search results are being displayed
    $(document).on('click', function(event) {
        // And that click is outside of the .searchBox BEFORE the first search has been executed..
        if (!$(event.target).parents('.searchBox').length && !$('.searchBox').hasClass('postSearch')) {
            // Remove class 'expandedSearchBox' from .searchBox AND un-fade the .searchButton
            $('.searchBox').removeClass('expandedSearchBox');
            $('.searchButton').removeClass('faded');
        } else {
            // Do nothing
        }
    });
});