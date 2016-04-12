A Pen created at CodePen.io. You can find this one at ____.

Wikipedia_Machine_v.2.7.2

2.7.2:
-- Goals:
    1. DONE -- CLEAN UP UNUSED/COMMENTED CODE
    2. TODO -- Clean up CSS. Follow CSS Lint rules
    3. DONE -- ReName "preSearch" class to "absoluteCenter" -- "absoluteCenter" is easier to understand.
    4. DONE -- Set <body> AND <html> to 100%
    5. DONE -- Try using a different centering technique (http://zerosixthree.se/vertical-align-anything-with-just-3-lines-of-css/ ALSO SEEN HERE https://davidwalsh.name/css-vertical-center OR http://vanseodesign.com/css/vertical-centering/ AND-FOR-HORIZ-ALIGN http://www.w3schools.com/css/css_align.asp)
    CONTINUE IN V. 2.7.3
    1. TODO -- Revert back to old centering technique
    2. TODO -- Autocomplete function (http://api.jqueryui.com/autocomplete/#option-source)
    3. TODO -- Autocomplete with caching (https://jqueryui.com/autocomplete/#remote-with-cache)
    4. TODO -- (added 4/3/2016 @ 11:20am) Make #searchIcon type="submit" --> Doing so could eliminate unneeded code

2.7.1:
-- Goals:
    1. DONE -- Add 'Start over' button after first search that reloads the document
    2. DONE -- Change input placeholder from "Type and search" to "Search Wikipedia"
    3. NOT-TODO -- Replace expandSearchBox() function and **'ed function with CSS (Other functionalities currently depend on the .searchBox.expanded class)
    4. DONE -- Create function titled "inputFocus()" that handles $('#searchInput').focus() functionality
    *TODO IN V. 2.7.2: CLEAN UP UNUSED/COMMENTED CODE
    5. TODO -- Autocomplete function (http://api.jqueryui.com/autocomplete/#option-source)
    6. TODO -- Autocomplete with caching (https://jqueryui.com/autocomplete/#remote-with-cache)
    7. TODO -- (added 4/3/2016 @ 11:20am) Make #searchIcon type="submit" --> Doing so could eliminate unneeded code

2.7.0:
-- Goals:
    1. TODO -- Format contents of .results <div> (to make things look nicer) (e.g. Use Bootstrap "Panels")
    CONTINUE IN V. 2.7.1
    2. TODO -- Replace expandSearchBox() function and **'ed function with CSS
    3. TODO -- Add 'Start over' button after first search
    4. TODO -- Autocomplete function (http://api.jqueryui.com/autocomplete/#option-source)
    5. TODO -- Autocomplete with caching (https://jqueryui.com/autocomplete/#remote-with-cache)
    6. TODO -- (added 4/3/2016 @ 11:20am) Make #searchIcon type="submit" --> Doing so could eliminate unneeded code

2.6.5:
-- Goals:
    1. DONE -- (Re)fix issues with clearInput button and functionality (a) (DONE) Clickable problem (b) (DONE, 4/4/2016) Appearance when .searchBox is not expanded
    2. DONE -- (4/3/2016) Get "Random Article" button to work (based off of .searchBox expanded property like the clearInput button)
    3. DONE -- Replace "expandedSearchBox" with "expanded"
    CONTINUE IN 2.7.0
    2. TODO -- Format contents of .results <div> (to make things look nicer) (e.g. Use Bootstrap "Panels")
    3. TODO -- Replace expandSearchBox() function and **'ed function with CSS
    4. TODO -- Add 'Start over' button after first search
    5. TODO -- Autocomplete function (http://api.jqueryui.com/autocomplete/#option-source)
    6. TODO -- Autocomplete with caching (https://jqueryui.com/autocomplete/#remote-with-cache)
    7. TODO -- (added 4/3/2016 @ 11:20am) Make #searchIcon type="submit" --> Doing so could eliminate unneeded code

2.6.4:
-- Goals:
    1. DONE -- Make page.title a link to the wikipedia page
    2. TODO -- Add "Random Article" button
    CONTINUE IN 2.6.5
    3. TODO -- Refix issues with clearInput button and functionality
    4. TODO -- Get "Random Article" button to work
    5. TODO -- Format contents of .results <div> (to make things look nicer) (e.g. Use Bootstrap "Panels")
    6. TODO -- Replace expandSearchBox() function and **'ed function with CSS
    7. TODO -- Add 'Start over' button after first search
    8. TODO -- Autocomplete function (http://api.jqueryui.com/autocomplete/#option-source)
    9. TODO -- Autocomplete with caching (https://jqueryui.com/autocomplete/#remote-with-cache)
    10. TODO -- (added 4/3/2016 @ 11:20am) Make #searchIcon type="submit" --> Doing so could eliminate unneeded code

2.6.3:
-- Goals:
    1. DONE -- (4/3/2016) Clean-up/eliminate clearInput() function (separate function not needed)
    2. DONE -- (4/3/2016) Have browser focus() on #searchInput after #searchIcon is clicked
    CONTINUE IN V. 2.6.4
    2. TODO -- Make page.title a link to the wikipedia page
    3. TODO -- Format contents of .results <div> (to make things look nicer) (e.g. Use Bootstrap "Panels")
    4. TODO -- Replace expandSearchBox() function and **'ed function with CSS
    5. TODO -- Add 'Start over' button after first search
    6. TODO -- Autocomplete function (http://api.jqueryui.com/autocomplete/#option-source)
    7. TODO -- Autocomplete with caching (https://jqueryui.com/autocomplete/#remote-with-cache)
    8. TODO -- (added 4/3/2016 @ 11:20am) Make #searchIcon type="submit" --> Doing so could eliminate unneeded code

2.6.2:
-- Goals:
    1. TODO -- REVERT TO FUNCTIONALITY FROM v. 2.5
    2. TODO -- Fix some issues with clearInput() function
    CONTINUE TODO LIST IN V. 2.6.3
    2. TODO -- Clean up clearInput() function
    3. TODO -- Format contents of .results <div> (to make things look nicer)
    4. TODO -- Replace expandSearchBox() function and **'ed function with CSS
    5. TODO -- Add 'Start over' button after first search
    6. TODO -- Autocomplete function (http://api.jqueryui.com/autocomplete/#option-source)
    7. TODO -- Autocomplete with caching (https://jqueryui.com/autocomplete/#remote-with-cache)

2.6.1:
-- Goals:
    1. TODO -- Replace v. 2.5 'Goal #4' with jquery .change() functionality
    2. TODO -- Find out that the .change() function causes problems (e.g. No matter where you click outside of the textbox, the .change() function will be invoked)
    IN V. 2.6.2 REVERT TO SUBMIT FUNCTIONALITY FROM v. 2.5
    CONTINUE TODO LIST IN V. 2.6.3
    2. TODO -- Format contents of .results <div> (to make things look nicer)
    3. TODO -- Replace expandSearchBox() function and **'ed function with CSS
    4. TODO -- Add 'Start over' button after first search
    5. TODO -- Autocomplete function (http://api.jqueryui.com/autocomplete/#option-source)
    6. TODO -- Autocomplete with caching (https://jqueryui.com/autocomplete/#remote-with-cache)

2.5:
-- Goals:
    1. DONE -- (3/31/16) Deprecations
        (a) .keydown event --> Functionality already handled by .submit function
        (b) name of searchInput element (previously 'wikiThis')
    2. DONE -- Play around more with jquery.ajax function
    3. DONE -- Populate .results <div> with data from ajax call to Wikipedia
    4. DONE -- Create else if condition in search() function to test whether #searchInput field has changed (functionality could be replaced by jquery .change() function if you wish to do so)
    5. DONE -- Clear contents of .results <div> before new results are displayed
    DO REST IN V. 2.6
    7. TODO -- Replace v. 2.5 'Goal #4' with jquery .change() functionality
    8. TODO -- Format contents of .results <div> (to make things look nicer)
    9. TODO -- Replace expandSearchBox() function and **'ed function with CSS
    10. TODO -- Add 'Start over' button after first search
    11. TODO -- Autocomplete function (http://api.jqueryui.com/autocomplete/#option-source)
    10. TODO -- Autocomplete with caching (https://jqueryui.com/autocomplete/#remote-with-cache)

2.4:
-- Goals:
    1. DONE -- Test jquery.ajax function
    2. DONE -- Disable autocomplete on the 'input' element UNTIL FURTHER NOTICE

2.3:
-- Goals:
    1. DONE -- Clean up index.js and style.css --> Remove unused code from version 2.2.
    2. DONE -- Replace .keyup function with .keydown function
    3. DONE -- Prevent default events when ENTER key is pressed in the search form (see <head> element of index.html for more details)
    4. DONE -- Handle ENTER key --> STILL MORE TO DO WITH THIS, though
    5. TODO -- Replace expandSearchBox() function and **'ed function with CSS

2.2:
-- Goals:
    1. DONE -- Remove MOST all Javascript effects on .clearInput button (for more info see: http://codepen.io/shidhincr/pen/ICLBD)
    2. (part1) DONE -- Remove MOST all Javascript effects on .searchButton
    2. (part2) DONE -- Remove need for searchButtonEffects() method
    3. TODO -- Replace .keyup function with .keydown function
    4. TODO -- Prevent default events when ENTER key is pressed in the search form
    5. TODO -- Handle ENTER key

2.1:
-- Goals:
    1. DONE -- Alter searchButtonClick() function so that it is more 'adaptable'
    2. DONE -- Fine-tune css of searchResults div and .searchBox
    3. DONE (somewhat) -- Read mediawiki documentation
    4. TODO -- Sort out issue with .clearInput button
    5. TODO -- Populate searchResults div
    6. TODO -- Get ENTER key to work as a "submit search" key
    7. TODO -- Suggested/autocompleted text

2.0:
-- Goals:
    1. DONE -- Remove class 'faded' when input field is populated (use .keyup() method)
    2. DONE -- Clean up index.js file

1.0:
-- Goals:
    1. USE AS MUCH HTML AND CSS AND AS LITTLE JS AS POSSIBLE
    2. Expand div and input field on :hover
    3. By default, the .searchButton is NOT clickable (i.e. does not have class 'clickable')
    4. If input field is empty, fade .searchButton
    5. If input field is already populated, add class 'clickable' to .searchButton