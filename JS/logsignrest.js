document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
  
    let isValid = true;
  
    // Clear errors
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
  
    // Email check
    if (!email) {
      document.getElementById('emailError').textContent = 'Email is required.';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      document.getElementById('emailError').textContent = 'Invalid email format.';
      isValid = false;
    }
  
    // Password check
    if (!password) {
      document.getElementById('passwordError').textContent = 'Password is required.';
      isValid = false;
    } else if (password.length < 6) {
      document.getElementById('passwordError').textContent = 'Minimum 6 characters.';
      isValid = false;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      document.getElementById('passwordError').textContent = 'Must include a special character.';
      isValid = false;
    }
  
    if (isValid) {
      console.log('Form submitted');
      document.getElementById('loginForm').reset();
    }
  });
  
  // Toggle password visibility
  document.getElementById('toggleEye').addEventListener('click', function () {
    const pwdField = document.getElementById('password');
    const isPassword = pwdField.type === 'password';
    pwdField.type = isPassword ? 'text' : 'password';
    this.textContent = isPassword ? '🙈' : '👁️';
  });
  