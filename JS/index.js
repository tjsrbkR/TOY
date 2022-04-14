const $InputText = document.getElementById("InputText");
const $BtnAdd = document.getElementById("BtnAdd");
const $list = document.getElementById("list");
// const $ul = document.getElementById("ul");

$BtnAdd.addEventListener("click",AddList);
$InputText.addEventListener("keyup",Enter);
let innerHTML = ``;
let ListGroup = [];


function AddList(){
    let $listitem = document.querySelectorAll("ul");
    if($listitem.length >= 5){
    return false;
    }
    if($InputText.value === ''){
        return false;
    }
    $list.innerHTML +=  `<ul id="ul"><li class="">
    <input type = "checkbox" id = "checkbox" name = checkbox> `+ $InputText.value +`<br></li> </ul>`;
    let $CheckBox = document.getElementsByName("checkbox");
    
    $InputText.value = '';
    ListHover();
}
function ListHover(event){
    let $CheckBox = document.getElementsByName("checkbox");
    let $listitem = document.querySelectorAll("ul");
    ListGroup.push($listitem);
    for(let i =0; i< $CheckBox.length; i++){
        if($CheckBox == true){
            alert("123");
        }
    }

    for(let i=0; i<$listitem.length; i++){
        $listitem[i].addEventListener("mouseover",()=>{
            $listitem[i].style.backgroundColor = "#46ebc7"
        });
        $listitem[i].addEventListener("mouseleave",()=>{
            $listitem[i].style.backgroundColor = "#7d1ccc"
        });
        $listitem[i].addEventListener("click",()=>{

        });
       
    }
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

ListHover();

// setTimeout(() => {

// }, 5000);