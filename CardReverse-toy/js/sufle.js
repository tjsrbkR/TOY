let imgary = [];  

const seting = (x,y) =>{
    for(let i =0; i< x*y; i++){
        const $card = document.createElement("div"); 
        const $cardBack = document.createElement("div"); 
        const $cardFront = document.createElement("div"); 
        const $ = document.createElement("div"); 
    }
}
let $img = document.getElementsByClassName("img");
function sufle(){
    for(let i = 0; img.length > 0 ; i++){
        imgary = imgary.concat(
            img.splice(Math.floor(Math.random() * img.length), 1)
            );
        }
        for(let i =0; i<$img.length; i++){
        $img[i].setAttribute("src",imgary[i].url);
    }
}   
sufle()
