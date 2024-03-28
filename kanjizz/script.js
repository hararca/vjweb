const kanjiElements = document.querySelectorAll(".kanji");

const randomKanji = () =>
  String.fromCodePoint(Math.floor(Math.random() * (0x9fcc - 0x4e00) + 0x4e00));

// funtion that return a random color in hsl format
function randomColor() {
  return `hsl(${Math.random() * 360}deg, ${Math.random() * 100}%, 50%)`;
}

function randomizeFontSize(kanjiElement) {
  // Random font size between 10 and 100
  kanjiElement.style.fontSize = `${Math.random() * 90 + 10}vh`;
}

// Finction that moves the word to a random position on the screen between -10% and 90% of the viewport
function randomizePosition(kanjiElement) {
  kanjiElement.style.left = `${Math.random() * 100 - 10}vw`;
  kanjiElement.style.top = `${Math.random() * 100 - 10}vh`;
}

// Initiallize the word with a random kanji
kanjiElements.forEach((kanjiElement) => {
  kanjiElement.innerHTML = randomKanji();
  randomizeFontSize(kanjiElement);
  randomizePosition(kanjiElement);
});

kanjiElements.forEach((kanjiElement) => {
  setInterval(() => {
    // change the size of the word
    randomizeFontSize(kanjiElement);
    // change the position of the word
    randomizePosition(kanjiElement);
    // change the kanji
    kanjiElement.innerHTML = randomKanji();
    // Randomize -webkit-text-stroke-color
    kanjiElement.style.webkitTextStrokeColor = randomColor();
  }, Math.random() * 200 + 100);
});
