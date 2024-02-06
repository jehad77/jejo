const { name } = require("ejs");

const name = document.getElementById("name");
const email = document.getElementById("email");
const text = document.getElementById("text");
const form = document.querySelector("form");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("SUBMIT", (e) => {
    const errorMessage = [];

    if(name.value.trim() === ""){
        errorMessage.push("Username required")
    }

    if(email.value.length <45){
        errorMessage.push("Email must be at least 45 characters")
    }

    if(text.value.length >5){
        errorMessage.push("text must me at most 500 characters ")
    }

    if(errors.length > 0){
        e.preventDefault();
        errorMessage.toggleAttribute('hidden');
        errorMessage.innerHTML = errors.join(', ');
    }
})
$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on("click", function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                800,
                function () {
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                }
            );
        } 
    });
});


