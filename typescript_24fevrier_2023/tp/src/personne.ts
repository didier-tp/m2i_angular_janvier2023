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
    public email : string | null = null;

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

export class Personne {
    public email : string | null = null;

    constructor(public prenom : string = "", 
                public nom : string = "",
                private _age : number = 0 ){
    }

    incrementerAge(){
        this._age=this._age+1;
        if(this.email != null)
           console.log("taille email=" + this.email.length);
    }

    public get age(){
        return this._age;
    }

    public set age(newAge: number){
       if(newAge>=0) this._age=newAge;
       else throw "age negatif invalide";
    }
}

