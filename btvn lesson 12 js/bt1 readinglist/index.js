const search = document.getElementById("search");
const list = document.querySelector("ul");
const form = document.forms[0];
const addForm = document.getElementsByClassName("addbtn")[0];
const addbook = document.getElementById("newbook");
const bookTitle = document.getElementsByClassName("libraryunit");
const bookName = document.getElementsByClassName("bookName");
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

  // bookName.classList.add("library");
  bookName.classList.add("bookName");
  delbtn.classList.add("delbtn");
  li.classList.add("libraryunit");

  li.appendChild(bookName);
  li.appendChild(delbtn);
  list.appendChild(li);
});

// convert bookTitle sang array:
let bookArr = Object.keys(bookTitle).map(function (key) {
  return bookTitle[key];
});
// xử lí data để làm tính năng search:

// xây function cho search:
let books = [];
books = bookArr.map((book) => {
  return book.innerText;
});
search.addEventListener("input", function (event) {
  const inputValue = event.target.value.toLowerCase();
  books.forEach((books) => {
    const isMatch = books.includes(inputValue);
    books.element.classList.toggle("libraryunit", !isMatch);
  });
});

// const isMatch = books.li.bookTitle.innerText.includes(inputValue);

console.log(bookArr);
console.log(bookTitle);
console.log(books);
// // xây function cho search:
// search.addEventListener("keyup", (e) => {
//   console.log(e.target.value);
// });
