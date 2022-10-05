//to draw on the canvas we need to get a context(there is one argument 2d)
//context is a painting within a picture frame
//canvas is the picture frame

let canvas = document.getElementById("canvas")
canvas.style.border = "2px solid black"

let context = canvas.getContext("2d")

// DRAW LINES
// context.strokeStyle = "red"
// context.lineWidth = 10
// context.beginPath()
// context.moveTo(0,0)
// context.lineTo(250,250)
// context.lineTo(250,500)
// context.moveTo(250,250)
// context.lineTo(500,0)
// context.stroke()

//DRAW TRIANGLE
// context.fillStyle = "yellow"
// context.lineWidth = 10
// context.beginPath()
// context.moveTo(250,0)
// context.lineTo(0,150)
// context.lineTo(500,150)
// context.lineTo(250,0)
// context.stroke()
// context.fill()

//DRAW RECTANGLE
// context.beginPath()
// context.fillStyle = "red"
// context.fillRect(0,0,250,250)   //(x,y, width, height)
// context.strokeRect(0,0,250,250)

// context.fillStyle = "yellow"
// context.fillRect(250,0,250,250)   
// context.strokeRect(250,0,250,250)

// context.fillStyle = "blue"
// context.fillRect(0,250,250,250)   
// context.strokeRect(0,250,250,250)

// context.fillStyle = "black"
// context.fillRect(250,250,250,250)   
// context.strokeRect(250,250,250,250)

//DRAW CIRCLE
//(x,y,radius,starting angle, ending angle, counterclockwise)
// context.beginPath()
// context.fillStyle = "purple"
// context.arc(250,250,200,0,2*Math.PI,true)
// context.stroke()
// context.fill()

//DRAW TEXT
context.font = "50px MV Boli"
context.textAlign ="center"
context.fillText("You Win",canvas.width/2,canvas.height/2)


