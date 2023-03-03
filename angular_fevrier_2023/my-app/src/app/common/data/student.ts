export class Student {
    constructor(
        public id :number| null= 0,
        public firstMidName : string = "",
        public lastName : string = "",
        public enrollmentDate : string = (new Date).toISOString().split('T')[0] ,
        public url : string =""
    ){}
}

//NB:  public id :number=0  pour bien communiquer avec version .NET / c#
//  et public id :number| null= null plus ideal pour version nodeJs (myNodeServer)