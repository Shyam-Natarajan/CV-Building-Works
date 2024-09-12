document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault()
    var form = document.getElementById("contactForm");
    let name = document.getElementById("name").value.trim();

    const phoneInput = document.getElementById('number').value.trim();
    const phonePattern = /^[0-9]{10}$/;

    if (phonePattern.test(phoneInput)) {

        fetch(form.action, {
            method : "POST",
            body: new FormData(document.getElementById("contactForm")),
        }).then(
            response => response.json()
        )

        document.getElementById("formResponse").innerHTML = `<div class = " alert alert-success"> Thank you, ${name}! Your request has been sent successfully.</div>`;
    } else {
        document.getElementById('formResponse').innerHTML = `<div class="alert alert-danger">Invalid phone number. Please enter a 10-digit phone number.</div>`;
        setTimeout(function () {
            location.reload(); // Reload the page after 3 seconds
        }, 3000);
    }


});
