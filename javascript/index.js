// console.log("I like pizza!");
// window.alert("hello");
// let x=10;
// console.log(x);
// x="10*(5+4)"
// document.getElementById("p1").innerHTML=x;


// Input method
// let username;
// document.getElementById("mybutton").onclick= function()
// {
//     username=document.getElementById("mytext").value;
//     console.log(username);
//     document.getElementById("mylabel").innerHTML=username;
// }


// Type conversion
// let x="10*(5+4)"; Not applicable this way.
// let x="14";
// let y=Number(x);
// console.log(y);
// let x=String(10+2*(5-2));
// let x="10+2*(5-2)"
// console.log(typeof(x));
// console.log(x);

// Array.foreach -passes each element in given function.
// Array.map -creates new array with values returned from given function.
// Array.filter -creates new array with values that passes condition provided by function.
// Array.reduce -reduces array to a single value.eg - total a array/concanate all string . requires function with two arguments total/concatanatedstring and next element to be passed by for each method.
// array.sort(ascendingSort(x-y)/descendingSort(y-x)) - sorts in ascending or descending.
// arrow function => remove keyword function.

// let username="hello bro";
// let calfun= (username) => {console.log(username)};
// let addstr=(username ,dosomething) =>{ dosomething(username)};
// addstr(username,calfun);
// calfun(username);
// let arr=[1,2,3,4,5,6]
// let des =(x,y) =>y-x;
// arr=arr.sort(des);
// arr.forEach(Element =>{ console.log(Element)});

// class constructor object objects as argument

// class Cars{
//     constructor(model)
//     {
//         this.model=model;
//     }
// }
// const car1=new Cars("lambo")
// displayinfo = (a) =>
// {
//     console.log(a.model);
//     console.log(a.model)
// };
// // displayinfo(car1);
// changemodel= (a,dosomething,modell) =>
// {
//     a.model=modell;
//     dosomething(a);
// }
// changemodel(car1,displayinfo,"bullet");


a="abcdefghijklmnopqrstuvwxyz"
c=""
for(i=0;i<100;i+=1)
{
    b=Math.floor(Math.random()*26);
    c+=a[b]; 
}
console.log(c);