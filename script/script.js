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
// popup cards javascript
const workContainer = document.querySelector('.popup');
const workBox = workContainer.querySelectorAll('.pop');

document.querySelectorAll('.workContent .card').forEach((work) => {
  work.onclick = () => {
    workContainer.style.display = 'flex';
    const name = work.getAttribute('data-name');
    workBox.forEach((preview) => {
      const target = preview.getAttribute('data-target');
      if (name === target) {
        preview.classList.add('active');
      }
    });
  };
});

workBox.forEach((close) => {
  close.querySelector('.fa-times').onclick = () => {
    close.classList.remove('active');
    workContainer.style.display = 'none';
  };
});