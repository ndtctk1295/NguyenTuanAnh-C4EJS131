// // HW1: Cho đoạn code sau, sau đó biểu diễn các cách để truy cập được các thuộc tính bên trong object đó
// let person = {
//     name:       'Bob',
//     occupation: 'web developer',
//     hobbies:    'painting',
//   };
// // truy cập vào name:
// console.log(person.name);
// console.log(person['name']);
// let {occupation} = person;
// console.log(occupation);
//HW 2:Cho object obj, hãy tạo một array chứa key của tất cả các property của obj và đều viết hoa
// let obj = {
//     b: 2,
//     a: 1,
//     c: 3,
//   };
//   let array = Object.keys(obj);
//   let completeArr = array.map(array => array.toUpperCase());
//   console.log(completeArr);
  //HW 4:
  let obj = {
    foo: { a: "hello", b: "world" },
    bar: ["example", "mem", null, { xyz: 6 }, 88],
    qux: [4, 8, 12]
  };
// cách 1:
  obj.bar[3].xyz = 606
  console.log(obj.bar[3]); 
// cách 2:



