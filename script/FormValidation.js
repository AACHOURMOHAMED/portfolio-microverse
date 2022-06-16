const form = document.querySelector('.form-contact');
const email = document.getElementById('email');
const error = document.querySelector('small');
form.addEventListener('submit', (e) => {
  const message = [];

  if (email.value !== email.value.toLowerCase()) {
    message.push('Please use lowercase for email address');
  }

  if (message.length > 0) {
    e.preventDefault();
    error.innerHTML = message.join('<br/>');
    email.style.border = '2px solid #df0000';
    email.style.borderRadius = '3px';
    email.style.backgroundColor = 'tomato';
    error.style.backgroundColor = 'red';
  }
});