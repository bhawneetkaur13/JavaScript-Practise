
// Function Expression
const greeting = function(){
    console.log("hello")
}
greeting();

let count = 0;
document.getElementById("increase").onclick = function(){
    count += 1
    document.getElementById("number").innerHTML = count
}

document.getElementById("decrease").onclick = function(){
    count -= 1
    document.getElementById("number").innerHTML = count
}

// Arrow function expression - compact alternative for writing function expressions
// without an argument
const greet = () => console.log("hiiii")
greet()

// with one argument
const hello = (userName) => console.log(`Hello ${userName}`)
hello("bhawneet")

// with two arguments
const percent = (x,y) => console.log(`percentage is ${x/y *100} %`)
percent(80,100)

let marks = [80,76,96,100]
marks.sort((x,y) => y-x)
marks.forEach(element => console.log(element))





