let date = new Date()             //gives the present date
date = date.toLocaleString()
console.log(date)
document.getElementById("myLabel").innerHTML = date

let date1 = new Date(0)   //0 is a reference point(assume that it is the date from where time started).
                          //known as epic
                          //can add milliseconds also in the place of 0
date1 = date1.toLocaleString()
console.log(date1)
document.getElementById("myLabel1").innerHTML = date1

let date2 = new Date(2023,0,21,5,45,6,9)        //(year,month,day,hours,minutes,seconds,milliseconds)
// can also be written as ("january 21, 00:00:00")
date2 = date2.toLocaleString()
console.log(date2)
document.getElementById("myLabel2").innerHTML = date2

let date3 = new Date()
console.log(date3)
let year = date3.getFullYear()       //year
let dateof = date3.getDate()        // date
let day = date3.getDay()           // sunday=0, monday=1,tuesday =2
let month = date3.getMonth()         //january=0, feb =1 and so on....
console.log(month)        
console.log(year)
console.log(dateof)
console.log(day)
//similarly we have get hours, get minutes, get seconds, get milliseconds


//we can even set the properties
let da = new Date()
da.setFullYear(2026)
da.setDate(21)
da.setMonth(0)
da = da.toLocaleString()
document.getElementById("myLabel3").innerHTML=da


// format date
let daaa = new Date()
function formatDate(daaa){
    let year1 = daaa.getFullYear()
    let dates = daaa.getDate()
    let months =  daaa.getMonth()

    return `${year1},${months},${dates}`
}
document.getElementById("myLabel4").innerHTML = formatDate(daaa)