// Placeholder for actual user data; in a real scenario, you'd fetch this data from your backend
const userData = {
    name: 'Divyanshu Singh',
    email: 'rajdivyansu@gmail.com'
  };
  
  document.getElementById('profile-name').innerText = userData.name;
  document.getElementById('profile-email').innerText = userData.email;
  
  document.getElementById('logout-button').addEventListener('click', function() {
    window.location.href = 'login.html'; // Redirect to login page
  });
  