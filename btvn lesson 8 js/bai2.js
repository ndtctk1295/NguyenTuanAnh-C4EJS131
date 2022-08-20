2a. Coersion - Truthy & Falsy
var a = 10; // 10
var b = Number(a); // 10
var c = a * 1; // 10

console.log(a);
console.log(b);
console.log(c);
console.log(typeof(c));
console.log(typeof(b));
// -> cả b và c đều bằng nhau cả và giá trị lẫn kiểu dữ liệu (cùng là number)
// -> coersrion là chuyển đổi kiểu dữ liệu
// 2b. Khi một giá trị không phải boolean cần chuyển sang boolean gì chuyện gì xảy ra? v/d dưới sẽ log ra như nào?
var a = 10;
var b = '';

if (a) {
   console.log('a is truthy');
}

if (b) {
   console.log('b is truthy');
}
// khi một giá trị không phải boolean chuyển về boolean thì tất cả những giá trị false, null, undefined, NaN, 0 (number), empty string (VD: "") sẽ được trả về false
// tất cả những giá trị number (không phải 0), true, string (không phải empty string) sẽ được trả về true.
// log ở đây sẽ trả về 'a is truthy' bởi vì ở đây a là number nên sẽ được chuyển thành true -> lệnh console.log('a is truthy') sẽ được thực hiện
// lệnh console.log('b is truthy') không được thực hiện vì b ở đây là 1 empty string, nó sẽ tự ép về false -> không thực hiện được
