// console.dir(window();
// console.log(window.innerWidth);
// console.log(window.innerHeight);

// console.log(window.scrollX);
// console.log(window.scrollY);

// console.log(window.location)
// window.location.href="https://google.com"

// console.log(window.location.hostname);
// console.log(window.location.pathname);
choices=["rock","paper","scissor"]
choice=choices[Math.floor(Math.random()*100)%3]
// console.log(choice);
document.getElementById("mydiv").onclick= ()=>
{
    console.log("baakaa!")
}

const start =document.querySelectorAll(".mybtn")
start.forEach((Element)=>{Element.onclick= ()=>
    {
        document.getElementById("mydiv").style.height=700+"px";
        t=document.getElementById("choosetext");
        t.style.display="none";
        q=document.querySelectorAll(".mytext");
        q.forEach((element)=>{element.style.display="block"});
        btns=document.querySelectorAll(".mybtn");
        btns.forEach((btn)=>{
            btn.style.display="none";
        // if(Element.id=="myrckbtn")console.log("hello");
        myply=document.getElementById("myply");
        mycomp=document.getElementById("mycomp");
        myres=document.getElementById("myres");
        switch(Element.id)
        {
            case "myrckbtn":if(choice=="scissor")
            {
                myply.innerHTML="<p>Player:</p><img src='rock.png'>";
                mycomp.innerHTML="<p>Computer:</p><img src='scissors.png'>";
                myres.innerHTML="Result:You Win!!";
            }
            else if(choice=="rock")
            {
                myply.innerHTML="<p>Player:</p><img src='rock.png'>";
                mycomp.innerHTML="<p>Computer:</p><img src='rock.png'>";
                myres.innerHTML="Result:Draw!";
            }
            else
            {
                myply.innerHTML="<p>Player:</p><img src='rock.png'>";
                mycomp.innerHTML="<p>Computer:</p><img src='paper.png'>";
                myres.innerHTML="Result:You Lost!!";
            }
            break;


            case "mypprbtn":if(choice=="scissor")
            {
                myply.innerHTML="<p>Player:</p><img src='paper.png'>";
                mycomp.innerHTML="<p>Computer:</p><img src='scissors.png'>";
                myres.innerHTML="Result:You Lost!!";
            }
            else if(choice=="rock")
            {
                myply.innerHTML="<p>Player:</p><img src='paper.png'>";
                mycomp.innerHTML="<p>Computer:</p><img src='rock.png'>";
                myres.innerHTML="Result:You Win!";
            }
            else
            {
                myply.innerHTML="<p>Player:</p><img src='paper.png'>";
                mycomp.innerHTML="<p>Computer:</p><img src='paper.png'>";
                myres.innerHTML="Result:Draw!!";
            }
            break;

            case "myscrbtn":if(choice=="scissor")
            {
                myply.innerHTML="<p>Player:</p><img src='scissors.png'>";
                mycomp.innerHTML="<p>Computer:</p><img src='scissors.png'>";
                myres.innerHTML="Result:Draw!!";
            }
            else if(choice=="rock")
            {
                myply.innerHTML="<p>Player:</p><img src='scissors.png'>";
                mycomp.innerHTML="<p>Computer:</p><img src='rock.png'>";
                myres.innerHTML="Result:You Lost!";
            }
            else
            {
                myply.innerHTML="<p>Player:</p><img src='scissors.png'>";
                mycomp.innerHTML="<p>Computer:</p><img src='paper.png'>";
                myres.innerHTML="Result:You Win!!";
            }
            break;
        }
        })

        q=document.getElementById("playagain").style.display="block";
        
    }})
