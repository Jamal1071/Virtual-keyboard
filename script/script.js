/* 
*
* Script - script.js
* author - Jamal
* date - 11 octobar 2022
*/

// USED TO DISPLAY LETTER IN KEYBOARD
function press(i) {
    // GETTING THE VALUE FROM THE ELEMENTS ID 
    var display = document.getElementById("display").innerHTML;
    // SENDING THE LETTER INSIDE THE ELEMENT
    document.getElementById("display").innerHTML = display + (i);
}

// USED TO DELETE LETTER IN KEYBOARD
function del() {
    // GETTING THE VALUE FROM THE ELEMENTS ID 
    var display = document.getElementById("display").innerHTML;
    // DELETING THE LETTER OF LAST WORD
    document.getElementById("display").innerHTML = display.slice(0, display.length -1);
}

// TO CHANGE UPPERCASE AND LOWERCASE
function shift() {
    // GETTING THE VALUE FROM THE ELEMENTS ID 
    var elements = document.getElementsByClassName("primary-btn");
    // CHECKING THE CONDITION IF IT IS IN UPPERCASE AMD LOWERCASE IN KEYBOARD
    for (var i = 0; i < elements.length; i++) {
          elements[i].classList.toggle('lower-case')
    }
}