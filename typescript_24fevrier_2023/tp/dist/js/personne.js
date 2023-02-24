"use strict";
class Personne {
    constructor() {
        this.prenom = "";
        this.nom = "";
        this.age = 0;
    }
    incrementerAge() {
        this.age = this.age + 1;
    }
}
let p1;
p1 = new Personne();
p1.prenom = "jean";
p1.nom = "Bon";
p1.age = 40;
p1.incrementerAge();
console.log(p1.prenom + " " + p1.nom + " " + p1.age);
console.log(JSON.stringify(p1));
