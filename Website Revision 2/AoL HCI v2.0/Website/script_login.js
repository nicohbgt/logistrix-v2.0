document.getElementById('loginForm').addEventListener('submit', function (e) {
      e.preventDefault();

      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
      const emailError = document.getElementById('emailError');
      const passwordError = document.getElementById('passwordError');

      let isValid = true;

      emailError.textContent = '';
      passwordError.textContent = '';

      if (!email) {
        emailError.textContent = 'Email is required.';
        isValid = false;
      } else if (!email.endsWith('@logistrix.com')) {
        emailError.textContent = 'Email must end with @logistrix.com.';
        isValid = false;
      }

      if (!password) {
        passwordError.textContent = 'Password is required.';
        isValid = false;
      }

      if (isValid) {
        alert('Login successful!');
        window.location.href = "web_dashboard.html";
      }
    });