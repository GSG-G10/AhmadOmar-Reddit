const loginForm = document.querySelector('.login-form');
const username = document.getElementById('username');
const password = document.getElementById('password');

const usernameErrMsg = document.createElement('span');
const passwordErrMsg = document.createElement('span');

usernameErrMsg.classList.add('error-message');
passwordErrMsg.classList.add('error-message');

const createErrorMessage = (elementName, afterElement, messageContent) => {
  afterElement.after(elementName);
  elementName.textContent = messageContent;
};

const validate = (e) => {
  e.preventDefault();
  let formValid = false;
  if (username.value === '') {
    username.style.borderColor = 'red';
    createErrorMessage(usernameErrMsg, username, 'username should not be empty');
  } else if (!username.value.match(/^[A-Za-z][A-Za-z0-9_]{7,18}$/)) {
    username.style.borderColor = 'red';
    createErrorMessage(usernameErrMsg, username, 'Username must be between 7 and 18 characters, no special characters allowed except ( _ )');
  } else {
    username.style.borderColor = 'green';
    usernameErrMsg.textContent = '';
  }

  if (password.value === '') {
    password.style.borderColor = 'red';
    createErrorMessage(passwordErrMsg, password, 'Password should not be empty');
  } else if (!password.value.match(/^[a-zA-Z0-9]+$/) || password.value.length <= 6) {
    password.style.borderColor = 'red';
    createErrorMessage(passwordErrMsg, password, 'Password must be more than 6 characters long, and should be alphanumeric');
  } else {
    password.style.borderColor = 'green';
    passwordErrMsg.textContent = '';
    formValid = true;
  }

  if (formValid) {
    loginForm.submit();
  }
};

loginForm.addEventListener('submit', validate);
