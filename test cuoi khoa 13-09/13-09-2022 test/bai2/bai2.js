function numberOneTriangle(num) {
  let str = "";
  for (let i = 1; i <= Number(num); i++) {
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    str += "\n";
  }
  console.log(str);
}
numberOneTriangle(8);
