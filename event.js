//event - any action that a user or browser does
//there are following event attributes
//1. onclick
function doSomething(){
    alert("clicked the button")
}

//2.on load - when the web browser loads it does something (can even set this at the opening tag of body)
let element = document.body
element.onload = doWork

function doWork(){
    alert("reloaded the page")
}

//3.on change- when an element has been changed it activates the on change
let ele = document.getElementById("myText")
ele.onchange = doThis

function doThis(){
    alert("changed the element")
}

//4. on mouseover
let element1 = document.getElementById("div")
element1.style.backgroundColor = "lightgreen"
element1.style.width = "100px"
element1.style.height = "100px"

element1.onmouseover = doColor

function doColor(){
    element1.style.backgroundColor = "red"
}

//5. on mouseout
element1.onmouseout = doBack
function doBack(){
    element1.style.backgroundColor = "lightgreen"
}

//6.on mousedown
let ele2 = document.getElementById("myDiv")
ele2.style.backgroundColor = "blue"
ele2.style.width = "100px"
ele2.style.height = "100px"
ele2.onmousedown = doColor1
function doColor1(){
    element1.style.backgroundColor = "cyan"
}


//7.on mouseup
ele2.onmouseup = doBack1
function doBack1(){
    element1.style.backgroundColor = "pink"
}
