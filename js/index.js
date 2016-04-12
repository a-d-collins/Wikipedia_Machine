// searchResults() -- Populates search results div
function searchResults() {
    var searchTerm = $('#searchInput').val();
    alert("I've been hit!");
}

// Handles the appearance of the searchButton when the #searchInput field switches between empty/populated
function searchButtonEffects() {
    // If #searchInput is empty...
    if (!$('#searchInput').val()) {
        // Fade the .searchButton
        $('.searchButton').addClass('faded');
        // Hide .clearInput
        $('.clearInput').addClass('hidden');
        
        // the if statement may not be necessary here.
        if ($('.searchButton').hasClass('clickable')) {
            $('.searchButton').removeClass('clickable');
        }
    } else {
        // Otherwise, make .searchButton clickable with class 'clickable'
        $('.searchButton').addClass('clickable');
        // Make clearInput button appear
        $('.clearInput').removeClass('hidden');
        // And if .searchButton has class 'faded', which will occur when text is entered into an empty input field...
        if ($('.searchButton').hasClass('faded')) {
            // remove class faded
            $('.searchButton').removeClass('faded');
        }
    }
}

// Handles function of .clearInput button
function clearInput() {
    // Focus on the input field
    $('#searchInput').focus();
    $('#searchInput').val('');
    $('.searchButton').removeClass('clickable');
    // Fade the .searchButton
    $('.searchButton').addClass('faded');
    //alert('Hay is for horses!');
}

function searchButtonClick() {
    // If search button is not clickable...
    if (!$('.searchButton').hasClass('clickable')) {
        // Focus on the input field
        $('#searchInput').focus();
    }
    // If search button IS clickable AND this is the user's first search...
    else if (!$('.searchBox').hasClass('postSearch')) {
        // Remove preSearch effects on .searchBox
        $('.searchBox').removeClass('preSearch');
        // Add postSearch effects
        $('.searchBox, #searchInput, .searchButton').addClass('postSearch');
        // TODO: Populate searchResults area
        searchResults();
    } else {
        // For now... do nothing
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

$(document).ready(function () {
    // Handle focus event for #searchInput
    $('#searchInput').focus(function () {
        if (!$('.searchBox').hasClass('postSearch')) {
            expandSearchBox();
        } else {
            searchButtonEffects();
        }
    });
    
    // Handle click on #searchIcon
    $('#searchIcon').click(function() {
         searchButtonClick();
    });
    
    // Handle click on #clearInputIcon
    $('#clearInputIcon').mousedown(function() {
        if ($('#searchInput').val()) {
            setTimeout(function () {
                clearInput();
            }, 0);
        }
    });
    
    // Remove class 'faded' when input field is populated
    $('#searchInput').keyup(function(event) {
        searchButtonEffects();
        // If ENTER key pressed (key 13) call searchResults function
        if(event.which === 13) {
            searchResults();
        }
    });
    
    // When document senses a click...
    // NOTE: This may prove problematic when search results are being displayed
    $(document).on('click', function(event) {
        // And that click is outside of the .searchBox BEFORE the first search has been executed..
        if (!$(event.target).parents(".searchBox").length && !$('.searchBox').hasClass('postSearch')) {
            // Remove class 'expandedSearchBox' from .searchBox AND un-fade the .searchButton
            $('.searchBox').removeClass('expandedSearchBox');
            $('.searchButton').removeClass('faded');
        } else {
            // Do nothing
        }
    });
});