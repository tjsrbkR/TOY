const Calculator = document.querySelector(".Calculator");
let cnt = 0;
let firstValue = [];
let SecondValue = [];
//eval 함수는 절대로 쓰지 말자 
//eval 함수는 스크립트 실행문을 만들어서 실행시킨다. 보안에 매우 취약함
    const btn = document.getElementsByTagName("button");
    const nowInput = document.getElementById("nowInput");
    const result = document.querySelector("#result");
    for(let i =0; i<btn.length; i++){
        btn[i].addEventListener("click",()=>{
            result.value += btn[i].value;
            nowInput.value += btn[i].value;
        })
    }
    const BtnPlus = document.getElementById("plus");
    BtnPlus.addEventListener("click", ()=>{
        firstValue.push(result.value);
        nowInput.innerHTML += BtnPlus.value;
        result.value = '';
        msg();
        console.log(cnt);
    })
    const BtnMinus = document.getElementById("minus");
    BtnMinus.addEventListener("click", ()=>{
        nowInput.innerHTML += BtnMinus.value;
        result.value = '';
        msg();

    })
    const Btndivision = document.getElementById("division");
    Btndivision.addEventListener("click", ()=>{
        nowInput.innerHTML += Btndivision.value;
        console.log(result);
        result.value = '';
        msg();

    })
    const Btnmultiplication = document.getElementById("multiplication");
    Btnmultiplication.addEventListener("click", ()=>{
        nowInput.innerHTML += Btnmultiplication.value;
        result.value = '';
        msg();

    })  
    const Btndelete = document.getElementById("delete");
    Btndelete.addEventListener("click", function () { 
        result.value = result.value.slice(0, -1);   
        nowInput.value = nowInput.value.slice(0, -1);   
    });
    const BtnTotal = document.getElementById("total");
    BtnTotal.addEventListener("click",()=>{
        firstValue= []; 
        SecondValue= [];
    })

function msg(){
    cnt++;
    if(cnt > 1){
        alert("연산자를 한번만 입력 하세요");
        result.value = result.value.slice(0, -1);   
        nowInput.value = nowInput.value.slice(0, -1);   
        cnt = 0;

    }
}