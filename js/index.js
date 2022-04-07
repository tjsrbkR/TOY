const $input = document.getElementById("text");
const $btn = document.getElementById("btn");
const $textBox = document.getElementById("textBox");
const $try = document.getElementById("try");
let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let number = [];
let Count = 0;
function Clear() {
  //innerHTML 초기화
  $textBox.innerHTML = ``;
  $try.innerHTML = ``;
}
function gameStart() {
  //난수 생성 함수
  for (let i = 0; i < 4; i++) {
    let selectedNum = numberArray.splice(
      Math.floor(Math.random() * (9 - i)),
      1
    )[0];
    number.push(selectedNum);
  }
}

$input.addEventListener("keyup", Enter);
$btn.addEventListener("click", MakeNumber);
function Enter(e) {
  //엔터키 입력시 텍스트값 판별
  if (e.keyCode === 13) {
    Count++;
    console.log(Count);
    console.log(number);
    discrimination();
    wrong();
  }
}
function MakeNumber(e) {
  //버튼 클릭시 텍스트값 판별
  e.preventDefault(); // 새로고침 못하게 하는 함수
  Count++;
  console.log(Count);
  console.log(number);
  discrimination();
  wrong();
}
function wrong() {
  //10번 이상 시도 했을때
  for (let i = 0; i < 10; i++) {
    if (Count === 10) {
      $try.innerHTML += ` Game Over answer is: ` + number;
      Count = 0;
    }
  }
}
function discrimination() {
  //볼, 스트라이크 여부 판별
  Clear();
  let answer = $input.value;
  if (answer === number.join("")) {
    $textBox.innerHTML += `Home Run`;
    $input.value = ``;
    $input.focus();
  } else {
    let answerList = answer.split("");
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < 4; i++) {
      if (Number(answerList[i]) === number[i]) {
        strike += 1;
      } else if (number.indexOf(Number(answerList[i])) > -1) {
        ball += 1;
      }
    }
    $textBox.innerHTML += strike + ` Strike ` + ball + ` ball`;
  }
}
gameStart();
