const body = document.getElementById('body');
const noButton = document.getElementById('noButton');

body.addEventListener('mouseover', () => {
  const bodyRect = body.getBoundingClientRect();
  const maxX = bodyRect.width - noButton.offsetWidth;
  const maxY = bodyRect.height - noButton.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);``

  noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
});