let signup = document.getElementById("signup")
let card = document.getElementById("card")
signup.addEventListener("click", function() {
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    localStorage.setItem("email", email)
    localStorage.setItem("password", password)
    card.style.display = "block";
})