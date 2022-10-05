//add/change elements in html
//innerHTML (XSS attacks possible if you ask input from user they mei enter some mallicious sites)
//textContent - more preffered because it is secure
let nameTag = document.createElement("h1")
nameTag.textContent = window.prompt("enter you name")
document.body.append(nameTag)

//to add something at the last of list
let fruit = document.createElement("li")
fruit.textContent = "mango"
document.querySelector("#fruits").append(fruit)

//to add something at the begining of the list
let fruit2 = document.createElement("li")
fruit2.textContent = "orange"
document.querySelector("#fruits").prepend(fruit2)

//to add something in the middle of list
let list = document.querySelector("#fruits")
let fruit1 = document.createElement("li")
fruit1.textContent = "guava"
list.insertBefore(fruit1, list.getElementsByTagName("li")[2])


//add/change CSS properties
let title = document.getElementById("heading")
title.style.backgroundColor = "black"
title.style.color = "white"
title.style.textAlign = "center"
