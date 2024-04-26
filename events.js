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
// switch beteewn manual.html and index.html by pressing 'm'
addKeyListeners('m', () => {
  const currentUrl = window.location.href;
  if (currentUrl.includes('manual')) {
    window.location.href = 'index.html';
  } else {
    window.location.href = 'manual.html';
  }
});
addKeyListeners(
  'i',
  () => {
    document.body.style.filter = 'invert(1)';
  },
  () => {
    document.body.style.filter = 'invert(0)';
  }
);

addKeyListeners(
  's',
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
