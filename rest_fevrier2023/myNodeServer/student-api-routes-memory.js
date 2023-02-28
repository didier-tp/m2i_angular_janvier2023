//var express = require('express');
import express from 'express' ;

const apiRouter = express.Router();

var allStudents =[];
var codeMax=4; //pour simulation auto_incr 
allStudents.push({ID:1,FirstMidName:"Carson",LastName:"Alexander",EnrollmentDate:"2005-09-01"});
allStudents.push({ID:2,FirstMidName:"Meredith",LastName:"Alonso",EnrollmentDate:"2002-09-01"});
allStudents.push({ID:3,FirstMidName:"Arturo",LastName:"Anand",EnrollmentDate:"2003-09-01"});
allStudents.push({ID:4,FirstMidName:"Gytis",LastName:"Barzdukas",EnrollmentDate:"2002-09-01"});
allStudents.push({ID:5,FirstMidName:"Yan",LastName:"Li",EnrollmentDate:"2002-09-01"});
allStudents.push({ID:6,FirstMidName:"Peggy",LastName:"Justice",EnrollmentDate:"2001-09-01"});
allStudents.push({ID:7,FirstMidName:"Laura",LastName:"Norman",EnrollmentDate:"2003-09-01"});
allStudents.push({ID:8,FirstMidName:"Nino",LastName:"Olivetto",EnrollmentDate:"2005-09-01"});


function findStudentInArrayByID(students,ID){
    let student=null;
    for(let i in students){
        if(students[i].ID == ID){
            student=students[i]; break;
        }
    }
    return student;
}

function removeStudentInArrayByID(students,ID){
    let delIndex;
    for(let i in students){
        if(students[i].ID == ID){
            delIndex=i; break;
        }
    }
    if(delIndex){
      students.splice(delIndex,1);
    }
}





//exemple URL: http://localhost:8282/api/Students/1
apiRouter.route('/api/Students/:id')
.get( function(req , res , next ) {
    let idStudent = req.params.id;
    let student = findStudentInArrayByID(allStudents,idStudent);
    res.send(student);
});

// exemple URL: http://localhost:8282/api/Students
// returning all students 
apiRouter.route('/api/Students')
.get( function(req , res , next ) {
        res.send(allStudents);
});

// http://localhost:8282/api/Students en mode post
// avec 
//ou bien { "FirstMidName":"prenom","LastName":"nom","EnrollmentDate":"2023-02-28"}
//dans req.body
apiRouter.route('/api/Students')
.post( function(req , res , next ) {
    let nouveauStudent = req.body;
    //console.log("req.body="+req.body);
   
    //simulation auto_incr :{"ID":null,"FirstMidName":"prenom","LastName":"nom","EnrollmentDate":"2023-02-28"}
    if(nouveauStudent.ID == null){
        codeMax++; nouveauStudent.ID = codeMax;
    }
    console.log("POST,nouveauStudent="+JSON.stringify(nouveauStudent));
    allStudents.push(nouveauStudent);
    res.send(nouveauStudent);
});

// http://localhost:8282/api/Students en mode PUT
// avec {"ID":1,"FirstMidName":"prenom","LastName":"nom","EnrollmentDate":"2023-02-28"}
// dans req.body
apiRouter.route('/api/Students')
.put( function(req , res , next ) {
    let newValueOfStudentToUpdate = req.body;
    console.log("PUT,newValueOfStudentToUpdate="
            +JSON.stringify(newValueOfStudentToUpdate));
    let studentToUpdate =
       findStudentInArrayByID(allStudents,newValueOfStudentToUpdate.ID);
    if(studentToUpdate!=null){
        studentToUpdate.FirstMidName = newValueOfStudentToUpdate.FirstMidName;
        studentToUpdate.LastName = newValueOfStudentToUpdate.LastName;
        studentToUpdate.EnrollmentDate = newValueOfStudentToUpdate.EnrollmentDate;
        res.send(studentToUpdate);
    }else{
    res.status(404).json({ error : "no Student to update with ID=" +
        newValueOfStudentToUpdate.ID });
    }
});

// http://localhost:8282/api/Students/1 
// en mode DELETE
apiRouter.route('/api/Students/:id')
.delete( function(req , res , next ) {
    let idStudent = req.params.id;
    console.log("DELETE,idStudent="+idStudent);
    let studentToDelete =
        findStudentInArrayByID(allStudents,idStudent);
    if(studentToDelete){
        removeStudentInArrayByID(allStudents,idStudent);
      res.send({ deletedStudentId : idStudent } );
    }else{
        res.status(404).json({ error : "no student to delete with ID=" +
        idStudent });
    }
});

//export { apiRouter };//pour import * as studentApiRoutes from './student-api-routes-memory.js';
export default { apiRouter };//pour import studentApiRoutes from './student-api-routes-memory.js';