let a,b;
document.getElementById("mybutton").onclick= function()
{
    a=Number(document.getElementById("mytext1").value);
    b=Number(document.getElementById("mytext2").value);
    c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
    document.getElementById("p1").innerHTML="c:"+c
}