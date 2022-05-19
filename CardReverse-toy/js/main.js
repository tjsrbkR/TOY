let $cardLine = document.querySelector(".card-line");
let $card = document.getElementsByClassName("card");
let $img = document.getElementsByClassName("img");

let valueArray = [];
let ary = [];

//카드 섞는 함수
function sufle(){
    DeleteSameValue();
    function pushValue(){
        for(let i = 0; i < $cardLine.children.length; i++){
            let random = Math.floor(Math.random() * $cardLine.children.length);
            ary.push(random);
        }
        console.log(ary);
    }
    function DeleteSameValue(){
        pushValue();
        for(let i = 0; i < $cardLine.children.length; i++){
            let sameValue = ary.filter(a => (a === ary[i]));
            if(sameValue.length < 2){
                valueArray.push(ary[i]);
                console.log(valueArray);
            }
        }
    }
}
sufle();