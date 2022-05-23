const x = 6;
const y= 2;
const setting = (x,y) =>{
  for(let i =0; i < x * y; i++){
    let imgary = [];  
    let $cardbox = document.getElementById("cardBox");
    let $img = document.querySelectorAll(".Randomimg");
    let $container = document.querySelectorAll(".container");
  }
  for(let i = 0; img.length > 0 ; i++){
    imgary = imgary.concat(
        img.splice(Math.floor(Math.random() * img.length), 1)
        );
    let code = `
    <div class="container"> 
    <div class="item front"><img class="Randomimg" src="`+ imglink +`" value="" /> 
    </div>
    <div class="item back"><img class="Randomimg" src="`+ imgary[i].url + `" value="" /> 
    </div></div>`; 
    $cardbox.innerHTML += code;
    let $item = document.querySelectorAll(".item");
    for(let i=0; i<$item.length;i++){
      $item[i].addEventListener("click",()=>{
        $item[i].classList.toggle("flipped");
      });
    }
  }
}






function landerring(){
let $item = document.querySelectorAll(".item");
  $item.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("front");
    }, 1000 + 100 * index);
  });
  $item.forEach((aCard, _) => {
    setTimeout(() => {
      aCard.classList.remove("flipped");
    }, 5000);
  });
}