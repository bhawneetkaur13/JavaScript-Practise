
        let guess = Math.floor(Math.random()* 11)
        let guesses = 0;
        document.getElementById("submit").onclick= function(){
            let answer = document.getElementById("answer").value
            guesses += 1;
            if(guess == answer){
                alert(`${answer} is the number. You took ${guesses} guesses`)
            }
            else if(answer < guess){
                alert("Too Small")
            }
            else if(answer > guess){
                alert("Too big")
            }
        }