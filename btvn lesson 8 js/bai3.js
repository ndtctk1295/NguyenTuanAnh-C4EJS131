// 3a. Kết quả trả về true hay false?
let a = "mindX";
let b = '';

if (a || b) {
	console.log("hello")
}
// kết quả ở đây là true vì điều kiện là a HOẶC b mà a là true, b là false nên nó sẽ tự động lấy kết quả true, dẫn đến log ở đây được thực hiện


// 3b.Kết quả trả về true hay false?
let a = "mindX";
let b = '';

if (a && true && !b) {
	console.log("hello")
}
// kết quả ở đây cũng là true vì điều kiện là a và true và KHÔNG PHẢI b,
// a là string -> true
// true -> true
// b là empty string -> false nhưng ở đây là !b (không phải b) -> không phải false -> true

// 3c. Tạo a = -1 và b = 1, tạo một câu điều kiện if sử dụng toán tử logic && để kết quả trả về true.
let a = -1;
let b = 1;
if (a && b){
    console.log('true')
}
// 3.d Tạo biến number, cho phép người dùng nhập number bằng lệnh prompt(). Viết chương trình kiểm tra xem liệu số người dùng nhập chia cho 3 có phải là số dư hay không. Nếu là số dư thì trả về console kết quả là number không chia hết cho 3 và dư ..., nếu chia hết thì trả về kết quả phép tính.

let number = parseInt(prompt());
if (number % 3 == 0){
    console.log('kết quả: ', number / 3 );
}else{
    console.log('number không chia hết cho 3 và dư: ', number % 3);
}
