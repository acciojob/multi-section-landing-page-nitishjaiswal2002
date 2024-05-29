//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Perform client-side validation
    if (!validateForm()) {
      return;
    }

    // If validation passes, submit the form
    this.submit();
  });

  function validateForm() {
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // Check if full name is empty
    if (fullName === '') {
      alert('Please enter your full name.');
      return false;
    }

    // Check if email is empty or invalid format
    if (email === '') {
      alert('Please enter your email address.');
      return false;
    } else if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return false;
    }

    // Check if phone number is in valid format (optional)
    if (phone !== '' && !validatePhone(phone)) {
      alert('Please enter a valid phone number in format xxx-xxx-xxxx.');
      return false;
    }

    // Check if message is empty or less than 100 characters
    if (message === '') {
      alert('Please enter your message.');
      return false;
    } else if (message.length < 100) {
      alert('Message must be at least 100 characters long.');
      return false;
    }

    return true;
  }

  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function validatePhone(phone) {
    const re = /^\d{3}-\d{3}-\d{4}$/;
    return re.test(phone);
  }
});
