let carts = document.querySelectorAll(".add_cart");

let products = [
  {
    name: "Bò cuộn ba chỉ Mỹ",
    tag: "bòcuộnbachỉmỹ",
    image: "./img/item1.jpg",
    price: 15,
    inCart: 0,
  },
  {
    name: "Cà Chua",
    tag: "càchua",
    image: "./img/item2.jpg",
    price: 25,
    inCart: 0,
  },
  {
    name: "Xà Lách",
    tag: "xàlách",
    image: "./img/item3.jpg",
    price: 20,
    inCart: 0,
  },
  {
    name: "Nạc Thăn Bò",
    tag: "nạcthănbò",
    image: "./img/item4.jpg",
    price: 30,
    inCart: 0,
  },
];

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
  });
}

function onLoadCartNumbers() {
  let product_number = parseInt(localStorage.getItem("cartNumbers"));

  if (product_number) {
    document.getElementById("soluong").textContent = product_number;
  }
}

function cartNumbers(product, action) {
  let product_number = parseInt(localStorage.getItem("cartNumbers"));

  let cartItems = JSON.parse(localStorage.getItem("productsInCart"));
  if (action) {
    localStorage.setItem("cartNumbers", product_number - 1);
    document.getElementById("soluong").textContent = product_number - 1;
  } else if (isNaN(product_number) == false) {
    localStorage.setItem("cartNumbers", product_number + 1);
    document.getElementById("soluong").textContent = product_number + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.getElementById("soluong").textContent = 1;
  }

  setItems(product);
}

function setItems(product) {
  let cartItems = JSON.parse(localStorage.getItem("productsInCart"));

  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product,
      };
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;

    cartItems = {
      [product.tag]: product,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product, action) {
  let cartCost = localStorage.getItem("totalCost");
  if (action) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost - product.price);
  } else if (cartCost != null) {
    cartCost = parseInt(cartCost);

    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}

function displayCart() {
  let cartItems = JSON.parse(localStorage.getItem("productsInCart"));
  let cartCost = localStorage.getItem("totalCost");
  let productContainer = document.querySelector(".cart_info");
  if (cartItems && productContainer) {
    productContainer.innerHTML = "";

    Object.values(cartItems).map((item) => {
      productContainer.innerHTML += `
            <tr>
            <td class="productInfo">
                        <button><span><img src="./img/close.jpg" class="closeBTN"></span></button>
                        <!--close img-->
                        <img src="${item.image}" class="itemIMG">
                        <!--img product-->
                        <a class="productTitle">${item.name}</a>
                        <!--product title-->
                    </td>
                    <td>
                        <div class = "price">$${item.price}</div>
                    </td>
                    <td class = "quantity">
                    <ion-icon class="decrease " name="arrow-dropleft-circle"></ion-icon>
                    <span>${item.inCart}</span>
                    <ion-icon class="increase" name="arrow-dropright-circle"></ion-icon>
                    </td>
                    <td class = "subtotal">
                        <div>$${item.inCart * item.price}</div>
                    </td>         
            <tr>   
            `;
    });
  }

  Total();
  updateCartTotal();
  deleteButtons();
  coupon();
}

function updateCartTotal() {
  let decreaseButtons = document.querySelectorAll(".decrease");
  let increaseButtons = document.querySelectorAll(".increase");
  let currentQuantity = 0;
  let currentProduct = "";
  let cartItems = JSON.parse(localStorage.getItem("productsInCart"));

  for (let i = 0; i < increaseButtons.length; i++) {
    decreaseButtons[i].addEventListener("click", () => {
      currentQuantity =
        decreaseButtons[i].parentElement.querySelector("span").textContent;
      currentProduct = decreaseButtons[
        i
      ].parentElement.previousElementSibling.previousElementSibling
        .querySelector("a")
        .textContent.toLocaleLowerCase()
        .replace(/ /g, "")
        .trim();

      if (cartItems[currentProduct].inCart > 1) {
        cartItems[currentProduct].inCart -= 1;
        cartNumbers(cartItems[currentProduct], "decrease");
        totalCost(cartItems[currentProduct], "decrease");
        localStorage.setItem("productsInCart", JSON.stringify(cartItems));
        displayCart();
      }
    });

    increaseButtons[i].addEventListener("click", () => {
      currentQuantity =
        increaseButtons[i].parentElement.querySelector("span").textContent;
      currentProduct = increaseButtons[
        i
      ].parentElement.previousElementSibling.previousElementSibling
        .querySelector("a")
        .textContent.toLocaleLowerCase()
        .replace(/ /g, "")
        .trim();

      cartItems[currentProduct].inCart += 1;
      cartNumbers(cartItems[currentProduct]);
      totalCost(cartItems[currentProduct]);
      localStorage.setItem("productsInCart", JSON.stringify(cartItems));
      displayCart();
    });
  }
  Total();
}
onLoadCartNumbers();
displayCart();

function Total() {
  var cartRows = document.getElementsByClassName("subtotal");
  let sum = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var subtotal = parseFloat(cartRow.textContent.replace("$", ""));
    sum = sum + subtotal;
  }
  let total = document.querySelector(".totalWrapper");
  total.innerHTML = "";
  total.innerHTML += `
            <h2 id="cartTotals" class = "total_cart">Cart Totals</h2>
            <div>Total</div>
            <div id = "total_value">$${sum}</div>
        `;
}

function deleteButtons() {
  let deleteButtons = document.querySelectorAll(".closeBTN");
  let productNumbers = localStorage.getItem("cartNumbers");
  let cartCost = localStorage.getItem("totalCost");
  let cartItems = JSON.parse(localStorage.getItem("productsInCart"));
  let productName;

  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", () => {
      productName = deleteButtons[
        i
      ].parentElement.parentElement.nextElementSibling.nextElementSibling.textContent
        .toLocaleLowerCase()
        .replace(/ /g, "")
        .trim();
      console.log(productName);
      localStorage.setItem(
        "cartNumbers",
        productNumbers - cartItems[productName].inCart
      );
      localStorage.setItem(
        "totalCost",
        cartCost - cartItems[productName].price * cartItems[productName].inCart
      );

      delete cartItems[productName];
      localStorage.setItem("productsInCart", JSON.stringify(cartItems));

      displayCart();
      onLoadCartNumbers();
    });
  }
}

function coupon() {
  verify = document.querySelectorAll(".couponBTN");
  code = document.getElementById("Coupon");
  let cartCost = localStorage.getItem("totalCost");
  total = document.getElementById("total_value");
  verify[0].addEventListener("click", () => {
    if (code.value == "FIRST10") {
      total.innerHTML = cartCost * 0.9;
      total.innerHTML = "$" + total.innerHTML;
    } else {
      window.alert("Invalid code");
    }
  });
}
