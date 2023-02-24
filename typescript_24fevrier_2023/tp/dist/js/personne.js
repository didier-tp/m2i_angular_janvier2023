"use strict";
/*
//V1 sans constructor:
class Personne {
    prenom : string = "";
    nom : string ="";
    age : number =0 ;

    incrementerAge(){
        this.age=this.age+1;
    }
}
*/
/*
//Version 2
class Personne {
    public prenom : string ;
    public nom : string ;
    private _age : number ;
    private email : string | null = null;

    public get age(){
        return this._age;
    }

    public set age(newAge: number){
       if(newAge>=0) this._age=newAge;
       else throw "age negatif invalide";
    }

    constructor(prenom : string = "",
                nom : string = "",
                age : number = 0 ){
       this.prenom = prenom;
       this.nom = nom;
       this._age = age;
    }

    incrementerAge(){
        this._age=this._age+1;
        if(this.email != null)
           console.log("taille email=" + this.email.length);
    }
}
*/
class Personne {
    constructor(prenom = "", nom = "", _age = 0) {
        this.prenom = prenom;
        this.nom = nom;
        this._age = _age;
        this.email = null;
    }
    incrementerAge() {
        this._age = this._age + 1;
        if (this.email != null)
            console.log("taille email=" + this.email.length);
    }
    get age() {
        return this._age;
    }
    set age(newAge) {
        if (newAge >= 0)
            this._age = newAge;
        else
            throw "age negatif invalide";
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
let p2 = new Personne("alain", "Therieur", 30);
try {
    p2.age = -5;
}
catch (erreur) {
    console.log(erreur);
}
console.log(JSON.stringify(p2));
