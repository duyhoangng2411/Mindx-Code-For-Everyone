// let a = 10
// // nhấp vào biến rồi Ctrl + Alt + L 
// console.log("🚀 ~ a:", a)

// let isRaining = false;
// // Khi trời mưa 
// if (isRaining) {
//     console.log("Ngoài trời đang mưa rất to" + "Quyết định không đi chơi");
// } 
// // Khi trời không mưa
// else {
//     console.log('Trời đang không mưa, có thể đi chơi được rồi!');
// }

// let isRaining = true;
// let isSunny = false;
// // Khi trời mưa 
// if (isRaining) {
//     console.log("Ngoài trời đang mưa rất to" + " Quyết định không đi chơi");
// } else if (!isRaining && isSunny) { // !isRaining: không mưa
//     console.log("Ngoài trời đang không mưa mà nắng to, vẫn ở nhà");
// }
// // Khi trời không mưa
// else {
//     console.log('Trời đang không mưa và không nắng, có thể đi chơi được rồi!');
// }

// // Switch Case 

// // let day = 1;
// // switch (day) {
// //     case 0:
// //         console.log("Chủ Nhật");
// //         break;
// //     case 1:
// //         console.log("Thứ Hai");
// //         break;
// //     default:
// //         console.log("Thứ nào không biết luôn");
// }

// Toán tử 3 ngôi 

// const age = 10;
// const result = age >= 18 ? "You are an adult" : "You are a minor";
// console.log(result);

// const totNghiep = false;
// const strShowResult = totNghiep ? "Bạn đã tốt nghiệp" : "Bạn chưa tốt nghiệp";
// console.log(strShowResult);

// Vòng lặp 

// for(let i = 0 ; i < 10; i+=1){
//     console.log(`${i} Anh xin lỗi Em`);
// }

// let count = 0;
// while(count < 5) {
//     console.log(`${count} < 5`);
//     count++;
// }

// Break

// for (let i = 0 ; i < 10; i+=1){
//     if (i == 5) {
//         console.log("Kết thúc vòng lặp");
//         break;
//     }
//     console.log(`${i} Anh xin lỗi Em`);
// }

//  Continue

for (let i = 1 ; i < 10; i++){
    if (i == 5) {
        console.log("Bỏ qua khi i == 5!!!!");
        continue;
    }
    console.log(`${i} Anh xin lỗi Em`);
}
