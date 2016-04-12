var currentSearchTerm;

// searchResults() -- Populates search results div
function searchResults() {
    var $formInput = $('#searchInput'),
        term = $formInput.val().replace(" ","+"),
        queryUrl = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages%7Cextracts%7Cpageterms&generator=search&redirects=1&formatversion=2&pithumbsize=50&pilimit=10&exsentences=2&exlimit=10&exintro=1&explaintext=1&gsrsearch="+term+"&gsrlimit=10";
    
    currentSearchTerm = $formInput.val();
    
    $.ajax({
        type: "POST",
        url: queryUrl,
        dataType: "jsonp",
        headers: { 'Api-User-Agent': 'bot' },
        success: function (data) {
            
            var page, pageDescription;
            
            for (var i = 0; i < data.query.pages.length; i++) {
                page = data.query.pages[i];
                
                $('.results').append('<p><a target="_blank" href="https://en.wikipedia.org/?curid=' + page.pageid + '">'+page.title+'</a></p>');
                // If the search result does not have a description...
                if (!page.terms.description) {
                    // Then it is highly unlikely that the page is a 'Wikipedia disambiguation page' and therefore,
                    // it is reasonable to append the pageExtract underneath the pageTitle
                    $('.results').append('<p>'+page.extract+'</p>');
                }
                // Else if 'description' includes/contains the string 'Wikipedia disambiguation page' OR 'Wikimedia disambiguation page' ...
                else if (page.terms.description.includes('Wikipedia disambiguation page') || page.terms.description.includes('Wikimedia disambiguation page')) {
                    // Then it is a 'disambiguation' page and ...
                    // If the extract contains the string " refer to:" || " refers to:" || other variations of that ...
                    if (page.extract.includes(' refer to:') || page.extract.includes(' refers to:') || page.extract.includes(' refer to :') || page.extract.includes(' refers to :')) {
                        // append the page description ('Wikipedia disambiguation page')
                        $('.results').append('<p>'+page.terms.description+'</p>');
                    } else {
                        // append page extract
                        $('.results').append('<p>'+page.extract+'</p>');
                    }
                } else {
                    // append page extract
                    $('.results').append('<p>'+page.extract+'</p>');
                }
                
                // If not last page, append a horzontal rule
                if (i != data.query.pages.length - 1) {
                    $('.results').append('<hr>');
                }
            }

        },
        error: function (errorMessage) {
            alert(errorMessage);
        }
    });
}

/* Deprecated 4/3/2016
// Handles function of .clearInput button...
function clearInput() {
    // Focus on the input field
    $('#searchInput').focus();
}*/

// Handles events when searchButton is clicked (click event only occurs when pointer-events CSS attribute does NOT have value 'none')
function search() {
    /* 3/18/2016 -- Replacement, short-hand code */
    if ($('.searchBox').hasClass('preSearch')) {
        // Remove preSearch effects on .searchBox
        $('.searchBox').removeClass('preSearch');
        // Add postSearch effects
        $('.searchBox, #searchInput, .searchButton').addClass('postSearch');
        // TODO: Populate searchResults area
        searchResults();
    }
    // If .searchBox does not have class 'preSearch' then this may be new search, thus necessitating a clearing of the previous search results.
    // Before calling the searchResults() function, though, it would be wise to make sure that the #searchInput field has actually changed.
    // (else) if the #searchInput field has changed...
    else if ($('#searchInput').val() != currentSearchTerm) {
        // DONE (4/2/2016) Clear search results
        $('.results').empty();
        // Populate searchResults area
        searchResults();
    } else {
        // Do nothing (for now)
    }
}

// Called when #searchInput is clicked
// 3/18/2016 -- TODO: Replace with CSS
function expandSearchBox() {
    // If #searchInput is focus...
    if ($('#searchInput').is(':focus')) {
        // Fix the width of the searchBox with class 'expanded'
        $('.searchBox').addClass('expanded');
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
    // #clearInputIcon is characterized as a 'reset' element in the html form and will, by default, reset the input field
    $('#clearInputIcon').click(function() {
        // Focus on the input field
        $('#searchInput').focus();
    });
    
    // Handle click on #searchIcon
    // TODO (added 4/3/2016 @ 11:20am): Make #searchIcon type="submit" --> Doing so could eliminate unneeded code (i.e. the next 5 lines (Pay attention to the focus() functionality added on 4/3/2016. Make sure it works when element changed to type="submit"))
    $('#searchIcon').click(function() {
        search();
        // (4/3/2016) Focus on #searchInput
        $('#searchInput').focus();
    });
    
    $('#randomSearch').click(function() {
        // Re-focus on #searchInput
        $('#searchInput').focus();
    });
    
    /* Deprecated 3/31/2016
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
    });*/
    
    // Handles form onsubmit (e.g. when ENTER key is pressed)
    $('#searchForm').submit(function(event) {
        // Stop form from submitting normally
        event.preventDefault();
        // search for term in input field
        search();
    });
    
    // When document senses a click...
    // NOTE: This may prove problematic when search results are being displayed
    $(document).on('click', function(event) {
        // And that click is outside of the .searchBox BEFORE the first search has been executed..
        if (!$(event.target).parents(".searchBox").length && !$('.searchBox').hasClass('postSearch')) {
            // Remove class 'expanded' from .searchBox AND un-fade the .searchButton
            $('.searchBox').removeClass('expanded');
        } else {
            // Do nothing
        }
    });
});