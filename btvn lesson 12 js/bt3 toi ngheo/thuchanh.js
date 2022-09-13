const button1 = document.getElementById("change-my-life");
const button2 = document.getElementById("nope");
const changeMyLife = document.getElementById("change-my-life");
const nope = document.getElementById("nope");
// const myText = document.getElementById("text");

// function giàu:
function changeTextRich() {
  const myText = document.getElementsByTagName("h1")[0];
  myText.innerHTML = "Tôi giàu sau khi học lập trình tại mindX";
}
changeMyLife.addEventListener("click", changeTextRich);

//function không nope:
function redAlert() {
  button2.style.backgroundColor = "red";
  button2.style.color = "white";
}

function abort() {
  button2.style.backgroundColor = "white";
  button2.style.color = "black";
}

function poor() {
  // Cách 1:
  if (confirm("Bạn có chắc chắn không muốn thay đổi cuộc đời bạn?") == true) {
    const myText = document.getElementsByTagName("h1")[0];
    myText.innerHTML = "Tôi rất tiếc";
  } else {
    const myText = document.getElementsByTagName("h1")[0];
    myText.innerHTML = "Tôi nghèo";
  }
}

nope.addEventListener("mousemove", redAlert);
nope.addEventListener("mouseleave", abort);
nope.addEventListener("click", poor);
