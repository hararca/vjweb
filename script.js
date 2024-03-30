const pages = ['./emotezzz', './kanjizz', './marqueeee', './text-the-void'];
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

// invert the colors of the page by pressing the "s" key
document.addEventListener('keydown', (event) => {
  if (event.key === 's') {
    document.body.style.filter = 'invert(1)';
  }
});
document.addEventListener('keyup', (event) => {
  if (event.key === 's') {
    document.body.style.filter = 'invert(0)';
  }
});

// Add strobo animation by pressing the "a" key
document.addEventListener('keydown', (event) => {
  if (event.key === 'a') {
    document.body.style.animation = 'strobo 0.1s infinite';
  }
});
document.addEventListener('keyup', (event) => {
  if (event.key === 'a') {
    document.body.style.animation = 'none';
  }
});
// Add a distorsion effect by pressing the "g" key
document.addEventListener('keydown', (event) => {
  if (event.key === 'd') {
    document.body.classList.add('noise');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.key === 'd') {
    document.body.classList.remove('noise');
  }
});
