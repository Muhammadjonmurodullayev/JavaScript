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
// let a = 198
// let b = a.toString()
// let res = ""
// for (let i = 0; i < b.length; i++) {
//     switch (b[i]) {
//         case "1": res += "Bir"; break
//         case "2": res += " Ikki"; break
//         case "3": res += " Uch"; break
//         case "4": res += " To'rt"; break
//         case "6": res += " Olti"; break
//         case "5": res += " Besh"; break
//         case "7": res += " Yetti"; break
//         case "8": res += " Sakkiz"; break
//         case "9": res += " To'qqiz"; break
//         case "9": res += " To'qqiz"; break
//         default: res+="Bunaqa malumot mavjud emas";
//     }
// }
// console.log(res);
// let num = 856
// let yuzlik = parseInt(num / 100)
// num = num % 100

// let onlik = parseInt(num / 10)
// num = num % 10

// let birlik = num
// a = "", b = "", c = "";
// switch (yuzlik) {
//     case 1: a = "Bir yuz"; break;
//     case 2: a = "Ikki yuz"; break;
//     case 3: a = "Uch yuz"; break;
//     case 4: a = "To'rt yuz"; break;
//     case 5: a = "Besh yuz"; break;
//     case 6: a = "Olti yuz"; break;
//     case 7: a = "Yetti yuz"; break;
//     case 8: a = "Sakkiz yuz"; break;
//     case 9: a = "To'qqiz yuz"; break;
// }
// switch (onlik) {
//     case 1: b = "o'n"; break;
//     case 2: b = "yigirma"; break;
//     case 3: b = "o'ttiz"; break;
//     case 4: b = "qirq"; break;
//     case 5: b = "ellik"; break;
//     case 6: b = "oltmish"; break;
//     case 7: b = "yetmish"; break;
//     case 8: b = "sakson"; break;
//     case 9: b = "to'qson"; break;
// }
// switch (birlik) {
//     case 1: c = "Bir"; break;
//     case 2: c = "Ikki"; break;
//     case 3: c = "Uch"; break;
//     case 4: c = "To'rt"; break;
//     case 5: c = "Besh"; break;
//     case 6: c = "Olti"; break;
//     case 7: c = "Yetti"; break;
//     case 8: c = "Sakkiz"; break;
//     case 9: c = "To'qqiz"; break;
// }

// console.log(a, b, c);
let num = 122
let str = num.toString()
let res = 0
for (i = 0; i < str.length; i++) {
    res += +str[i]
}
console.log(res);
