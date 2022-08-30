let button = document.createElement("button");
button.id = "button"
button.innerHTML = "Change Color";
button.style.backgroundColor = "pink";
document.body.appendChild(button);
// document.body.style.backgroundColor = "red";
button.onclick = function(){
    const random = Math.floor(Math.random()*16777215);
    document.body.style.backgroundColor = "#" + random;
    body.innerHTML = '#' + random;
}