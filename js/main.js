    
    let $SelectedBox = document.getElementById("SelectedBox");
    let $SelectAlt = document.getElementById("SelectAlt");
    const Btngkstlr = document.getElementById("gkstlr");
    const Btnwndtlr = document.getElementById("wndtlr");
    const Btndlftlr = document.getElementById("dlftlr");
    const Btndidtlr = document.getElementById("didtlr");
    const Btnqnstlr = document.getElementById("qnstlr");
    const Btnditlr  = document.getElementById("ditlr");
    //분식 버튼 이벤트
    qnstlrBtnEvent();
    function qnstlrBtnEvent(){
        Btnqnstlr.addEventListener("click",qnstlrArray);
    }
    //야식 버튼 이벤트
    ditlrBtnEvent();
    function ditlrBtnEvent(){
        Btnditlr.addEventListener("click",ditlrArray);
    }
    //일식 버튼 이벤트
    dlftlrBtnEvent();
    function dlftlrBtnEvent(){
        Btndlftlr.addEventListener("click",dlftlrArray);
    }
    //중식 버튼 이벤트
    wndtlrBtnEvent();
    function wndtlrBtnEvent(){
        Btnwndtlr.addEventListener("click",wndtlrArray);
    }
    //양식 버튼 이벤트
    didtlrBtnEvent();
    function didtlrBtnEvent(){
        Btndidtlr.addEventListener("click",didtlArray);
    }
    //한식 버튼 이벤트
    gkstlrBtnEvent();
    function gkstlrBtnEvent(){
        Btngkstlr.addEventListener("click",gkstlrArray);
    }
    function clear(){
        $SelectAlt.innerHTML ="" ;
    }
    //분식 랜덤선택 이벤트 
    function qnstlrArray(){
        clear();
        let qnstlrselected = qnstlr[Math.floor(Math.random() * qnstlr.length)]
        let AltSelected = qnstlrselected.name;
        let ImgSelected = qnstlrselected.img; 
        $SelectedBox.setAttribute("src",ImgSelected);
        $SelectedBox.setAttribute("width","300px");
        $SelectedBox.setAttribute("height","300px");
        $SelectAlt.innerHTML+= AltSelected;
        // $SelectAlt.innerText += AltSelected;
        // AltSelected = '';
    }
    //양식 랜덤선택 이벤트 
    function didtlArray(){
        clear();
        let didtlrselected = didtlr[Math.floor(Math.random() * didtlr.length)]
        let ImgSelected = didtlrselected.img; 
        let AltSelected = didtlrselected.name;
        $SelectedBox.setAttribute("src",ImgSelected);
        $SelectedBox.setAttribute("width","300px");
        $SelectedBox.setAttribute("height","300px");
        $SelectAlt.innerHTML+= AltSelected;
    }
    //일식 랜덤선택 이벤트 
    function dlftlrArray(){
        clear();
        let dlftlrselected = dlftlr[Math.floor(Math.random() * dlftlr.length)]
        let ImgSelected = dlftlrselected.img; 
        let AltSelected = dlftlrselected.name;
        $SelectedBox.setAttribute("src",ImgSelected);
        $SelectedBox.setAttribute("width","300px");
        $SelectedBox.setAttribute("height","300px");
        $SelectAlt.innerHTML+= AltSelected;
    }
    //야식 랜덤선택 이벤트 
    function ditlrArray(){
        clear();
        let ditlrselected = ditlr[Math.floor(Math.random() * ditlr.length)]
        let ImgSelected = ditlrselected.img; 
        let AltSelected = ditlrselected.name;
        $SelectedBox.setAttribute("src",ImgSelected);
        $SelectedBox.setAttribute("width","300px");
        $SelectedBox.setAttribute("height","300px");
        $SelectAlt.innerHTML+= AltSelected;
    }
    //한식 랜덤선택 이벤트 
    function gkstlrArray(){
        clear();
        let gkstlrselected = gkstlr[Math.floor(Math.random() * gkstlr.length)]
        let ImgSelected = gkstlrselected.img; 
        let AltSelected = gkstlrselected.name;
        $SelectedBox.setAttribute("src",ImgSelected);
        $SelectedBox.setAttribute("width","300px");
        $SelectedBox.setAttribute("height","300px");
        $SelectAlt.innerHTML+= AltSelected;
    }
    //중식 랜덤선택 이벤트 
    function wndtlrArray(){
        clear();
        let wndtlrselected = wndtlr[Math.floor(Math.random() * wndtlr.length)]
        let ImgSelected = wndtlrselected.img; 
        let AltSelected = wndtlrselected.name;
        $SelectedBox.setAttribute("src",ImgSelected);
        $SelectedBox.setAttribute("width","300px");
        $SelectedBox.setAttribute("height","300px");
        $SelectAlt.innerHTML+= AltSelected;
    }