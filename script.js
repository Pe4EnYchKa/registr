var savedUsername = sessionStorage.getItem("savedUsername");
var savedEmail = sessionStorage.getItem("savedEmail");
    
// Используем сохраненные данные как нам угодно
document.getElementById("username").innerText += savedUsername;
document.getElementById("email").innerText += savedEmail;