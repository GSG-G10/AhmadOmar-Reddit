const signupForm = document.querySelector('.signup-form');
const username = document.getElementById('username');
const emailAddress = document.getElementById('email-address');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmpassword');

const usernameErrMsg = document.createElement('span');
const emailErrMsg = document.createElement('span');
const passwordErrMsg = document.createElement('span');
const confirmPassErrMsg = document.createElement('span');

usernameErrMsg.classList.add('error-message');
emailErrMsg.classList.add('error-message');
passwordErrMsg.classList.add('error-message');
confirmPassErrMsg.classList.add('error-message');

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

  if (emailAddress.value === '') {
    emailAddress.style.borderColor = 'red';
    createErrorMessage(emailErrMsg, emailAddress, 'Email should not be empty');
  } else {
    emailAddress.style.borderColor = 'green';
    emailErrMsg.textContent = '';
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
  }

  if (confirmPassword.value === '') {
    confirmPassword.style.borderColor = 'red';
    createErrorMessage(confirmPassErrMsg, confirmPassword, 'Confirm Password should not be empty');
  } else if (password.value !== confirmPassword.value) {
    confirmPassword.style.borderColor = 'red';
    createErrorMessage(confirmPassErrMsg, confirmPassword, 'Password did not match');
  } else {
    confirmPassword.style.borderColor = 'green';
    confirmPassErrMsg.textContent = '';
    formValid = true;
  }

  if (formValid) {
    signupForm.submit();
  }
};

signupForm.addEventListener('submit', validate);
