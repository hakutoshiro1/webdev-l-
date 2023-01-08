// console.log("Hello")
const la=document.getElementById("mylabel");
let update= ()=>
{
    let date =new Date();
    // console.log(date);
    formatTime = (date) =>
    {
        let hours=date.getHours();
        let mins=date.getMinutes();
        let seconds=date.getSeconds();
        let ampm= hours>=12? "pm":"am";
        let check= (a) =>
        {
            a=String(a);
            a= a.length<2 ?  "0"+a : a;
            return a;
        }
        seconds=check(seconds);
        mins=check(mins);
        hours=hours%12||12;
        hours=check(hours);
        return `${hours}:${mins}:${seconds} ${ampm}`
        // console.log(seconds);
    }
    la.innerHTML=formatTime(date);
    // la.innerHTML=date;
}
// update();
setInterval( update,100);