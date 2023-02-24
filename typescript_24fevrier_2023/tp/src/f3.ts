
function addV1(a :number,b:number) :number{
    return a+b;
}
let res1 = addV1(5,6); console.log("res1="+res1);

let addV2 = function(a :number,b:number) :number{
    return a+b;
}
let res2 = addV2(5,6); console.log("res2="+res2);

let addV3 = (a :number,b:number)  =>{   return a+b;}
let res3 = addV3(5,6); console.log("res3="+res3);