document.querySelector(".next-btn").addEventListener("click", function(event) {
    event.preventDefault();
    let email = document.querySelector("input[name='email']").value;

    if (email) {
        alert("Redirecting to password input for: " + email);
    } else {
        alert("Please enter a valid email.");
    }
});