console.log(document)   //displays DOM and everything within it
console.dir(document)   //displays the properties of a document

console.log(document.title)
document.title = "Element Selector"  //change the title of documnent


console.log(document.title)
// document.location = "https://mail.google.com/mail/u/0/#inbox"   //will open gmail
console.log(document.location)

document.body.style.backgroundColor = "skyblue"

document.getElementById("heading").style.backgroundColor = "lightpink"

let fruits = document.getElementsByName("fruits")
fruits.forEach(fruit=> {
    if(fruit.checked){
        console.log(fruit.value)
    }
}
)

let element = document.querySelectorAll("[for]")
element.forEach(ele=>{
    ele.style.backgroundColor = "lightgreen"
})

let vegetables = document.getElementsByTagName("li")
vegetables[0].style.backgroundColor = "yellow"
vegetables[1].style.backgroundColor = "yellow"
vegetables[2].style.backgroundColor = "yellow"  //instead of this we can use query selector all

let deserts = document.getElementsByClassName("div")
deserts[2].style.backgroundColor = "orange"
document.querySelector(".div").style.backgroundColor = "orange"  //selects the first item