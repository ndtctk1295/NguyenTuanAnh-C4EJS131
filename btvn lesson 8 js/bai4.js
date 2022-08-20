// // 1. tạo máy tính cơ bản:
// // máy tính cơ bản

// // phép tinh
// const operator = prompt('Enter operator ( either +, -, * or / ): ');

// // nhập đầu vào 2 số
// let number1 = parseFloat(prompt('số thứ nhất'))
// let number2 = parseFloat(prompt('số thứ hai'))
// let result;

// // using if...else if... else or switch
// if(operator == '+'){
//     result = number1 + number2;
// }else if (operator == '-'){
//     result = number1 - number2
// }else if (operator == '*'){
//     result = number1 * number2
// }else if (operator == '/'){
//     result = number1 / number2
// }

// // display the result
// console.log(`${number1} ${operator} ${number2} = ${result}`);

// 2. Viết chương trình tìm số nguyên tố
// chương trình tìm số nguyên tố

// nhập số cần nhập
 const number =   parseInt(prompt("Enter a positive number: "));
let isPrime = true;

// number less than 2
if( number < 2){
         isPrime = false;
}
let i = 2;
    while(i < number){
        if( number % i == 0 ) {
            isPrime = false;
            break; 
        }
        i++;
    }
if(isPrime == true){
    console.log('số nguyên tố')
}else{
    console.log('không phải số nguyên tố')
}
