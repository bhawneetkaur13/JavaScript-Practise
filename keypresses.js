//to detect key presses we can add an eventlistener to window
// window.addEventListener("keydown",event => {console.log(event.key)})

let div = document.getElementById("div")
div.style.backgroundColor =  "lightgreen"
div.style.height = "100px"
div.style.width = "100px"
div.style.border = "2px solid black"
div.style.position = "relative"

window.addEventListener("keydown",move)
let x=0
let y =0
function move(event){
    switch(event.key){
        case "ArrowDown":
            y+=5
            div.style.top = y + "px"
            break;

        case "ArrowUp":
            y-=5
            div.style.top = y + "px"
            break;
        case "ArrowRight":
            x+=5
            div.style.left = x + "px"
            break;
        case "ArrowLeft":
            x-=5
            div.style.left = x + "px"
            break;
        default:
            break
    }
}