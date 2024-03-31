const pages = [
  './emotezzz',
  './kanjizz',
  './marqueeee',
  './text-the-void',
  './headzzz',
];
const iframe = document.getElementById('iframe');
let currentPage = 0;

// Function that returns a random page from the pages array
const getRandomPage = () => {
  let randomIndex = Math.floor(Math.random() * pages.length);
  while (randomIndex === currentPage) {
    randomIndex = Math.floor(Math.random() * pages.length);
  }
  currentPage = randomIndex;
  return pages[randomIndex];
};

// Function to change the src attribute of the iframe element to a random page at a random interval
const changeSrcRandomly = () => {
  iframe.src = getRandomPage();
  let delay = Math.random() * 9000 + 1000;
  setTimeout(changeSrcRandomly, delay);
};

// Initial call to start the process
let initialDelay = Math.random() * 9000 + 1000;
setTimeout(changeSrcRandomly, initialDelay);

// Keep focus on the body when clicking on the iframe
window.onblur = function () {
  setTimeout(function () {
    window.focus();
  }, 0);
};
