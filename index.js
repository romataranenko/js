const openBtn = document.getElementById('openBtn');
const square = document.getElementById('square');

openBtn.addEventListener('click', () => {
  square.classList.toggle('show');
});

square.addEventListener('click', () => {
  const hue = Math.floor(Math.random() * 360);
  square.style.background = `hsl(${hue}, 70%, 55%)`;
});