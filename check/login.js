document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Simple username and password check (for demonstration purposes)
    if (username === 'admin' && password === 'password') {
      document.getElementById('login-message').innerText = 'Login successful!';
      window.location.href = 'index.html'; // Redirect to your index page
    } else {
      document.getElementById('login-message').innerText = 'Invalid username or password';
    }
  });
  