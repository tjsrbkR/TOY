const $Input = document.getElementById("input");
const $btn = document.getElementById("button");
let $list = document.getElementById("list");
let cnt = 1;
$btn.addEventListener("click",AddList);
$Input.addEventListener("keyup",Enter);
function AddList(){
    let temp = document.createElement('li');
    let $ListArray = document.querySelectorAll("li");
    if($ListArray.length >= 5 ){
        return false
    }
    if($Input.value === ''){
        return false;
    }
    temp.innerHTML = input.value;
    list.appendChild(temp);
    console.log($ListArray.length);
    temp.setAttribute("class", "list-group-item");
    temp.setAttribute("id", "li"+cnt);
    temp.innerHTML = input.value;
    temp.innerHTML += "<button style='float: right;' class='btn btn-outline-secondary' type='button' onclick='remove("+cnt+")'>삭제</button>";
    list.appendChild(temp);
    cnt++;
    $Input.focus();
    $Input.value = '';
}
function Enter(e){
    if(e.keyCode === 13){
        AddList();
        $Input.focus();
    }
}
function remove(cnt) {
    //window.alert(cnt);
    let li = document.getElementById('li'+cnt);
    $list.removeChild(li);
  }