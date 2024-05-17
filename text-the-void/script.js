import { words as words01 } from '../texts/text01.js';
import { words as words02 } from '../texts/text02.js';
import { words as words03 } from '../texts/text03.js';
import { words as words04 } from '../texts/text04.js';

// Pick a random text from the list of texts
const texts = [words01, words02, words03, words04];
const words = texts[Math.floor(Math.random() * texts.length)];

const wordElement = document.getElementById('word');

// Replace the content in the div with ID "word" with a random word from the array
const randomIndex = Math.floor(Math.random() * words.length);
wordElement.innerHTML = words[randomIndex];
resizeFont();

// funtion that return a random color in hsl format
function randomColor() {
  return `hsl(${Math.random() * 360}deg, ${Math.random() * 100}%, 50%)`;
}

// Function that resize the font size of the word in the div with ID "word" to fit the width of the div
function resizeFont() {
  let fontSize = 100;
  wordElement.style.fontSize = `${fontSize}vh`;
  while (wordElement.scrollWidth > wordElement.clientWidth) {
    fontSize -= 1;
    wordElement.style.fontSize = `${fontSize}rem`;
  }
}

// Change the content in the div with ID "word" every 3 seconds
let i = randomIndex;
setInterval(() => {
  // change the color of the word
  wordElement.innerHTML = words[i];
  wordElement.style.color = randomColor();
  // change the size of the word
  resizeFont();
  i = (i + 1) % words.length;
}, 500);
