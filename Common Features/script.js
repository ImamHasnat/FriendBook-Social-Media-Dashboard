function showForm(formId) {
  document.getElementById('loginForm').classList.remove('show');
  document.getElementById('signupForm').classList.remove('show');
  document.getElementById('forgotForm').classList.remove('show');
  document.getElementById(formId).classList.add('show');

  if (formId === 'loginForm') document.getElementById('title').innerText = "Login";
  else if (formId === 'signupForm') document.getElementById('title').innerText = "Signup";
  else if (formId === 'forgotForm') document.getElementById('title').innerText = "Forgot Password";
  
  
}

function login() {
  let email = document.getElementById('loginEmail').value;
  let pass = document.getElementById('loginPassword').value;
  if (email && pass) {
    document.getElementById('message').innerText = "Login Successful!";
  } else {
    document.getElementById('message').innerText = "Please fill all fields!";
  }
}

function signup() {
  let email = document.getElementById('signupEmail').value;
  let pass = document.getElementById('signupPassword').value;
  if (email && pass) {
    document.getElementById('message').innerText = "Signup Successful! Please verify your email.";
  } else {
    document.getElementById('message').innerText = "Please fill all fields!";
  }
}

function forgotPassword() {
  let email = document.getElementById('forgotEmail').value;
  if (email) {
    document.getElementById('message').innerText = "Reset link sent to your email.";
  } else {
    document.getElementById('message').innerText = "Enter your email.";
  }
}
