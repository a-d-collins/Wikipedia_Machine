// searchResults() -- Populates search results div
function searchResults() {
    var searchTerm = $('#searchInput').val();
    alert("I've been hit!");
}

// Handles function of .clearInput button...
function clearInput() {
    // Focus on the input field
    $('#searchInput').focus();
}

// Handles events when searchButton is clicked (click event only occurs when pointer-events CSS attribute does NOT have value 'none')
function search() {
    /* 3/18/2016 -- Replacement, short-hand code */
    // Remove preSearch effects on .searchBox
    $('.searchBox').removeClass('preSearch');
    // Add postSearch effects
    $('.searchBox, #searchInput, .searchButton').addClass('postSearch');
    // TODO: Populate searchResults area
    searchResults();
}

// Called when #searchInput is clicked
// 3/18/2016 -- TODO: Replace with CSS
function expandSearchBox() {
    // If #searchInput is focus...
    if ($('#searchInput').is(':focus')) {
        // Fix the width of the searchBox with class 'expandedSearchBox'
        $('.searchBox').addClass('expandedSearchBox');
    } else {
        // Do nothing
    }
}

$(document).ready(function () {
    // Handle focus event for #searchInput
    // ** 3/18/2016 -- TODO: Replace with CSS
    $('#searchInput').focus(function () {
        if (!$('.searchBox').hasClass('postSearch')) {
            expandSearchBox();
        } else {
            // Do nothing
        }
    });
    
    // Handle click on #clearInputIcon
    $('#clearInputIcon').click(function() {
        clearInput();
    });
    
    // Handle click on #searchIcon
    $('#searchIcon').click(function() {
        search();
    });
    
    // Handle  enter-key when input field is populated
    $('form input').keydown(function(event) {
        // If ENTER key pressed (key 13)...
        if(event.which == 13) {
            // AND the #searchInput field has input...
            if ($('#searchInput').val()) {
                // Invoke search function
                search();
            }
        }
    });
    
    // Handles form onsubmit
    $('#searchForm').submit(function(event) {
        return false;
    });
    
    // When document senses a click...
    // NOTE: This may prove problematic when search results are being displayed
    $(document).on('click', function(event) {
        // And that click is outside of the .searchBox BEFORE the first search has been executed..
        if (!$(event.target).parents(".searchBox").length && !$('.searchBox').hasClass('postSearch')) {
            // Remove class 'expandedSearchBox' from .searchBox AND un-fade the .searchButton
            $('.searchBox').removeClass('expandedSearchBox');
        } else {
            // Do nothing
        }
    });
});