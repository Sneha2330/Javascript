const formContainer = document.createElement('div');
formContainer.style.width = '300px';
formContainer.style.margin = '40px auto';
formContainer.style.padding = '20px';
formContainer.style.border = '1px solid #ccc';
formContainer.style.borderRadius = '10px';
formContainer.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';

const form = document.createElement('form');
(link unavailable) = 'register-form';

const usernameLabel = document.createElement('label');
usernameLabel.textContent = 'Username:';
usernameLabel.htmlFor = 'username';

const usernameInput = document.createElement('input');
usernameInput.type = 'text';
(link unavailable) = 'username';
usernameInput.name = 'username';

const emailLabel = document.createElement('label');
emailLabel.textContent = 'Email:';
emailLabel.htmlFor = 'email';

const emailInput = document.createElement('input');
emailInput.type = 'email';
(link unavailable) = 'email';
emailInput.name = 'email';

const passwordLabel = document.createElement('label');
passwordLabel.textContent = 'Password:';
passwordLabel.htmlFor = 'password';

const passwordInput = document.createElement('input');
passwordInput.type = 'password';
(link unavailable) = 'password';
passwordInput.name = 'password';

const confirmPasswordLabel = document.createElement('label');
confirmPasswordLabel.textContent = 'Confirm Password:';
confirmPasswordLabel.htmlFor = 'confirm-password';

const confirmPasswordInput = document.createElement('input');
confirmPasswordInput.type = 'password';
(link unavailable) = 'confirm-password';
confirmPasswordInput.name = 'confirm-password';

const submitButton = document.createElement('input');
submitButton.type = 'submit';
submitButton.value = 'Register';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = usernameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;
  if (!username || !email || !password || !confirmPassword) {
    alert('Please fill in all fields');
    return;
  }
  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }
  alert(`User registered successfully: ${username}`);
});
form.appendChild(usernameLabel);
form.appendChild(usernameInput);
form.appendChild(emailLabel);
form.appendChild(emailInput);
form.appendChild(passwordLabel);
form.appendChild(passwordInput);
form.appendChild(confirmPasswordLabel);
form.appendChild(confirmPasswordInput);
form.appendChild(submitButton);

formContainer.appendChild(form);
document.body.appendChild(formContainer);
