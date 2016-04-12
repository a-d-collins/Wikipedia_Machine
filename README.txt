A Pen created at CodePen.io. You can find this one at ____.

Wikipedia_Machine_v.2.2

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