// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Form Validation (Basic)
document.querySelector('form').addEventListener('submit', function (e) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all the fields before submitting!");
        e.preventDefault(); // Prevent form submission
    } else {
        alert("Thank you for contacting us! We will get back to you shortly.");
    }
});
