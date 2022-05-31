const Calculator = document.querySelector(".Calculator");
let firstValue = [];
let SecondValue = [];
let flag;
let coin =false;  
let totalresult  =0; 
    //eval 함수는 절대로 쓰지 말자
    //eval 함수는 스크립트 실행문을 만들어서 실행시킨다. 보안에 매우 취약함
const btn = document.getElementsByTagName("button");
const nowInput = document.getElementById("nowInput");
const result = document.querySelector("#result");
    const Btndelete = document.getElementById("delete");
    Btndelete.addEventListener("click", function () {
        result.value = result.value.slice(0, -1);
        nowInput.value = nowInput.value.slice(0, -1);
    });

function operatorClick(){
    this.plus = "+";
    this.minus = "-";
    this.multiple = "*";
    this.division = "÷";
}

// function Person() {}
// Person.prototype.eyes = 2;
// Person.prototype.nose = 1;
// var kim  = new Person();
// var park = new Person();
// console.log(kim.eyes); // => 2
const operatorClicked = (e) => {
    firstValue.push(parseFloat(result.value));
    console.log(firstValue);
    coin = !coin; 
    console.log(coin);

    result.value = '';

    const opButton = e.target; // 연산자 버튼임
    nowInput.value += e.target.value;
    if (flag) {
        msg(); // 이미 true인데 또 연산자를 누름
        return;
    }
    else{
        flag = true; // "op" 값 바인딩
    }

};


const btnOperators = document.querySelectorAll(
    `.Calculator [data-type="op"]`
    );
    btnOperators.forEach((btn) => {
    // 모든 연산자 버튼에 클릭 콜백을 걸어줌
    btn.addEventListener("click", operatorClicked, true);
});



const NumClicked = (e) =>{
    const NumButton = e.target;
    flag = false;
    nowInput.value += e.target.value;
    result.value += e.target.value;
};
const btnNumber = document.querySelectorAll(
    `.Calculator [data-type="digit"]`
    );
    btnNumber.forEach((btnNum) => {
    btnNum.addEventListener("click", NumClicked,false);

});
function msg() {
    if (flag) {
        nowInput.value = nowInput.value.slice(0, -1);
        alert("연산자를 한번만 입력 하세요");
    }
}

const BtnTotal = document.getElementById("total").addEventListener("click",(e)=>{
    SecondValue.push(parseFloat(result.value));
    const btnNumber = document.querySelectorAll(
        `.Calculator [data-type="op"]`
        );

        console.log(btnNumber);
        for(let i in btnNumber){
            console.log(btnNumber[i].value)
    switch(btnNumber[i].value){
        case '+': 
        console.log(firstValue[0]);
        console.log(SecondValue[0]);
            totalresult = firstValue[0] + SecondValue[0];
            clear();    
            firstValue.push(totalresult);
            nowInput.value += totalresult;
            result.value += totalresult;
            break;
        case '-':
            totalresult = firstValue[0] - SecondValue[0];
            clear();
            firstValue.push(totalresult);
            nowInput.value += totalresult;
            result.value += totalresult;
            break;
        case 'x':
            totalresult = firstValue[0] * SecondValue[0];
            clear();
            firstValue.push(totalresult);
            nowInput.value += totalresult;
            result.value += totalresult;
            break;
        case '÷':
            totalresult = firstValue[0] / SecondValue[0];
            clear();
            firstValue.push(totalresult);
            nowInput.value += totalresult;
            result.value += totalresult;
            break;
        }
    }
});
    function clear(){
        result.value    = '';
        nowInput.value ='';
    }