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
            
            for (var i = 0; i < data.query.pages.length; i++) {
                var page, pageInfo;
            
                page = data.query.pages[i];
                pageInfo = "No page information to display.";
                
                // If the search result does not have a description...
                if (!page.terms.description) {
                    // Then it is highly unlikely that the page is a 'Wikipedia disambiguation page' and therefore,
                    // it is reasonable to display the page.extract as the pageInfo
                    pageInfo = page.extract;
                }
                // Else if 'description' includes/contains the string 'Wikipedia disambiguation page' OR 'Wikimedia disambiguation page' ...
                else if (page.terms.description.includes('Wikipedia disambiguation page') || page.terms.description.includes('Wikimedia disambiguation page')) {
                    // Then it is a 'disambiguation' page and ...
                    // If the extract contains the string " refer to:" || " refers to:" || other variations of that ...
                    if (page.extract.includes(' refer to:') || page.extract.includes(' refers to:') || page.extract.includes(' refer to :') || page.extract.includes(' refers to :')) {
                        // make pageInfo equal to the page description ('Wikipedia disambiguation page')
                        pageInfo = page.terms.description;
                    } else {
                        // append page extract
                        pageInfo = page.extract;
                    }
                } else {
                    // append page extract
                    pageInfo = page.extract;
                }
                
                // append a bootstrap panel that contains page.title, pageInfo, and acts as a link to the matching wikipedia page
                $('.results').append('<a target="_blank" href="https://en.wikipedia.org/?curid=' + page.pageid + '"><div class="panel panel-default"><div class="panel-heading"><h3 class="panel-title">'+page.title+'</h3></div><div class="panel-body">'+pageInfo+'</div></div></a>');
            }
            $('.results').append('<p><a href="#">Back to top</a></p>');

        },
        error: function (errorMessage) {
            alert(errorMessage);
        }
    });
}

// Handles events when searchButton is clicked (click event only occurs when pointer-events CSS attribute does NOT have value 'none')
function search() {
    /* 3/18/2016 -- Replacement, short-hand code */
    if ($('.searchBox').hasClass('absoluteCenter')) {
        // Remove absoluteCenter effects on .searchBox
        $('.searchBox').removeClass('absoluteCenter');
        // Add postSearch effects
        $('.searchBox').addClass('sBoxPostSearch');
        $('#searchInput').addClass('siPostSearch');
        $('.searchButton').addClass('sButtonPostSearch');
        // DONE: Populate searchResults area
        searchResults();
    }
    // If .searchBox does not have class 'absoluteCenter' then this may be new search, thus necessitating a clearing of the previous search results.
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
function expandSearchBox() {
    // Expand the width of the searchBox with class 'sBoxExpanded'
    $('.searchBox').addClass('sBoxExpanded');
}

// inputFocus() -- focuses on #searchInput field
function inputFocus() {
    $('#searchInput').focus();
}

// reloadDocument() -- Reloads web page
function reloadDocument() {
    // Reloading a page IS NOT ALLOWED IN CODEPEN
    // location.reload();
    // Instead, try the following...
    // Clear search results
    $('.results').empty();
    // Reset form
    // $('#searchForm').reset(); does not work in codepen
    // Clear form input field  
    $('#searchInput').val('');
    // Un-expand the searchBox (removing class 'sBoxExpanded')
    $('.searchBox').removeClass('sBoxExpanded');
    // Remove postSearch effects
    $('.searchBox').removeClass('sBoxPostSearch');
    $('#searchInput').removeClass('siPostSearch');
    $('.searchButton').removeClass('sButtonPostSearch');
    // Add absoluteCenter effects on .searchBox
    $('.searchBox').addClass('absoluteCenter');
}

$(document).ready(function () {
    // Handle focus event for #searchInput
    $('#searchInput').click(function () {
        if (!$('.searchBox').hasClass('sBoxPostSearch')) {
            expandSearchBox();
        } else {
            // Do nothing
        }
    });
    
    // Handle click on #clearInputIcon
    // #clearInputIcon is characterized as a 'reset' element in the html form and will, by default, reset the input field
    $('#clearInputIcon').click(function() {
        // Focus on the input field
        inputFocus();
    });
    
    // Handle click on #searchIcon
    // TODO (added 4/3/2016 @ 11:20am): Make #searchIcon type="submit" --> Doing so could eliminate unneeded code (i.e. the next 5 lines (Pay attention to the focus() functionality added on 4/3/2016. Make sure it works when element changed to type="submit"))
    $('#searchIcon').click(function() {
        search();
        // (4/3/2016) Focus on #searchInput
        inputFocus();
    });
    
    $('#randomSearch').click(function() {
        // Re-focus on #searchInput
        inputFocus();
    });
    
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
        if (!$(event.target).parents(".searchBox").length && !$('.searchBox').hasClass('sBoxPostSearch')) {
            // Remove class 'sBoxExpanded' from .searchBox AND un-fade the .searchButton
            $('.searchBox').removeClass('sBoxExpanded');
        } else {
            // Do nothing
        }
    });
});