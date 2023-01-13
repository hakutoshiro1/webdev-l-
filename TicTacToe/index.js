alternate=true;
tablearr=["","","","","","","","",""];
count=0;
const checker=(arr,i)=>
{
    switch(i)
    {
        case 0:if((arr[0]==arr[1]&&arr[0]==arr[2])||(arr[0]==arr[4]&&arr[0]==arr[8])||(arr[0]==arr[3]&&arr[0]==arr[6]))
                {document.getElementById("mytitle").innerHTML="<h1>You Win!!</h1>";
				document.getElementById("mylink").style.display="block";}
                break;
        case 1:if((arr[0]==arr[1]&&arr[0]==arr[2])||(arr[1]==arr[4]&&arr[1]==arr[7]))
                {document.getElementById("mytitle").innerHTML="<h1>You Win!!</h1>";
				document.getElementById("mylink").style.display="block";}
                break;
        case 2:if((arr[0]==arr[1]&&arr[0]==arr[2])||(arr[2]==arr[4]&&arr[2]==arr[6])||(arr[2]==arr[5]&&arr[2]==arr[8]))
                {document.getElementById("mytitle").innerHTML="<h1>You Win!!</h1>";
                document.getElementById("mylink").style.display="block";}
				break;
        case 3:if((arr[3]==arr[4]&&arr[3]==arr[5])||(arr[3]==arr[0]&&arr[3]==arr[6]))
                {document.getElementById("mytitle").innerHTML="<h1>You Win!!</h1>";
                document.getElementById("mylink").style.display="block";}
				break;
        case 4:if((arr[3]==arr[4]&&arr[3]==arr[5])||(arr[2]==arr[4]&&arr[2]==arr[6])||(arr[0]==arr[4]&&arr[0]==arr[8])||(arr[1]==arr[4]&&arr[1]==arr[7]))
                {document.getElementById("mytitle").innerHTML="<h1>You Win!!</h1>";
                document.getElementById("mylink").style.display="block";}
				break;
        case 5:if((arr[3]==arr[4]&&arr[3]==arr[5])||(arr[2]==arr[5]&&arr[2]==arr[8]))
                {document.getElementById("mytitle").innerHTML="<h1>You Win!!</h1>";
                document.getElementById("mylink").style.display="block";}
				break;
        case 6:if((arr[6]==arr[7]&&arr[6]==arr[8])||(arr[0]==arr[3]&&arr[0]==arr[6])||(arr[2]==arr[4]&&arr[2]==arr[6]))
                {document.getElementById("mytitle").innerHTML="<h1>You Win!!</h1>";
                document.getElementById("mylink").style.display="block";}
				break;
        case 7:if((arr[6]==arr[7]&&arr[6]==arr[8])||(arr[1]==arr[4]&&arr[1]==arr[7]))
                {document.getElementById("mytitle").innerHTML="<h1>You Win!!</h1>";
				document.getElementById("mylink").style.display="block";}
				break;
        case 8:if((arr[6]==arr[7]&&arr[6]==arr[8])||(arr[2]==arr[5]&&arr[2]==arr[8])||(arr[0]==arr[4]&&arr[0]==arr[8]))
                {document.getElementById("mytitle").innerHTML="<h1>You Win!!</h1>";
				document.getElementById("mylink").style.display="block";}
                break;  
    }           
}
mydivs=document.querySelectorAll(".mydivs");

mydivs.forEach((gameplay)=>
{
	
    gameplay.onclick=()=>
    {
        turn1="myimg1";
        turn2="myimg2";
        if(alternate)
        {
            img1=turn1+gameplay.id[2];
            img2=turn2+gameplay.id[2];
            myimg1=document.getElementById(img1);
            myimg2=document.getElementById(img2);
            playg=document.getElementById(gameplay.id);
            // console.log(myimg1.style.display=="none"&&myimg2.style.display=="none" )
            if(myimg1.style.display=="none"&&myimg2.style.display=="none"&&document.getElementById("mylink").style.display=="none")
            {
                myimg1.style.display='block';
                tablearr[Number(gameplay.id[2])-1]="o"
                checker(tablearr,Number(gameplay.id[2])-1);
                // console.log(tablearr);
                count+=1;
                alternate=false;
            }
        }
        else
        {
            img1=turn1+gameplay.id[2];
            img2=turn2+gameplay.id[2];
            myimg1=document.getElementById(img1);
            myimg2=document.getElementById(img2);
            playg=document.getElementById(gameplay.id);
            if(myimg1.style.display=='none'&&myimg2.style.display=='none'&&document.getElementById("mylink").style.display=="none")
            {
                myimg2.style.display='block';
                tablearr[Number(gameplay.id[2])-1]="x"
                checker(tablearr,Number(gameplay.id[2])-1);
                count+=1;
                // console.log(tablearr);
                alternate=true;
            }
        }
    
    
		if(count>8)
		{
			document.getElementById("mytitle").innerHTML="<h1>Draw!!</h1>";
			document.getElementById("mylink").style.display="block";
		}
    }
})