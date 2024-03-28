const text = document.getElementById("text");

// Change the text color every 500ms
let changeColor = setInterval(() => {
  text.style.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
    Math.random() * 255
  })`;
}, 250);
