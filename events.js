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
    if (window.location.href.includes('manual.html')) {
      window.location.href = './index.html';
    } else {
      window.location.href = './manual.html';
    }
  },
  () => {
    return;
  }
);

addKeyListeners(
  'r',
  () => {
    window.location.reload();
  },
  () => {
    return;
  }
);
