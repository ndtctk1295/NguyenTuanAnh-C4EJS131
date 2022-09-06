const search = document.getElementById("search");
const list = document.querySelector("ul");
const form = document.forms[0];
const addForm = document.getElementsByClassName("addbtn")[0];
const addbook = document.getElementById("newbook");
// xây function cho delete:
list.addEventListener("click", function (e) {
  if (e.target.className === "delbtn") {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});
// xây function cho add:

addForm.addEventListener("click", function (e) {
  e.preventDefault();
  const li = document.createElement("li");
  const bookName = document.createElement("div");
  const delbtn = document.createElement("button");
  const value = form.querySelector('input[type="text"]').value;

  bookName.textContent = value;
  delbtn.textContent = "delete";

  bookName.classList.add("libraryunit");
  delbtn.classList.add("delbtn");

  li.appendChild(bookName);
  li.appendChild(delbtn);
  list.appendChild(li);
});
