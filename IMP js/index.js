// Not working code:
// element[0].style.backgroundColor='lightgreen';
// cars[0].style.backgroundColor='lightgreen';
// const car =fruit => {
    //     fruit.style.backgroundColor='lightgreen';
    // };
    
    
    
// working code:
// element=document.querySelectorAll("li");
// element.forEach(fruit => {
//     fruit.style.backgroundColor='lightgreen';
// });
// cars=document.querySelectorAll(".cars");
// cars.forEach(element=>{element.style.backgroundColor='lightgreen';});
// console.log(cars);
// cars.foreach(elemnt=> {car(elemnt)});
// for (let i = 0; i < cars.length; i++) {
//     const element = cars[i];
//     element.style.backgroundColor='lightgreen';
// }
// for(car of cars)
// {
//     car.style.backgroundColor='lightblue';
// }



// DOM traversal techniques:
// .firstElementChild
// .lastElementChild
// .parentElement
// .nextElementSibling
// .previousElementSibling
// .children[] // needs Array.from to iterate
// Array.from(.children)


// Add /change elements in html:
// const mylist= document.querySelector("#ca");
// const newelement=document.createElement("div");
// newelement.textContent="Toyota";
// mylist.append(newelement);

// const mylist1= document.querySelector("#fruits");
// const newelement1=document.createElement("li");
// newelement1.textContent="mango";
// mylist1.append(newelement1);

// const mydi=document.getElementById("mydiv");
// mydi.style.backgroundColor='lightblue';



// add/change css properties:
const title=document.getElementById("mytitle");
title.style.backgroundColor="#222222";
title.style.fontFamily='consolas';
title.style.textAlign="center";
title.style.color='rgb(50,200,250)';
title.style.border="2px";
title.style.border="solid";

// events:
// onclick
//  onload .....

// add event listner 
const button= document.getElementById("mybutton");
const imge=    document.getElementById("myimg");
// method1:
// button.addEventListener("click",()=>{
//     if(imge.style.display=="none")
//     {
//         imge.style.display="block";
//     }
//     else imge.style.display="none";
// })
// method2:
button.addEventListener("click",()=>{
        if(imge.style.visibility=="hidden")
        {
            imge.style.visibility="visible";
        }
        else imge.style.visibility="hidden";
    })
