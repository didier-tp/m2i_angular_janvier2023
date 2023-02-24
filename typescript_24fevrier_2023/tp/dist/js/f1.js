"use strict";
let a;
a = 8;
console.log(a);
//let b :number = 9;
let b = 9; // le type :number est déduit de la valeur initiale
b = b + 1;
console.log(b);
let jours;
jours = ["lundi", "mardi"];
jours.push("mercredi");
for (let i = 0; i < jours.length; i++)
    console.log(jours[i]);
for (let i in jours)
    console.log(jours[i]);
for (let val of jours)
    console.log(val);
