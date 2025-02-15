//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const checkbox = document.getElementById("checkbox");
    const submitButton = document.getElementById("submit");
    const existingUserButton = document.getElementById("existing");

    // Check if credentials exist in localStorage
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
        existingUserButton.style.display = "block"; // Show "Login as existing user" button
    }

    // Handle form submission
    document.getElementById("login-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        const username = usernameInput.value;
        const password = passwordInput.value;

        alert(`Logged in as ${username}`);

        if (checkbox.checked) {
            // Store credentials in localStorage
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
        } else {
            // Remove credentials if unchecked
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }
        
        // Refresh page to check stored credentials
        location.reload();
    });

    // Handle existing user login
    existingUserButton.addEventListener("click", function () {
        alert(`Logged in as ${savedUsername}`);
    });
});
