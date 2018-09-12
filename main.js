var addedElements = [document.createElement("div")]
var parent = document.getElementsByClassName("addedContent")[0];
var amount = 0;
var data = document.getElementById("data").value;
var type = 0;

function add() {
    data = document.getElementById("data").value;
    if (data != "") {
        amount += 1;
        addedElements[amount] = document.createElement("div")
        parent.appendChild(addedElements[amount]);
        if (type === 0) {addedElements[amount].innerHTML = "<li>"+data+"</li>";}
        if (type === 1) {addedElements[amount].innerHTML = "<h1>"+data+"</h1>";}
        if (type === 2) {addedElements[amount].innerHTML = "<p>"+data+"</p>";}
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