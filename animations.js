let div = document.getElementById("div")
div.style.backgroundColor =  "lightgreen"
div.style.height = "100px"
div.style.width = "100px"
div.style.border = "2px solid black"
div.style.position = "relative"

let button = document.getElementById("btn")
button.addEventListener("click",move)

function move(){
    
    let timer = null
    let x= 0
    let y = 0
    let degree = 0
    timer = setInterval(frame, 2)
    function frame(){
        if(x>=200 || y>=200){
            clearInterval(timer)
        }
        else{
            degree +=1
            x+=1
            y+=1
            div.style.left = x + "px"
            div.style.top = y + "px"
            div.style.transform = "rotateZ("+degree+"deg)"
        }

    }
    
}

let btn = document.getElementById("but")
btn.addEventListener("click",func)

function func(){
    let scaleX=0
    let scaleY =0
    let timerId = null
    timerId = setInterval(frames,2)
    function frames(){
      if(scaleX>=2 || scaleY>=2){
        clearInterval(timerId)
      }
      else{
        scaleX += 0.1
        scaleY+=0.1
        div.style.transform = "scaleX("+scaleX+")"
        div.style.transform = "scaleY("+scaleY+")"

    }
}
}