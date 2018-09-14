var addedElements = [document.createElement("div")]
var parent = document.getElementsByClassName("addedContent")[0];
var amount = 0;
var data = document.getElementById("data").value;
var type = document.getElementsByName("type");
var doccolor = document.getElementById("color").value;
var textmargin = document.getElementsByName("textmargin");
var textWeight = document.getElementsByName("textWeight");
var link = document.getElementById("link").value;
//var finalProduct = document.getElementById("finalproduct");

function add() {
    data = document.getElementById("data").value;
    doccolor = document.getElementById("color").value;
    textmargin = document.getElementsByName("textmargin");
    textWeight = document.getElementsByName("textWeight");
    link = document.getElementById("link").value;
    if (data != "") {
        amount += 1;
        addedElements[amount] = document.createElement("div")
        parent.appendChild(addedElements[amount]);
        if (type[0].checked) {addedElements[amount].innerHTML = "<li>"+data+"</li>";}
        if (type[1].checked) {
            addedElements[amount].innerHTML = "<h1>"+data+"</h1>";
            addedElements[amount].style.color = doccolor;
            if (textmargin[0].checked) {addedElements[amount].style.borderLeft = "10px solid "+doccolor;}
            if (textmargin[2].checked) {addedElements[amount].style.borderRight = "10px solid "+doccolor;}
        }
        if (type[2].checked) {addedElements[amount].innerHTML = "<p>"+data+"</p>";}
        if (type[3].checked) {addedElements[amount].innerHTML = "<img src='"+data+"'>";}
        if (type[4].checked) {
            addedElements[amount].innerHTML = "<a href='"+link+"' target='null'>"+data+"</a>";
            addedElements[amount].style.color = color;
        }
        if (textmargin[0].checked) {addedElements[amount].style.textAlign = "left";}
        if (textmargin[1].checked) {addedElements[amount].style.textAlign = "center";}
        if (textmargin[2].checked) {addedElements[amount].style.textAlign = "right";}
        if (textWeight[0].checked) {addedElements[amount].style.fontWeight = "bold";}
        if (textWeight[1].checked) {addedElements[amount].style.fontStyle = "italic";}
        if (textWeight[2].checked) {addedElements[amount].style.textDecoration = "underline";}
        addedElements[amount].addEventListener("click", function () {parent.removeChild(this);}, false);
        //finalProduct.value = "<title>NoteMode</title><style>body {font-family: arial;} h1 {font-size: 75px;}</style>"+parent.innerHTML;
        //data = document.getElementById("data").value = "";
    }
}
