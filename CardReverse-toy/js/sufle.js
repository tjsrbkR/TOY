const horizontal = 6; // 가로
const vertical = 2; // 세로

// container 요소를 검색
const container = document.querySelector(".container");

// 뒷면에 넣을 색상 배열


// 새로 시작할 때 돌릴 색깔 배열을 만듬
let NewimgAry = img.slice();

// 색상 배열에서 뽑은 색이 들어갈 배열
let imgary = [];

/*
  여기서 concat 함수는 문자열을 합쳐준다.
  splice는 배열 함수인데 배열을 원하는 위치에 삽입, 원하는 위치의
  항목만 제거하거나 교체를 할 수 있다(새로운 배열을 만듬 걔를 color 배열에 넣을 것이다).
  그래서 랜덤함수는 0 ~ 1 미만 사이의 숫자를 랜덤으로 생성을 하니 걔와 
  색상 배열의 길이를 곱하게되면 0 ~ 19 사이의 숫자가 나온다.
  걔를 소수점 버림으로해서 0 ~ 19까지만나오게 한다.
  배열은 0번부터 시작하니 랜덤한 번호의 방에 하나씩 color가 들어갈 것이다.
*/

// 완성 카드
let successCards = [];

// 게임 시작시간
let gameStart;

// 색깔을 셔플할 함수를 작성
function shuffle() {
  for (let i = 0; img.length > 0; i++) {
    imgary = imgary.concat(
      img.splice(Math.floor(Math.random() * img.length), 1)
    );
  }
};
// 카드 세팅
const setting = (hori, verti) => {
shuffle();

  for (let i = 0; i < hori * verti; i++) {
    // 문서객체를 생성
    const card = document.createElement("div");
    const cardInner = document.createElement("div");
    const cardFront = document.createElement("div");
    const cardBack = document.createElement("div");

    // 생성한 문서객체에 클래스를 부여
    card.classList.add("card");
    cardInner.classList.add("card-inner");
    cardFront.classList.add("card-front");
    cardBack.classList.add("card-back");

    // 문서객체를 추가하기
    container.appendChild(card);
    card.appendChild(cardInner);
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);

    // 앞면에 카드 색 넣기
    // 뒷면에 카드 색 넣기
    cardFront.innerHTML += `<img src = "` + imglink + `">`;
    cardBack.innerHTML += `<img src = "` + imgary[i].url + `" value =  `+ imgary[i].value +` >`;
  }

  /* 
    처음에는 카드 외울시간을 부여하기위해
    forEach랑 setTimeout 함수를 사용
  */

  // card들을 검색
  const Cards = document.querySelectorAll(".card");

  // 세팅중에는 클릭 안되게 설정
  let clickFlag = false;

  // 카드가 두장 뒤집힐 때
  let cardArray = [];

  // forEach 함수를 사용 카드 열기
  Cards.forEach((aCard, index) => {
    // setTimeout 함수를 사용
    setTimeout(() => {
      aCard.classList.add("flipped");
    }, 1000 + 100 * index);
  });

  // 5초 후에 카드를 뒤집기
  Cards.forEach((aCard, _) => {
    setTimeout(() => {
      aCard.classList.remove("flipped");
    }, 5000);
  });

  // 카드가 다 뒤집어지고 난 다음 true로 바꿔서 클릭이 되게 변경
  setTimeout(() => {
    clickFlag = true;

    // 게임 시작!
    gameStart = new Date();
  }, 5500);

  // toggle기능 부여
  Cards.forEach((card, _) => {
    card.addEventListener("click", () => {
      // 세팅 끝나기 전까지 클릭 못하게하고 성공배열에 카드가
      // 들어있으면 그 카드는 클릭 못하게 하는 조건
      if (clickFlag && !successCards.includes(card)) {
        // 여기서 includes는 배열 속에 해당 원소가 있으면 true 없으면 false를 반환한다.
        card.classList.toggle("flipped");

        // 클릭할 때 그 카드를 배열에 담음
        cardArray.push(card);

        // 카드가 2장 뒤집었을 때
        if (cardArray.length === 2) {
          // 그 카드의 돔을 변수에 담음
          let cardA =
          cardArray[0].querySelector(".card-back img");
          let cardB =
          cardArray[1].querySelector(".card-back img");
          console.log(cardA.src);
          console.log(cardB.src);
          // 두 카드의 이미지 경로가 같다면
          if (cardA.src == cardB.src) {
            // 완성카드에 추가한다.
            successCards.push(cardArray[0]);
            successCards.push(cardArray[1]);

            // 다음 검사를 위해 배열 비워줌
            cardArray = [];

            // 게임 초기화

            // 성공카드배열의 길이가 20일 때
            if (successCards.length == 12) {
              // 게임 끝 시간
              let gameEnd = new Date();

              // 총 시간을 알기 위해 만든 변수
              let complete = (gameEnd - gameStart) / 1000;

              // 알림창으로 출력
              alert("축하합니다!" + complete + " 초 걸렸습니다.");

              // 카드들 싹다 비우고
              container.innerHTML = "";

              // 성공카드 배열 비우고
              successCards = [];

              // 색깔 비우고
              color = [];

              // 랜덤으로 카드색 돌릴꺼 다시 만들고
              NewimgAry = img.slice();

              // 시작시간 null로 바꾸고
              gameStart = null;

              // 색 셔플 다시 하고
              shuffle();

              // 세팅도 다시한다.
              setting(horizontal, vertical);
            }

            // 두 카드의 색이 다르다면
          } else {
            // 다시 뒤집을 것이다.

            // 그 때 또 클릭을 할 수 있기 때문에 flag를 다시 false로 바꿈
            clickFlag = false;

            setTimeout(() => {
              // 뒤집기 위해 클래스 빼주고
              cardArray[0].classList.remove("flipped");
              cardArray[1].classList.remove("flipped");

              // 다시 true로 바꾸고
              clickFlag = true;

              // 배열 비워줌
              cardArray = [];
            }, 1000);
          }
        }
      }
    });
  });
};
setting(horizontal,vertical)