const horizontal = 5; // 가로
const vertical = 4; // 세로
// container 요소를 검색
const container = document.querySelector(".container");
const setting = (hori, verti) => {
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
      cardFront.style.backgroundColor = "navy";
      // 뒷면에 카드 색 넣기
      cardBack.style.backgroundColor = "gray";
  
      // toggle기능 부여
      card.addEventListener("click", () => {
        card.classList.toggle("flipped");
      });
    }
  };
  
  setting(horizontal, vertical);