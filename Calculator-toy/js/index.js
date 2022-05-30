const Calculator = document.querySelector(".Calculator");
let firstValue = [];
let SecondValue = [];

let flag;

    //eval 함수는 절대로 쓰지 말자
    //eval 함수는 스크립트 실행문을 만들어서 실행시킨다. 보안에 매우 취약함
const btn = document.getElementsByTagName("button");
const nowInput = document.getElementById("nowInput");
const result = document.querySelector("#result");
    // for(let i =0; i<btn.length; i++){
    //     btn[i].addEventListener("click",()=>{
    //         result.value += btn[i].value;
    //         nowInput.value += btn[i].value;
    //     })
    // }
    // const BtnPlus = document.getElementById("plus");
    // BtnPlus.addEventListener("click", (e)=>{
    //     firstValue.push(result.value);
    //     nowInput.innerHTML += e.value;
    //     result.value = '';
    //     msg();
    // })
    // const BtnMinus = document.getElementById("minus");
    // BtnMinus.addEventListener("click", (e)=>{
    //     nowInput.innerHTML += e.value;
    //     result.value = '';
    // })
    // const Btndivision = document.getElementById("division");
    // Btndivision.addEventListener("click", (e)=>{
    //     nowInput.innerHTML += e.value;
    //     result.value = '';
    // })
    // const Btnmultiplication = document.getElementById("multiplication");
    // Btnmultiplication.addEventListener("click", (e)=>{
    //     nowInput.innerHTML += e.value;
    //     result.value = '';
    // })
    // const Btndelete = document.getElementById("delete");
    // Btndelete.addEventListener("click", function () {
    //     result.value = result.value.slice(0, -1);
    //     nowInput.value = nowInput.value.slice(0, -1);
    // });
    // const BtnTotal = document.getElementById("total");
    // BtnTotal.addEventListener("click",()=>{
    //     firstValue= [];
    //     SecondValue= [];
    // })
const operatorClicked = (e) => {
    const opButton = e.target; // 연산자 버튼임
    console.log(opButton.dataset.cmd); // "sum", "sub" 등 출력되어야 함
    if (flag) {
        msg(); // 이미 true인데 또 연산자를 누름
        return;
    }
    flag = true; // "op" 값 바인딩
};

const btnOperators = document.querySelectorAll(
    `.Calculator [data-type="op"]`
    );
    console.log(btnOperators);
    btnOperators.forEach((btn) => {
    // 모든 연산자 버튼에 클릭 콜백을 걸어줌
    btn.addEventListener("click", operatorClicked, false);
});

function msg() {
    console.log(flag);
    if (flag) {
        result.value = result.value.slice(0, -1);
        nowInput.value = nowInput.value.slice(0, -1);
        alert("연산자를 한번만 입력 하세요");
    }
}