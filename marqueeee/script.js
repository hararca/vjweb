const slogans = [
  "Don't panic, keep looking!",
  'If You Find This World Bad, You Should See Some of the Others',
  'Dive into the umbilical chaotic zone',
  'The World Wide Web is a broken system, populated with broken computers on broken networks, running broken software written by broken people.',
  'WHATEVER YOUR NAME IS, GET READY FOR THE BIG SURPRISE!',
  'OPEN YOUR MIND TO ME',
  'YOUR WHOLE LIFE IS JUST A DREAM',
  "IF I'M NOT ME, WHO THE HELL AM I?",
  'FUCKING MUTANTS!',
  'NO HAY QUE CONFUNDIR LA LITERATURA CON LA MERMELADA DE FRAMBUESA',
  'ABRIENDO MENTES. CERRANDO ANTROS',
  'KEEP YOUR RIÑÓN INSIDE',
  'Un pequeño paso para el hombre, una puta mierda en general',
];

const textElement = document.getElementById('text');
const text = slogans[Math.floor(Math.random() * slogans.length)];
textElement.innerText = text + ' ' + text;
textElement.style.animationDuration = text.length / 5 + 's';

// Change the text color every 500ms
let changeColor = setInterval(() => {
  textElement.style.color = `rgb(${Math.random() * 255}, ${
    Math.random() * 255
  }, ${Math.random() * 255})`;
}, 250);
