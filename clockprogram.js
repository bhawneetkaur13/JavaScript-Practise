
const myLabel = document.getElementById("myLabel")

display()
setInterval(display,1000)

function display(){

    let date = new Date()
    myLabel.innerHTML = format(date)
    function format(date){
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()
        let amOrpm = hours >=12 ? "pm" : "am"
        hours = (hours % 12) || 12
        hours = formatZeroes(hours)
        seconds = formatZeroes(seconds)
        minutes = formatZeroes(minutes)
        return `${hours}: ${minutes}: ${seconds} ${amOrpm}`
        
    }
    function formatZeroes(time){
        time = time.toString()
        return time.length < 2 ? "0" + time : time
    }
    
}