// script.js
function firstChar(text) {
    for (let i = 0; i < text.length; i++) {
        if (text[i] !== ' ') {
            return text[i];
        }
    }

    // Return an empty string if the input string only contains spaces or is empty
    return '';
}

// Do not change the code below

const inputText = prompt("Enter text:");
alert(firstChar(inputText));
