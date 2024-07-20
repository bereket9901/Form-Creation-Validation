
document.addEventListener(
    "DOMContentLoaded", function () {
        const form = document.getElementById("registration-form");
        const feedbackDiv = document.getElementById("form-feedback");
        form.addEventListener('click', function (event) {
            event.preventDefault();
            const username = document.getElementById("username").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();

            const isValid = true;
            var messages = [];

            if (username.length < 3) {

                isValid = false;
                messages.push("Username must be at least 3 characters long");
            }
            if (!(email.includes(".") && username.email.includes("@"))) {
                isValid = false;
                messages.push("Email must be a valid email address");
            }
            if (password.length < 8) {

                isValid = false;
                messages.push("Password must be at least 8 character")
            }
            feedbackDiv.style.display = "block"
            if (isValid) {
                feedbackDiv.textContent = "Registration successful";
                feedbackDiv.style.color = "#28a745"
            }
            if (!isValid) {
                feedbackDiv.innerHTML = messages.join(<br />);
                feedbackDiv.style.color = "#dc3545"
            }
        })
    }
)
