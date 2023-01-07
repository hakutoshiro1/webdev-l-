let temperature;
document.getElementById("mybutton").onclick=function()
{
    if(document.getElementById("tocel").checked)
    {
        temperature=Number(document.getElementById("mytemp").value);
        let cel;
        cel=(temperature-32)*5/9;
        document.getElementById("output").innerHTML=`temperature=${temperature}F=${cel}C`;
    }
    else if(document.getElementById("tofah").checked)
    {
        temperature=Number(document.getElementById("mytemp").value);
        let fah;
        fah=temperature*1.8+32;
        document.getElementById("output").innerHTML=`temperature=${temperature}C=${fah}F`;
    }
    else
    {
        document.getElementById("output").innerHTML=`select unit.`;
    }
}