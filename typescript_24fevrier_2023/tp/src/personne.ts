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

class Personne {
    prenom : string ;
    nom : string ;
    age : number ;

    constructor(prenom : string = "", 
                nom : string = "",
                age : number = 0 ){
       this.prenom = prenom;
       this.nom = nom;
       this.age = age;
    }

    incrementerAge(){
        this.age=this.age+1;
    }
}

let p1 : Personne ;
p1 = new Personne();
p1.prenom = "jean"; p1.nom = "Bon"; p1.age=40;
p1.incrementerAge();
console.log(p1.prenom + " " + p1.nom + " " + p1.age);
console.log(JSON.stringify(p1));

let p2 = new Personne("alain" , "Therieur" , 30);
console.log(JSON.stringify(p2));
