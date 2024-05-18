const imagesAmount = 10;
const backgroundsAmount = 8;
// create random number generator with leading zero
const randomImage = () => {
  return `./images/${String(Math.ceil(Math.random() * imagesAmount)).padStart(
    2,
    '0'
  )}.png`;
};

const randomBackground = () => {
  return `./images/bg${String(
    Math.ceil(Math.random() * backgroundsAmount)
  ).padStart(2, '0')}.gif`;
};

// Change the src of the image every 0.5s
const image = document.querySelector('img');
setInterval(() => {
  image.src = randomImage();
}, 1000);

// Choose a random background image
document.body.style.backgroundImage = `url(${randomBackground()})`;
