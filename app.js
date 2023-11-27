let alerts = document.getElementById("bell");
let alertBox = document.getElementById("alerts");
let profileMenu = document.getElementById("profile");
let user = document.getElementById("user");
let popUpmenu = document.getElementById("userTab");

alerts.addEventListener("click", () => {
    if (alertBox.style.display === "block") {
        alertBox.style.display = "none";
    } else {
        alertBox.style.display = "block";
        profileMenu.style.display = "none";
    }
});

user.addEventListener("click", () => {
    if (profileMenu.style.display === "block") {
        profileMenu.style.display = "none";
    } else {
        profileMenu.style.display = "block";
        alertBox.style.display = "none";
    }
});