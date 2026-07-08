// 1. Sử dụng vòng lặp, tính tổng các chữ số từ 1 đến 100
// 1+2+3+4+..+100
// let sum = 0;
// for(let i = 1; i <= 100; i++){
//     sum +=1 // sum = sum + 1
//     // console.log(`🚀 sum = ${sum}, i = ${i}:`)
// }

// // 2. Các số từ 0 đến 100, in ra các số chia hết cho 3 và 5. 

// // c1 
// for (let index = 0; index < 100; index++) {
//     if(index % 5 === 0 && index % 3 === 0){
//         console.log(`Số chia hết cho 5 và 3 là`, index)
//     }
// }

// // c2
// for (let index = 0; index < 100; index++) {
//     if(index % (3*5) === 0){
//         console.log(`Số chia hết cho 5 và 3 là`, index)
//     }
// }

// // c3
// for (let index = 0; index < 100; index += 15) {
//         console.log(`Số chia hết cho 5 và 3 là`, index)
// }

// 3.Tính giai thừa của một số nguyên bất kỳ.
// let giaiThua = 1;
// const soNguyen = 10;
// for (let item = 1; item <= soNguyen; item++) {
//     console.log(` giaiThua = ${giaiThua} * ${item} = ${giaiThua*item}`)
//     giaiThua = giaiThua * item;
// }
// console.log("🚀 ~ giaiThua:", giaiThua)

// 4. Sử dụng vòng lặp for để in ra bảng cửu chương từ 2 đén 9.
// for(let i = 1; i <= 9 ; i++){
//         //Các bảng nhân
//     console.log(`Bảng nhân ${i}`);
//     for(let j = 1; j <= 10; j++) {
//         //Các phép tính
//         console.log(`${i} x ${j} = ${i * j}`);
//     }
// }

// 5. Hãy chuyển một số nguyên dương sang dạng
// nhị phân (gồm các chữ số 0 và 1).

// 35/2=17 (1)
// 17/2=8 (1)
// 8/2=4 (0)
// 4/2=2 (0)
// 2/2=1 (0)
// 1/2=0 (1)

// let soNguyen = 35;
// let nhiPhan = ""
// while(soNguyen > 0){
//     let soDu = soNguyen % 2
//     nhiPhan+=soDu
//     soNguyen = Math.floor(soNguyen / 2)
// }
// console.log("🚀 ~ nhiPhan:", nhiPhan.split("").reverse().join(``))

// 6. Sử dụng vòng lặp, thực hiện tính phép tính sau với n là số nguyên:
// const n = 5;
// let sqrt = 0
// for(let i = 1; i <= n; i++){
//     console.log(`sqrt = Math.sqrt(${i} + ${sqrt}):`, Math.sqrt(i + sqrt));
//     sqrt = Math.sqrt(i + sqrt)
// }
// console.log("🚀 ~ sqrt:", sqrt)

// 7. 
// const n = 5;
// let sqrt = 0
// for(let i = n; i >= 1; i--){ // bước lặp từ 5 tới 1
//     console.log(`sqrt = Math.sqrt(${i} + ${sqrt}):`, Math.sqrt(i + sqrt));
//     sqrt = Math.sqrt(i + sqrt)
// }
// console.log("🚀 ~ sqrt:", sqrt)

// 8. 