        
        //setTimeout()- invokes a function after a number of millseconds asynchronous function- doesn't stops the execution of the program 
        let timer1  = setTimeout(first,3000)
        let timer2  = setTimeout(second,6000)
        let timer3  = setTimeout(third,9000)
        function first(){
            alert(`Buy this course`)
        }
        function second(){
            alert(`this is not a scam`)
        }
        function third(){
            alert(`buy it!`)
        }

        // clearTimeout()- at any time if you want to clear the setTimeout function then we use this
        document.getElementById("myButton").onclick = function(){
            clearTimeout(timer1)
            clearTimeout(timer2)
            clearTimeout(timer3)
        }

        // setInterval() - invokes a function repeatedly after a number of milliseconds
        let max = window.prompt("enter a number")
        max = Number(max)

        let count = 0
        let timer = setInterval(countUp,1000)
        function countUp(){
            count +=1
            console.log(count)
            if(count>=max){
                clearInterval(timer)
            }
        }