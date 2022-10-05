let element = document.getElementById("inner")
element.style.backgroundColor = "lightgreen"
element.style.width = "100px"
element.style.height = "100px"
element.style.border = " 2px solid black"

//.addEventListener(event,function,useCapture)
//add event listener-we can link an event and a function to an html element
//one element can have several event listeners and even the same event can invoke different functions



const inner = document.getElementById("inner")
const outer = document.getElementById("outer")

inner.addEventListener("mouseover",changeBlue)
outer.addEventListener("mouseover",changeBlue,outer)

function changeBlue(){
    alert(`${this.id}`)
    this.style.backgroundColor="lightblue"
}



