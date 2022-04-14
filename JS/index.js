const $InputText = document.getElementById("InputText");
const $BtnAdd = document.getElementById("BtnAdd");
const $list = document.getElementById("list");
// const $ul = document.getElementById("ul");

$BtnAdd.addEventListener("click",AddList);
$InputText.addEventListener("keyup",Enter);
let innerHTML = ``;
let ListGroup = [];


function AddList(){
    if($InputText.value === ''){
        return false;
    }
    $list.innerHTML +=  `<ul id="ul"><li> `+ $InputText.value +`<br></li> </ul>`;
    ListGroup.push($InputText.value);
    $InputText.value = '';
    let $listitem = document.querySelector("ul");
    console.log($listitem);
    $listitem.addEventListener("mouseover",()=>{
        alert("123")
    });

    console.log(ListGroup);
}
function ListGroupEvent(){
    alert("123");
}
function DeleteEvent(){
    console.log("123");
}
function Enter(e){
    if(e.keyCode === 13){
        AddList();
    $InputText.focus();
    }
}



// setTimeout(() => {

// }, 5000);