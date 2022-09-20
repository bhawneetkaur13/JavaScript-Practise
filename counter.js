let count = 0;
        let x;
        let y;
        let z;
        document.getElementById("increase").onclick=function(){
            count+=1;
            document.getElementById("countl").innerHTML=count
        }
        document.getElementById("decrease").onclick=function(){
            count-=1;
            document.getElementById("countl").innerHTML=count
        }
        document.getElementById("reset").onclick=function(){
            count=0;
            document.getElementById("countl").innerHTML=count
        }
        document.getElementById("roll").onclick=function(){
            x=Math.floor(Math.random()*7)
            y=Math.floor(Math.random()*7)
            z=Math.floor(Math.random()*7)
            document.getElementById("xlabel").innerHTML=x
            document.getElementById("ylabel").innerHTML=y
            document.getElementById("zlabel").innerHTML=z
        }