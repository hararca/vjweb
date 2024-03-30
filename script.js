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

// Function to add keydown and keyup event listeners for a specific key
const addKeyListeners = (key, downCallback, upCallback) => {
  document.addEventListener('keydown', (event) => {
    if (event.key === key) {
      downCallback();
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.key === key) {
      upCallback();
    }
  });
};

// Call the addKeyListeners function for each key and its corresponding callbacks
addKeyListeners(
  's',
  () => {
    document.body.style.filter = 'invert(1)';
  },
  () => {
    document.body.style.filter = 'invert(0)';
  }
);

addKeyListeners(
  'a',
  () => {
    document.body.style.animation = 'strobo 0.1s infinite';
  },
  () => {
    document.body.style.animation = 'none';
  }
);

addKeyListeners(
  'd',
  () => {
    document.body.classList.add('noise');
  },
  () => {
    document.body.classList.remove('noise');
  }
);

addKeyListeners(
  'm',
  () => {
    window.location.href = './manual.html';
  },
  () => {
    window.location.href = './index.html';
  }
);
