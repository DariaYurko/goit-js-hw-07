const formEl = document.querySelector('.login-form');
const inputEmailEl = document.querySelector('[name="email"]');
const inputPasswordEl = document.querySelector('[name="password"]');

const callback = event => {
  event.preventDefault();

  const userInfo = {};
  const form = event.target;
  const emailValue = form.elements.email.value;
  const passwordValue = form.elements.password.value;

  if (emailValue === '' || passwordValue === '') {
    alert('All form fields must be filled in');
  } else {
    userInfo[inputEmailEl.getAttribute('name')] = emailValue.trim();
    userInfo[inputPasswordEl.getAttribute('name')] = passwordValue.trim();

    console.log(userInfo);
    form.reset();
  }
};

formEl.addEventListener('submit', callback);
