const iframes = document.querySelectorAll('iframe');

const pages = [
  './emotezzz',
  './kanjizz',
  './marqueeee',
  './text-the-void',
  './headzzz',
];

// Initialise the iframes with the pages and display just the first one
iframes.forEach((iframe, index) => {
  if (index < pages.length) {
    iframe.src = pages[index];
    iframe.style.visibility = 'hidden';
  }
  if (index === 0) {
    iframe.style.visibility = 'visible';
  }
});

// Change the visibility of the iframes by selecting the visible with number key
const changeVisibility = (index) => {
  iframes.forEach((iframe, i) => {
    if (i === index) {
      iframe.style.visibility = 'visible';
    } else {
      iframe.style.visibility = 'hidden';
    }
  });
};

// Add event listeners for the number keys
document.addEventListener('keydown', (event) => {
  if (event.key >= 1 && event.key <= pages.length) {
    changeVisibility(event.key - 1);
  }
});
