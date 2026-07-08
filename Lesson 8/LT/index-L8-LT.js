// 1. Định nghĩa mảng 
let names = ["Adam","Bob","Charlie","David","Eve"]

// index        0     1       2        3      4
// Chỉ số bắt đầu từ 0 => length - 1
//Chiều dài mảng (length): Số phần tử có trong mảng => 5
console.log("🚀 ~ names:", names)

//Truy xuất phần tử
// const bob = names[1]
const eve = names[4]

//Destructuring
// const [adam, bob,charlie, ...rest] = names
// console.log("🚀 ~ charlie:", charlie)
// console.log("🚀 ~ rest:", rest)
// console.log("🚀 ~ adam:", adam)
// console.log("🚀 ~ bob:", bob)

//Gán giá trị (thay đổi vị trí)
names[2] = "Ethan Hunt"
names[0] = "Jerry"
console.log("🚀 ~ names after edited:", names)

//Kết hợp vòng lặp
//Láy chiều dài của mảng
console.log("array.length", names.length);
const lengthOfNames = names.length
const lastIndex = lengthOfNames - 1

for(let index = 0; index < lengthOfNames; index++){
    const item = names[index]
    // console.log("🚀 ~ index:", index)
    // console.log("🚀 ~ item:", item)
}

//Thêm/Chèn phần tử vào mảng
// thực hiện dịch chuyển từ vị trí cuối cùng của mảng tới vị trí cần chèn
const insertIndex = 2
// i => 5,4,3,2
//Bước 1: dịch các phần từ bển phải vị trí cần chèn về cuối mảng
for (let i = lastIndex; i >= insertIndex; i--) {
    names[i + 1] = names[i];
    
}
//Bước 2: Gán giá trị mới cho vị trí cừa chèn/thêm vị trí bấy kỳ
names[insertIndex] = "Tom"


//Thêm phần tử vào cuối mảng
names[names.length] = "Jack"
console.log("🚀 ~ names:", names)

//xóa phần tử trong mảng
const deleteIndex = 2;

names[deleteIndex] = 0
for (let i = deleteIndex; i < names.length - 1; i++) {
  names[i] = names[i + 1]; // Dịch chuyển các phần tử về phía trước
}

//giảm kích thước mảng
names.length = names.length - 1
console.log("🚀 ~ names:", names)

//Tìm kiếm
const searchName = "Lan"
const className = ["Hoa","Thanh","Lan","Trường","Thắng"]

for (let index = 0; index < className.length; index++) {
    const element = className[index];
    if (element === searchName){
        console.log(`Điểm danh có ${element} trong lớp!!!!`);
    }
    console.log(`Điểm danh có ${element}, không phải là Lan!!!!`);
}