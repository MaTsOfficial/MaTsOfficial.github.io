var addedElements = [document.createElement("div")]
var parent = document.getElementsByClassName("addedContent")[0];
var amount = 0;
var data = document.getElementById("data").value;
var type = 0;
var doccolor = document.getElementById("color").value;
var textmargin = document.getElementsByName("textmargin");
var textWeight = document.getElementsByName("textWeight");

function add() {
    data = document.getElementById("data").value;
    doccolor = document.getElementById("color").value;
    textmargin = document.getElementsByName("textmargin");
    textWeight = document.getElementsByName("textWeight");
    if (data != "") {
        amount += 1;
        addedElements[amount] = document.createElement("div")
        parent.appendChild(addedElements[amount]);
        if (type === 0) {addedElements[amount].innerHTML = "<li>"+data+"</li>";}
        if (type === 1) {
            addedElements[amount].innerHTML = "<h1>"+data+"</h1>";
            addedElements[amount].style.color = doccolor;
            addedElements[amount].style.borderLeft = "10px solid "+doccolor;
        }
        if (type === 2) {addedElements[amount].innerHTML = "<p>"+data+"</p>";}
        if (textmargin[0].checked) {addedElements[amount].style.textAlign = "left";}
        if (textmargin[1].checked) {addedElements[amount].style.textAlign = "center";}
        if (textmargin[2].checked) {addedElements[amount].style.textAlign = "right";}
        if (textWeight[0].checked) {addedElements[amount].style.fontWeight = "bold";}
        if (textWeight[1].checked) {addedElements[amount].style.fontStyle = "italic";}
        if (textWeight[2].checked) {addedElements[amount].style.textDecoration = "underline";}
        addedElements[amount].addEventListener("click", function () {parent.removeChild(this);}, false)
        //data = document.getElementById("data").value = "";
    }
}
function typeToggle() {
    if (type === 0) {
        document.getElementById("list").style.background = "#00ffff";
        document.getElementById("header").style.background = "transparent";
        document.getElementById("p").style.background = "transparent";
        document.getElementById("list").style.color = "white";
        document.getElementById("header").style.color = "black";
        document.getElementById("p").style.color = "black";
        document.getElementById("dataPlaceholder").innerHTML = "list";
    }
    if (type === 1) {
        document.getElementById("header").style.background = "#00ffff";
        document.getElementById("list").style.background = "transparent";
        document.getElementById("p").style.background = "transparent";
        document.getElementById("list").style.color = "black";
        document.getElementById("header").style.color = "white";
        document.getElementById("p").style.color = "black";
        document.getElementById("dataPlaceholder").innerHTML = "header";
    }
    if (type === 2) {
        document.getElementById("list").style.background = "transparent";
        document.getElementById("header").style.background = "transparent";
        document.getElementById("p").style.background = "#00ffff";
        document.getElementById("p").style.color = "white";
        document.getElementById("header").style.color = "black";
        document.getElementById("list").style.color = "black";
        document.getElementById("dataPlaceholder").innerHTML = "text";
    }
}

function type0() {type = 0;}
function type1() {type = 1;}
function type2() {type = 2;}
