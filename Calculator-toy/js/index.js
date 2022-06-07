const calcBody = document.querySelectorAll(".calc-body");
const calcValue = document.querySelector(".calc-value");

const calcValueObj = {
  currentValue: 0,
  temp: 0,
  operator: ""
};

function setNumber(value) {
  if (calcValueObj.operator) {
    // 계산할 기호가 있으면 저장
    const result = String(calcValueObj.temp) + value;
    console.log(result);
    calcValueObj.temp = Number(result);
    renderNumber(calcValueObj.temp);
  } else {
    // 계산 중이 아니면 현재 벨류
    const result = String(calcValueObj.currentValue) + value;
    calcValueObj.currentValue = Number(result);
    console.log(calcValueObj.currentValue);
    renderNumber(calcValueObj.currentValue);
  }
}

function setOperation(operator) {
  if (calcValueObj.currentValue && calcValueObj.temp) {
    // 연산자가 있으면 계산하고 다음 연산자를 집어넣어야 한다.
    calculator();
    renderNumber(calcValueObj.currentValue);
  }
  calcValueObj.operator = operator;
}

function reset() {
  calcValueObj.currentValue = 0;
  calcValueObj.temp = 0;
  calcValueObj.operator = "";
  renderNumber(0);
}

function finish() {
  calculator();
  renderNumber(calcValueObj.currentValue);
  calcValueObj.operator = "";
}

function renderNumber(number) {
  if (calcValue) {
    calcValue.textContent = number;
  }
}

function handleClickBtn(e) {
  const { value } = e.target;

  // 숫자라면
  if (/[0-9]/.test(value)) { // /[0-9]/ >> 숫자 정규식
    return setNumber(value);
  }

  // 초기화라면
  if (value === "AC") {
    return reset();
  }

  // 계산 끝
  if (value === "=") {
    return finish();
  }

  // 계산하는 값들이라면
  return setOperation(value);
}

function init() {
  // calcBody 안에 있는 버튼에 클릭 이벤트 위임

  calcBody.forEach((button) => {
    button.addEventListener("click", handleClickBtn);
  });

  // 초기 계산기 출력 값 0
  renderNumber(0);
}

// 초기 진입점
init();

function calculator() {
  switch (calcValueObj.operator) {
    case "+": {
      calcValueObj.currentValue += calcValueObj.temp;
      break;
    }
    case "*": {
      calcValueObj.currentValue *= calcValueObj.temp;
      break;
    }
    case "-": {
      calcValueObj.currentValue -= calcValueObj.temp;
      break;
    }
    case "/": {
      calcValueObj.currentValue /= calcValueObj.temp;
      break;
    }
    case "%": {
      calcValueObj.currentValue %= calcValueObj.temp;
      break;
    }
    case "^": {
      calcValueObj.currentValue **= calcValueObj.temp;
      break;
    }
    default: {
      break;
    }
  }
  // 계산 후 초기화
  calcValueObj.temp = 0;
}
