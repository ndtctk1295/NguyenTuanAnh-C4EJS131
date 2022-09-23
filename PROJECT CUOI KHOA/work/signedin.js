let username = localStorage.getItem("email");
let display = document.getElementById("username");
display.innerHTML = username;
let search = document.getElementById("searchbar");
let items = document.getElementsByTagName("h2");
let blocks = document.getElementsByClassName("product");
search.addEventListener("keyup", function () {
  let searchvalue = search.value;
  for (let i = 0; i < items.length; i++) {
    if (
      items[i].innerHTML.toLowerCase().indexOf(searchvalue.toLowerCase()) != -1
    ) {
      blocks[i].style.display = "grid";
    } else {
      blocks[i].style.display = "none";
    }
  }
});
let cart = document.getElementById("cart");
let addcart = document.getElementsByClassName("addcart");
let numstring = document.getElementById("soluong");
let number = parseInt(numstring.innerHTML);
for (let i = 0; i < addcart.length; i++) {
  addcart[i].addEventListener("click", function () {
    number += 1;
    numstring.innerHTML = number;
  });
}
