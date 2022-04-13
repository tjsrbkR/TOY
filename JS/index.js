const $InputText = document.getElementById("InputText");
const $BtnAdd = document.getElementById("BtnAdd");
const $list = document.getElementById("list");
$BtnAdd.addEventListener("click",AddList);
$InputText.addEventListener("keyup",Enter);
let innerHTML = ``;
let ListGroup = [];
let listItem = document.querySelectorAll(ul);
ul


function AddList(){
    if($InputText.value === ''){
        return false;
    }
    $list.innerHTML +=  `<li><ul> `+ $InputText.value +`<br> </ul></li>`;
    ListGroup.push($InputText.value);

    for(let i=0; i<ListGroup.length; i++){
        
        ListGroup[i].

    $InputText.value = '';
    console.log(ListGroup);
    }
}
function ListGroupEvent(){
    alert("!23");
}
function Enter(e){
    if(e.keyCode === 13){
        AddList();
    $InputText.focus();
    }
}


