document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");

    navToggle.addEventListener("click", function() {
        navMenu.classList.toggle("nav-open");
        document.body.classList.toggle("nav-open");
    });

    const navLinks = document.querySelectorAll(".nav-menu a");

    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navMenu.classList.remove("nav-open");
            document.body.classList.remove("nav-open");
        });
    });

    const form = document.querySelector("form");
    const successMessage = document.getElementById("success-message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Display success message
        successMessage.style.display = "block";

        // Hide the success message after 2 minutes
        setTimeout(function() {
            successMessage.style.display = "none";
        }, 120000);

        // Clear the form fields
        form.reset();
    });
});
