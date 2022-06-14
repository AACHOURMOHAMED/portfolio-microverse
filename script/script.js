const nav = document.querySelector('.mobile');
const menu = document.querySelector('.menu');

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  nav.classList.toggle('active');
});

document.querySelectorAll('.tem').forEach((n) => n.addEventListener('click', () => {
  menu.classList.remove('active');
  nav.classList.remove('active');
}));