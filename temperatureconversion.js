document.getElementById("submit").onclick = function(){
    let temp = document.getElementById("temp").value 
    temp = Number(temp)
    if(document.getElementById("cel").checked){
        temp = toCelcius(temp)
        console.log(temp)
        document.getElementById("answer").innerHTML = temp + "°C"

    }
    else if(document.getElementById("far").checked){
        temp = toFar(temp)
        console.log(temp)
        document.getElementById("answer").innerHTML = temp + "°F"
    }
}
function toCelcius(temp){
    return (temp-32) * 5/9
}
function toFar(temp){
    return (temp * 9/5) + 32
}