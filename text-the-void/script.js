const words = [
  "IF",
  "YOU",
  "FIND",
  "THIS",
  "WORLD",
  "BAD",
  "YOU",
  "SHOULD",
  "SEE",
  "SOME",
  "OF",
  "THE",
  "OTHERS",
];

const wordElement = document.getElementById("word");

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
