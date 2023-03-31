const circle = document.querySelector('#circle');

window.addEventListener('scroll', () => {
  const distance = window.scrollY;
  const angle = distance * 0.1;
  circle.style.transform = `rotate(${angle}deg)`;
});
