let signin = document.getElementById("signin");
let storedEmail = localStorage.getItem("email");
let storedPass = localStorage.getItem("password");
signin.addEventListener("click", function () {
  let emails = document.getElementById("emails").value;
  let passwords = document.getElementById("passwords").value;
  if (storedEmail == emails && storedPass == passwords) {
    let path = document.getElementById("path");
    path.href = "menu.html";
  }
});
