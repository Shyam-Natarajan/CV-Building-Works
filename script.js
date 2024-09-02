document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault()
    let name = document.getElementById("name").value.trim();

    let message = document.getElementById("message").value;

    const phoneInput = document.getElementById('number').value.trim();
    const phonePattern = /^[0-9]{10}$/;

    if (phonePattern.test(phoneInput)) {
        document.getElementById('formResponse').innerHTML = `<div class="alert alert-success">Phone number is valid!</div>`;
        // You can proceed with form submission here
        console.log(`Name = ${name}\nMobile Number = ${phoneInput}\nRequest = ${message}`);

        document.getElementById("formResponse").innerHTML = `<div class = " alert alert-success"> Thank you, ${name}! Your request has been sent successfully.</div>`;
    } else {
        document.getElementById('formResponse').innerHTML = `<div class="alert alert-danger">Invalid phone number. Please enter a 10-digit phone number.</div>`;
        setTimeout(function() {
            location.reload(); // Reload the page after 3 seconds
        }, 3000);
    }

    
});
