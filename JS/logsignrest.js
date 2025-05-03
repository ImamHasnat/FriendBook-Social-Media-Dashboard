// Function to validate the login form
function validateLoginForm() {
    let isValid = true;

    const email = document.getElementById('email');
    const password = document.getElementById('loginPassword');

    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    if (!email.value) {
        document.getElementById('emailError').textContent = 'Email is required.';
        isValid = false;
    } else if (!emailRegex.test(email.value)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    if (!password.value) {
        document.getElementById('passwordError').textContent = 'Password is required.';
        isValid = false;
    } else if (password.value.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
        isValid = false;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password.value)) {
        document.getElementById('passwordError').textContent = 'Password must include at least one special character.';
        isValid = false;
    }

    return isValid;
}

// Function to validate the signup form
function validateSignUpForm() {
    let isValid = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');

    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';

    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    if (!name.value) {
        document.getElementById('nameError').textContent = 'Full name is required.';
        isValid = false;
    }

    if (!email.value) {
        document.getElementById('emailError').textContent = 'Email is required.';
        isValid = false;
    } else if (!emailRegex.test(email.value)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    if (!password.value) {
        document.getElementById('passwordError').textContent = 'Password is required.';
        isValid = false;
    } else if (password.value.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
        isValid = false;
    }

    if (!confirmPassword.value) {
        document.getElementById('confirmPasswordError').textContent = 'Please confirm your password.';
        isValid = false;
    } else if (confirmPassword.value !== password.value) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        isValid = false;
    }

    return isValid;
}

// DOM loaded event
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const resetPasswordForm = document.getElementById('resetPasswordForm');

    // Login Form
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            if (!validateLoginForm()) {
                event.preventDefault();
            }
        });

        const loginToggle = document.getElementById('loginToggleEye');
        if (loginToggle) {
            loginToggle.addEventListener('click', function () {
                const pwdField = document.getElementById('loginPassword');
                const isPassword = pwdField.type === 'password';
                pwdField.type = isPassword ? 'text' : 'password';
                this.textContent = isPassword ? '🙈' : '👁️';
            });
        }
    }

    // Signup Form
    if (signupForm) {
        signupForm.addEventListener('submit', function (event) {
            if (!validateSignUpForm()) {
                event.preventDefault();
            }
        });

        const signupToggle = document.getElementById('signupToggleEye');
        const confirmToggle = document.getElementById('confirmToggleEye');

        if (signupToggle) {
            signupToggle.addEventListener('click', function () {
                const signupPwd = document.getElementById('password');
                const isPwd = signupPwd.type === 'password';
                signupPwd.type = isPwd ? 'text' : 'password';
                this.textContent = isPwd ? '🙈' : '👁️';
            });
        }

        if (confirmToggle) {
            confirmToggle.addEventListener('click', function () {
                const confirmPwd = document.getElementById('confirm-password');
                const isPwd = confirmPwd.type === 'password';
                confirmPwd.type = isPwd ? 'text' : 'password';
                this.textContent = isPwd ? '🙈' : '👁️';
            });
        }
    }

    // Reset Password Form
    if (resetPasswordForm) {
        const sendCodeBtn = resetPasswordForm.querySelector('button[type="submit"]');
        const resetToggle = document.getElementById('resetToggleEye');
        const email = document.getElementById('resetEmail');
        const confirmationCode = document.getElementById('confirmationCode');
        const newPassword = document.getElementById('newPassword');

        const confirmationCodeContainer = document.getElementById('confirmationCodeContainer');
        const newPasswordContainer = document.getElementById('newPasswordContainer');

        const resetEmailError = document.getElementById('resetEmailError');
        const confirmationCodeError = document.getElementById('confirmationCodeError');
        const newPasswordError = document.getElementById('newPasswordError');

        let step = 1;

        resetPasswordForm.addEventListener('submit', function (event) {
            event.preventDefault();

            resetEmailError.textContent = '';
            confirmationCodeError.textContent = '';
            newPasswordError.textContent = '';

            let isValid = true;

            if (step === 1) {
                const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

                if (!email.value) {
                    resetEmailError.textContent = 'Email is required.';
                    isValid = false;
                } else if (!emailRegex.test(email.value)) {
                    resetEmailError.textContent = 'Please enter a valid email address.';
                    isValid = false;
                }

                if (isValid) {
                    confirmationCodeContainer.style.display = 'block';
                    newPasswordContainer.style.display = 'block';
                    sendCodeBtn.textContent = 'Reset Password';
                    step = 2;
                }
            } else if (step === 2) {
                if (!confirmationCode.value) {
                    confirmationCodeError.textContent = 'Confirmation code is required.';
                    isValid = false;
                }

                if (!newPassword.value) {
                    newPasswordError.textContent = 'New password is required.';
                    isValid = false;
                } else if (newPassword.value.length < 6) {
                    newPasswordError.textContent = 'Password must be at least 6 characters long.';
                    isValid = false;
                } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(newPassword.value)) {
                    newPasswordError.textContent = 'Password must include at least one special character.';
                    isValid = false;
                }

                if (isValid) {
                    resetPasswordForm.submit();
                }
            }
        });

        if (resetToggle) {
            resetToggle.addEventListener('click', function () {
                const isPassword = newPassword.type === 'password';
                newPassword.type = isPassword ? 'text' : 'password';
                this.textContent = isPassword ? '🙈' : '👁️';
            });
        }
    }
});
