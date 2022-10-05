let image = document.getElementById("img")
image.style.width = "300px"
image.style.height = "300px"
image.style.display = "none"

let button = document.getElementById("btn")
button.addEventListener("click",display)

function display(){
    if(image.style.display == "none"){
        image.style.display = "block"
    }
    else{
        image.style.display = "none"
    }
}