
document.addEventListener("DOMContentLoaded", () => {
    
    if (localStorage.getItem("dark-mode") === "enabled"){
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
});

function openContactForm(){
    var contactFormWindow = document.getElementById("contact-form");
    contactFormWindow.style.display = "block";
}
function closeContactForm(){
    var contactFormWindow = document.getElementById("contact-form");
    contactFormWindow.style.display = "none";
}

function toggleDarkMode(){
    if (document.body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("dark-mode","disabled");
    } else {
        document.body.classList.add("dark-mode");
        localStorage.setItem("dark-mode","enabled");
    }
}