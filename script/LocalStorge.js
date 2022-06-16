const Name = document.getElementById('fullname');
const Email = document.getElementById('email');
const Message = document.getElementById('message');

let data = { fullname: '', email: '', message: '' };

const saveToLocalStorage = () => {
  localStorage.setItem('Data', JSON.stringify(data));
};

Name.addEventListener('change', () => {
  data.fullname = Name.value;
  saveToLocalStorage();
});
Email.addEventListener('change', () => {
  data.email = Email.value;
  saveToLocalStorage();
});
Message.addEventListener('change', () => {
  data.message = Message.value;
  saveToLocalStorage();
});

window.onload = () => {
  if (localStorage.getItem('form_data') !== null) {
    data = JSON.parse(localStorage.getItem('Data'));
    Name.value = data.fullname;
    Email.value = data.email;
    // Message.value = data.message;
  }
};
