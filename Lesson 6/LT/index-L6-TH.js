// console.log("Hello World!");

// // Bien 
// x = 10
// y = 50
// c = 60
// KetQua = x + y + c
// console.log(KetQua)

// // Khai báo biến với let 
// // let: không được trùng tên biến, được gán lại giá trị 
// let a = 15
// a = 20
// a = 30
// console.log(a)

// // Khai báo biến với const 
// // const: không được trùng tên biến 
// const b = 10
// console.log(b)

// // Kiểu dữ liệu
// // string 
// let name = "Nguyen Hoang Duy"
// let address = "Sai Gon"
// console.log(name)
// console.log(address)

// // check kiểu dữ liệu 
// console.log(typeof name)
// console.log(typeof address)

// // Number 
// let age = 28
// console.log(age)
// console.log(typeof age)

// // Boolean 
// let male = true
// console.log(male)
// console.log(typeof male)

// // Null: không nhận giá trị
// let nulVal = null
// console.log(nulVal)
// console.log(typeof nulVal)

// let underfinedVal
// console.log(underfinedVal)
// console.log(typeof underfinedVal)

// Toán từ số học 
// let x = 20
// let y = 23

// // const tong = x + y

// // const tru = x - y

// // const nhan = x * y

// // const chia = x / y 

// // const phanDu = y % x 

// // console.log(tong)
// // console.log(tru)
// // console.log(nhan)
// // console.log(chia)
// // console.log(phanDu)

// // x += y
// // x = x + y 

// x += 10
// // x = x + 10

// console.log(x)

// Nối chuỗi 
const name = "Nguyễn Hoàng Duy"
const welcome = 'Chào mừng bạn tới nhà tôi!'

const print = "Xin chào: " + name +" "+ welcome // Nguyễn Hoàng Duy
// dùng + khi có 1 tới 2 biến  
console.log(print)

// literal template 
const literaString = `Xin chào ${name} ${welcome} cung nhau hoc tot nhe`
console.log(literaString)

// Toán tử so sánh 
const a = 10
const b = 10

const sosanh = a == b
// console.log(sosanh);

// Toán tử logic 
const money = true
const handsome = false

const person = money || handsome
console.log(person)

// &&: đạt cả 2 là true
// ||: chỉ 1 trong 2 là true 

