const username = document.getElementById("username");
const password = document.getElementById("password");
const error = document.getElementById("error");
const form = document.getElementById("form");
function checkAccount(username, password) {
  let messages = [];
  if (username.value === "" || username.value == null) {
    messages.push("Username không được để trống");
  }
  if (password.value.length <= 8) {
    messages.push("Mật khẩu phải dài hơn 8 kí tự");
  }
  return messages;
}
function display(error, messages) {
  if (messages.length > 0) {
    error.innerText = messages.join(", ");
  }
}
form.addEventListener("submit", checkAccount);
form.addEventListener("submit", display);
