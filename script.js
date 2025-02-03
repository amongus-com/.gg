// Select elements
const accountSettings = document.getElementById("accountSettings");
const changeUsernameBtn = document.getElementById("changeUsername");
const changePasswordBtn = document.getElementById("changePassword");

// Show account settings if logged in
function updateLoginStatus() {
    const user = JSON.parse(localStorage.getItem("loggedIn"));

    if (user) {
        loginButton.style.display = "none";
        logoutButton.style.display = "inline-block";
        accountSettings.style.display = "block"; // Show account settings

        if (user.role === "admin") {
            adminPanel.style.display = "block";
        } else {
            adminPanel.style.display = "none";
        }
    } else {
        loginButton.style.display = "inline-block";
        logoutButton.style.display = "none";
        adminPanel.style.display = "none";
        accountSettings.style.display = "none"; // Hide settings when logged out
    }
}

// Change Username
changeUsernameBtn.addEventListener("click", () => {
    const newUsername = document.getElementById("newUsername").value;
    const user = JSON.parse(localStorage.getItem("loggedIn"));

    if (newUsername) {
        localStorage.removeItem(user.username); // Remove old username entry
        user.username = newUsername; // Update username
        localStorage.setItem(newUsername, JSON.stringify(user)); // Store under new name
        localStorage.setItem("loggedIn", JSON.stringify(user)); // Update session
        alert("Username updated successfully!");
        updateLoginStatus();
    } else {
        alert("Enter a valid username.");
    }
});

// Change Password
changePasswordBtn.addEventListener("click", () => {
    const newPassword = document.getElementById("newPassword").value;
    const user = JSON.parse(localStorage.getItem("loggedIn"));

    if (newPassword) {
        user.password = newPassword;
        localStorage.setItem(user.username, JSON.stringify(user)); // Save new password
        localStorage.setItem("loggedIn", JSON.stringify(user));
        alert("Password updated successfully!");
    } else {
        alert("Enter a valid password.");
    }
});

// Run on page load
updateLoginStatus();
