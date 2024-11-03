document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Simulate form submission
    document.getElementById('form-message').innerText = 'Thank you, ' + name + '! Your message has been sent.'+
                                                                                'Our Team will get back to you shortly';
    document.getElementById('contact-form').reset(); // Reset the form
  });
  