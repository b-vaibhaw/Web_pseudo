document.getElementById('contact-us-button').addEventListener('click', function() {
    document.getElementById('overlay').classList.remove('hidden');
    document.getElementById('contact-form-container').classList.remove('hidden');
  });
  
  document.getElementById('close-button').addEventListener('click', function() {
    document.getElementById('overlay').classList.add('hidden');
    document.getElementById('contact-form-container').classList.add('hidden');
  });
  
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Here you can handle form submission, e.g., sending data to a database
    // For demonstration, let's log form data to the console
    const formData = new FormData(event.target);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
    console.log(formDataObject);
  });