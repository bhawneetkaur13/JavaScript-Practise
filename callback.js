sum(2,3, displayConsole,)

function sum(x,y,callback){
    let result = x+y
    callback(result)

}

function displayConsole(result){
    console.log(result)
}
function displayDOM(result){
    document.getElementById("display").innerHTML=result
}

