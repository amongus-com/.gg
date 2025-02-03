document.getElementById("darkModeToggle").addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
});

const loginModal = document.getElementById("loginModal");
const signupModal = document.getElementById("signupModal");
const loginButton = document.getElementById("loginButton");
const logoutButton = document.getElementById("logoutButton");
const adminPanel = document.getElementById("adminPanel");
const accountSettings = document.getElementById("accountSettings");
const closeButtons = document.querySelectorAll(".close");

const adminAccount = {
    username: "nottylerxd",
    password: "owner.exe5252",
    role: "admin"
};

loginButton.addEventListener("click", () => loginModal.style.display = "block");

document.getElementById("showSignup").addEventListener("click", () => {
    loginModal.style.display = "none";
    signupModal.style.display = "block";
});

closeButtons.forEach(btn => btn.addEventListener("click", () => {
    loginModal.style.display = "none";
    signupModal.style.display = "none";
}));

document.getElementById("signupSubmit").addEventListener("click", () => {
    const username = document.getElementById("signupUsername").value;
    const password = document.getElementById("signupPassword").value;

    if (username && password) {
        localStorage.setItem(username, JSON.stringify({ username, password, role: "user" }));
        alert("Account created!");
        signupModal.style.display = "none";
    } else {
        alert("Enter username and password.");
    }
});

document.getElementById("loginSubmit").addEventListener("click", () => {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
    let storedUser = JSON.parse(localStorage.getItem(username));

    if (username === adminAccount.username && password === adminAccount.password) {
        storedUser = adminAccount;
    }

    if (storedUser && password === storedUser.password) {
        alert(`Welcome, ${username}!`);
        localStorage.setItem("loggedIn", JSON.stringify(storedUser));
        loginModal.style.display = "none";
        updateLoginStatus();
    } else {
        alert("Invalid login.");
    }
});

logoutButton.addEventListener("click", () => {
    localStorage.removeItem("loggedIn");
    updateLoginStatus();
});

function updateLoginStatus() {
    const user = JSON.parse(localStorage.getItem("loggedIn"));

    loginButton.style.display = user ? "none" : "inline-block";
    logoutButton.style.display = user ? "inline-block" : "none";
    adminPanel.style.display = user?.role === "admin" ? "block" : "none";
    accountSettings.style.display = user ? "block" : "none";
}

updateLoginStatus();
