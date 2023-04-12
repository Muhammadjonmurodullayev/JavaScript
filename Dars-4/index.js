// let res=a.toString()
// for(i of res){
//     // let str=""
//     switch(i){
//         case 1 : console.log("bir");
//         break;
//         default:console.log("Bir");
//     }
//     switch(i){
//         case 2 :console.log("ikki");
//         break;
//         default:console.log("Ikki");
//     }
//     switch(i){
//         case 3 :console.log("uch");
//         break;
//         default:console.log("Uch");
//     }
//     switch(i){
//         case 4 :console.log("to'rt");
//         break;
//         default:console.log("To'rt");
//     }
//     switch(i){
//         case 5 :console.log("Besh");
//         break;
//         default:console.log("Besh");
//     }
//     // console.log(str);
// }
// console.log(res);
// let a = 12345
// ==============================================================================================================================================
// let browser = "Chrome"
// switch (browser) {
//     case "Edge": console.log("You've got the Edge ! "); break;
//     case "Chrome":
//     case "Firefox":
//     case "Safari":
//     case  "Opera":console.log("Okey we support these browsers too");break;
//     default:console.log("We hope that this page looks of!");
// }
// ==============================================================================================================================================
// let a=3
// if(a==0){
//     console.log(0);
// }if(a==1){
//     console.log(1);
// }if(a==2||a==3){
//     console.log('2.3');
// }
// ==============================================================================================================================================
// for (let i = 1; i <= 10; i++) {
//     console.log(`Number ${i}!`);
// }
// ==============================================================================================================================================
//     for (let i = 1; i <= 10; i++) {
//         if ((i%2&&i/i)) {
//         console.log(i);
//     }
// }
// tup son : 3, 5, 7
// ==============================================================================================================================================
// for (i of b) {
//     let res = ""
//     switch (i) {
//         case "1": res += "Bir"
//         case "2": res += " Ikki"
//         case "3": res += " Uch"
//         case "4": res += " To'rt"
//         case "5": res += " Besh"
//         case "6": res += " Olti"
//         console.log(res);

//     }
// }

// juft son : 2, 4, 6, 8
// ikkiga bo'linadi
// toq son : 1, 3, 5, 7, 9
let a = 12345
let b = a.toString()
let res = ""
for (let i = 0; i < b.length; i++) {
    switch (b[i]) {
        case "1": res += "Bir"; break
        case "2": res += " Ikki"; break
        case "3": res += " Uch"; break
        case "4": res += " To'rt"; break
        case "6": res += " Olti"; break
        case "5": res += " Besh"; break
        case "7": res += " Yetti"; break
        case "8": res += " Sakkiz"; break
        case "9": res += " To'qqiz"; break
        case "9": res += " To'qqiz"; break
        default: res+="Bunaqa malumot mavjud emas";
    }
}
console.log(res);










