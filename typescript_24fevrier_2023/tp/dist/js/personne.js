"use strict";
class Personne {
    constructor() {
        this.prenom = "";
        this.nom = "";
        this.age = 0;
    }
}
let p1;
p1 = new Personne();
console.log(p1.prenom + " " + p1.nom + " " + p1.age);
