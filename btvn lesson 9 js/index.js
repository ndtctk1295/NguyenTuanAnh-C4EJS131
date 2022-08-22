// Ex1:
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Did parents allow you?');
//     }

// TH1: dùng '?' operator.
// function checkAge(age){
//   return (age >  18) ? true : 'Did parents allow you?';
// }
// console.log(checkAge(19));
// console.log(checkAge(17));

// TH2: dùng or ||.
let age = parseInt(prompt('Nhập số tuổi của bạn:'))
console.log(age > 18 || 'Did parents allow you?');


  // Ex2: 2.  Viết hàm min (a, b) trả về gía trị nhỏ nhất trong hai số a và b.
  // let a = parseFloat(prompt('nhập số đầu tiên:'));
  // let b = parseFloat(prompt('nhập số thứ hai:'));
  
  // function min(a, b){
  //   if(a > b){
      
  //     return b;
      
  //   }else if(a < b){
      
  //     return a;
      
  //   }else{
  //     return a;
      
  //   }
  // }
  // alert('số bé nhất là:', min(a,b));



  // Ex3:
  
  

  // let ask = (question, yes, no) =>{ if (confirm(question)) yes()
  // else no();}

  // ask(
  //   "Do you agree?",
  //   function() { alert("You agreed."); },
  //   function() { alert("You canceled the execution."); }
  // );
    
// Ex4:
// const username = prompt('Tên đăng nhập:');
// const password = prompt('Mật khẩu');
// // let checking = null;

//   if (username == "Admin"){
//     if(password == 'Mindx'){
//       // checking = true;
//       // return checking
//       alert('Chào mừng!')
//     }
//     else if(password != 'Mindx'){
//       alert('Mật khẩu sai!')
//     }
//     // else if(password == ''){
//     //   alert('Đã hủy')
//     // }
//   }
//   else if (username != 'Admin'){
//     if(typeof username === 'string' && username.length === 0){
//       alert('Canceled')
//     }else if (typeof password === 'string'  && password.length === 0){
//       alert('Canceled')
//     }
//     else{ alert('Tôi không biết bạn')}
//   }
//   else if(typeof username === 'string' && username.length === 0 || typeof password === 'string'  || password.length === 0 ){
//     alert('Canceled')
//   }


   

