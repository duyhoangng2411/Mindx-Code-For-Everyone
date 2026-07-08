// 1. Tính diện tích và chu vi hình chữ nhật 
let length = 1;
let width = 2;
const area = length*width
const perimeter = (length+width)*2
console.log(`Diện tích là: ${area} m2`)
console.log(`Chu vi là: ${perimeter} m`)

// 2.Viết 1 chương trình JS để chuyển
// đổi 5 (giây) nhập từ người dùng thành
// // dạng giờ phút giây

const seconds = 12345
const hours = (seconds - seconds % 3600) / 3600
const minutes = ((seconds % 3600) - (seconds % 3600) % 60) / 60;
const second = seconds - minutes * 60 - hours * 3600;
console.log(`${hours}h ${minutes}m ${second}s`)

// 3. Viết một chương trình JS để tính lũy
// // thừa của một số nhập từ người dùng.

const luyThua = 2
const coSo = 5
// c1 
const ketQua = Math.pow(coSo, luyThua)
console.log("🚀 ~ ketQua:", ketQua)
// c2 
const pow = coSo**luyThua
console.log("🚀 ~ pow:", pow)

// Math.sqrt => căn bậc 2

// 4. Tính tổng trung bình cộng của 3 số bất kỳ 
const number1 = 9;
const number2 = 8;
const number3 = 7;
const avg = (number1 + number2 + number3) / 3
console.log("🚀 ~ Trung bình cộng là:", avg)

// 5. Viết 1 ct JS để tính
// khoảng cách giữa 2 điểm trong không gian 20.

const x1 = 2;
const y1 = 3;
const x2 = 5;
const y2 = 7;

const distance = Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2))
console.log("🚀 ~ distance:", distance)

// 6. Viết 1 ct JS để ss 3 số nhập từ người dùng và trả về
// true nếu số lớn nhất là số thứ nhât, ngược lại trở về
// false

// c1 
const isMax = (number1 > number2) && (number1 > number3);
console.log("🚀 ~ isMax:", isMax)

// c2 
// const isMaxnotVer = (number1 <= number2) || (number1 <= number3)
// console.log("🚀 ~ isMaxnotVer:", isMaxnotVer)

// 7.Viết 1 ct JS để so sánh hai chuỗi nhập từ
// người dùng và trả về true nếu chương trình
// giống nhau, ngược lại trả về false.
const str = "Tôi là Duy"
const compareStr = "Tôi là Duy"
// Toán tử 3 ngôi (L7) 
const compareResult = str == compareStr ? console.log("Bằng nhau") : console.log("Không bằng nhau");

// 8. Viết 1 ct JS kiểm tra số dương nhập vào bàn phím. 
// const soDuong = 10;
// C1
// if (soDuong > 0){
//     console.log("Đây là số dương");
// }
// else{
//     console.log("Đây không phải là số dương");
// }

// C2
// soDuong ? console.log("Số dương") : console.log("Số không dương");

// 9. Viết 1 ct JS kiểm tra năm nhuận
const nam = 2026;
if (nam % 400 == 0){
    console.log("Đây là năm nhuận");
}
else if(nam % 4 == 0 && nam % 100 == 0){
    console.log("Đây là năm nhuận");
}
else{
    console.log("Đây không phải là năm nhuận");
}

// 10. Viết 1 ct JS để so sánh 2 thời gian (giờ và
//phút) nhập từ người dùng và về true nếu thời gian
//thứ nhất muộn hơn thời gian thứ 2.
const hour1 = 23
const minute1 = 30
//23:30
const hour2 = 20
const minutes2 = 30
//20:30
const checkGreaterTime = hour1 > hour2 ? true : minute1 > minutes2 ? true : false
console.log("🚀 ~ checkGreaterTime:", checkGreaterTime)
