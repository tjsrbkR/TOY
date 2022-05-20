// let $cardLine = document.querySelector(".card-line");
// let $card = document.getElementsByClassName("card");
// let $img = document.getElementsByClassName("img");

// let valueArray = [];
// let ary = [];
// let totalary = new Array(24);
// //카드 섞는 함수
// function sufle() {
// DeleteSameValue();
// function pushValue() {
//     for (let i = 0; i < $cardLine.children.length; i++) {
//         let random = Math.floor(Math.random() * $cardLine.children.length);
//         ary.push(random);
//     }
// }
//     function DeleteSameValue() {
//         pushValue();
//         for (let i = 0; i < totalary.length; i++) {
//             let sameValue = ary.filter((a) => a === ary[i]);
//             if (sameValue.length < 3) {
//                 valueArray.push(ary[i]);
//                 totalary.splice(i, 2, ary[i]);
//                 // console.log(valueArray);
//                 if (sameValue.length < 2) {
//                     let overlap = valueArray.filter((a) => a === ary[i]);
//                     totalary.filter(Boolean);
//                     totalary.forEach((e, j) => {
//                     });
//                     // totalary = totalary.filter(function(item){
//                     //     item !== null && item !== undefined && item !== "";
//                     // })
//                     // totalary.splice();
//                     // console.log(totalary)
//                 }
//             }
//         }
//         totalary = totalary.filter(function (item) {
//         return item !== null && item !== undefined && item !== "";
//         });
//     }
// }
// sufle();
// console.log(totalary);
// if(totalary.length < 13 ){
//     sufle();
// }