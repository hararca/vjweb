const imagesAmount = 11;
// create random number generator with leading zero
const randomImage = () => {
  return `./images/h${String(Math.ceil(Math.random() * imagesAmount)).padStart(
    2,
    '0'
  )}.png`;
};

// Change the src of the image every 0.5s
const image = document.querySelector('img');
setInterval(() => {
  image.src = randomImage();
}, 1000);

// change the background to a conic gradient with random colours every 0.1s
setInterval(() => {
  const randomHue = Math.random() * 360;
  document.body.style.backgroundImage = `repeating-conic-gradient(
    from 0deg, hsl(${randomHue} 100 50) 0deg 7.5deg, hsl(${randomHue} 100 75) 7.5deg 15deg)`;
}, 100);
