import { emotes } from "./emotes.js";

const emoteElem = document.getElementById("emote");

// funtion that return a random color in hsl format
function randomColor() {
  return `hsl(${Math.random() * 360}deg, ${Math.random() * 100}%, 50%)`;
}

// Function that resize the font size of the word in the div with ID "word" to fit the width of the div
function resizeFont() {
  let fontSize = 100;
  emoteElem.style.fontSize = `${fontSize}vh`;
  while (emoteElem.scrollWidth > emoteElem.clientWidth) {
    fontSize -= 1;
    emoteElem.style.fontSize = `${fontSize}rem`;
  }
}

// Replace the content in the div with ID "emote" with a random emote from the array
emoteElem.innerHTML = emotes[Math.floor(Math.random() * emotes.length)];
resizeFont();

// Change the content in the div with ID "word" every 3 seconds
let i = 1;
setInterval(() => {
  emoteElem.innerHTML = emotes[Math.floor(Math.random() * emotes.length)];
  // change the color of the word
  emoteElem.style.color = randomColor();
  // change the size of the word
  resizeFont();
  i = (i + 1) % emotes.length;
}, 250);
