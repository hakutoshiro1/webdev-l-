num=Math.floor(Math.random()*10+1);
document.getElementById("mybutton").onclick= function()
{
    guess=Number(document.getElementById("myguess").value);
    // console.log(num);
    // console.log(guess);
    if(guess<num)
    {
        document.getElementById("mytext").innerHTML=`Entered guess ${guess} is less than victory number.<br>Please try some large guess:`
        document.getElementById("myguess").value='';
    }
    else if(guess>num)
    {
        document.getElementById("mytext").innerHTML=`Entered guess ${guess} is greater than victory number.<br>Please try some small guess:`
        document.getElementById("myguess").value='';    
    }
    else if(guess==num)
    {
        document.getElementById("mytext").innerHTML=`Hurray you found it.`
        document.getElementById("myguess").value='';
        document.getElementById("mq").innerHTML='<a href="index.html"><button id="playagain" >Play again</button></a>';
    }
    else
    {
        document.getElementById("mytext").innerHTML="Enter Number not Letters."
        document.getElementById("myguess").value='';   
    }
}
