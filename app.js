const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", ()=>{
    container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
});

function revealPassword(){
    var passwordInput = document.getElementById("password")
    var eyeIcon = document.querySelector(".reveal-password")
    passwordInput.type == passwordInput.type === "password" ?
    "text" : "password";
    eyeIcon.classList.toggle("fa-eye-slash")
    eyeIcon.classList.toggle("fa-eye")
}