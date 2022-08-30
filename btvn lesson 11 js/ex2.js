
var x = 0;
document.getElementById("btn").innerHTML = x;
document.getElementById("btn").onclick = function(){
     x++;
     document.getElementById("btn").innerHTML = x;
}


