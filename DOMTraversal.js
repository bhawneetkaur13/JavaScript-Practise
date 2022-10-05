//body is the parent so first child is apples
let element = document.body
let child = element.firstElementChild
child.style.backgroundColor = "pink"

//last child of parent body is script so nothing will happen
let child2 = element.lastElementChild
child2.style.backgroundColor = "orange"

//now parent is vegetables ul
let element2 = document.querySelector("#vegetables")
let child3 = element2.firstElementChild
child3.style.backgroundColor = "lightgreen"

let sibling = element2.nextElementSibling
sibling.style.backgroundColor = "lightblue"

let element3 = document.querySelector("#deserts")
let child4 = element3.children[1]
child4.style.backgroundColor="lavender"


//.firstElementChild
//.lastElementChild
//.nextElementSibling
//.previousElementSibling
//.children[]
//.parentElement
