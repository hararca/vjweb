const text = document.getElementById("text");
// Get the width of the text with a margin of 180px of buffer
const textWidth = text.clientWidth + 180;
// Append the first 10 characters of the text to create a loop effect
text.textContent += " " + text.textContent.substring(0, 10);
let position = 0;
let marquee = setInterval(() => {
  position -= 75;
  text.style.transform = `translateX(${position}px)`;
  if (position <= textWidth * -1) {
    position = 0;
  }
}, 25);

// Change the text color every 500ms
let changeColor = setInterval(() => {
  text.style.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
    Math.random() * 255
  })`;
}, 250);
