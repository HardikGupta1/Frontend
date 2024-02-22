// If you want to add click functionality to the cards, you can do the following:
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('click', () => {
    // Add your custom click functionality here
    console.log('Card clicked:', card.querySelector('h2').innerText);
  });
});


document.addEventListener('DOMContentLoaded', function () {
    var contactNumber = document.getElementById('contactNumber');
  
    // Add an event listener for the input event
    contactNumber.addEventListener('input', function () {
      // Remove non-numeric characters from the input
      contactNumber.value = contactNumber.value.replace(/\D/g, '');
    });
  });
  
  function submitForm(event) {
    event.preventDefault();
  
    var form = document.getElementById('contact-form');
    var contactNumber = document.getElementById('contactNumber');
    var contactNumberError = document.getElementById('contactNumberError');
  
    // Validate mobile number input
    if (!/^[0-9]+$/.test(contactNumber.value)) {
      contactNumberError.textContent = 'Please enter numbers only.';
      contactNumber.focus();
      return;
    } else {
      contactNumberError.textContent = ''; // Clear error message if valid
    }
  
    // Perform other form validation here
  
    if (form.checkValidity()) {
      alert('Thank you for writing to us. We value your feedback.');
      form.reset();
    } else {
      form.reportValidity();
    }
  }
  
  function redirectToBlog(url) {
    window.location.href = url;
  }
  
  function rotateSlider(direction) {
    const slider = document.querySelector('.blog-slider');
    const cardWidth = document.querySelector('.blog-card').offsetWidth;
  
    if (direction === 'left') {
      slider.prepend(slider.lastElementChild);
    } else {
      slider.append(slider.firstElementChild);
    }
  }
  