//var express = require('express');
import express from 'express' ;

const apiRouter = express.Router();

var allStudents =[];
var codeMax=8; //pour simulation auto_incr 
allStudents.push({id:1,firstMidName:"Carson",lastName:"Alexander",enrollmentDate:"2005-09-01"});
allStudents.push({id:2,firstMidName:"Meredith",lastName:"Alonso",enrollmentDate:"2002-09-01"});
allStudents.push({id:3,firstMidName:"Arturo",lastName:"Anand",enrollmentDate:"2003-09-01"});
allStudents.push({id:4,firstMidName:"Gytis",lastName:"Barzdukas",enrollmentDate:"2002-09-01"});
allStudents.push({id:5,firstMidName:"Yan",lastName:"Li",enrollmentDate:"2002-09-01"});
allStudents.push({id:6,firstMidName:"Peggy",lastName:"Justice",enrollmentDate:"2001-09-01"});
allStudents.push({id:7,firstMidName:"Laura",lastName:"Norman",enrollmentDate:"2003-09-01"});
allStudents.push({id:8,firstMidName:"Nino",lastName:"Olivetto",enrollmentDate:"2005-09-01"});


function findStudentInArrayByid(students,id){
    let student=null;
    for(let i in students){
        if(students[i].id == id){
            student=students[i]; break;
        }
    }
    return student;
}

function removeStudentInArrayByid(students,id){
    let delIndex;
    for(let i in students){
        if(students[i].id == id){
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
    let student = findStudentInArrayByid(allStudents,idStudent);
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
//ou bien { "firstMidName":"prenom","lastName":"nom","enrollmentDate":"2023-02-28"}
//dans req.body
apiRouter.route('/api/Students')
.post( function(req , res , next ) {
    let nouveauStudent = req.body;
    //console.log("req.body="+req.body);
   
    //simulation auto_incr :{"id":null,"firstMidName":"prenom","lastName":"nom","enrollmentDate":"2023-02-28"}
    if(nouveauStudent.id == null || nouveauStudent.id == 0){
        codeMax++; nouveauStudent.id = codeMax;
    }
    console.log("POST,nouveauStudent="+JSON.stringify(nouveauStudent));
    allStudents.push(nouveauStudent);
    res.send(nouveauStudent);
});

// http://localhost:8282/api/Students/1 en mode PUT
// avec {"id":1,"firstMidName":"prenom","lastName":"nom","enrollmentDate":"2023-02-28"}
// dans req.body
apiRouter.route('/api/Students/:id')
.put( function(req , res , next ) {
    let newValueOfStudentToUpdate = req.body;
    console.log("PUT,newValueOfStudentToUpdate="
            +JSON.stringify(newValueOfStudentToUpdate));
	let idStudent = req.params.id;
	if(newValueOfStudentToUpdate==null || newValueOfStudentToUpdate.id != idStudent)
	{ res.status(400).send();//BadRequest 
     return;
	 }
    let studentToUpdate =
       findStudentInArrayByid(allStudents,newValueOfStudentToUpdate.id);
    if(studentToUpdate!=null){
        studentToUpdate.firstMidName = newValueOfStudentToUpdate.firstMidName;
        studentToUpdate.lastName = newValueOfStudentToUpdate.lastName;
        studentToUpdate.enrollmentDate = newValueOfStudentToUpdate.enrollmentDate;
        //res.send(studentToUpdate);
		res.status(204).send(); //no_content
    }else{
    res.status(404).json({ error : "no Student to update with id=" +
        newValueOfStudentToUpdate.id });
    }
});

// http://localhost:8282/api/Students/1 
// en mode DELETE
apiRouter.route('/api/Students/:id')
.delete( function(req , res , next ) {
    let idStudent = req.params.id;
    console.log("DELETE,idStudent="+idStudent);
    let studentToDelete =
        findStudentInArrayByid(allStudents,idStudent);
    if(studentToDelete){
        removeStudentInArrayByid(allStudents,idStudent);
       //res.send({ deletedStudentId : idStudent } );
	   res.status(204).send(); //no_content
    }else{
        res.status(404).json({ error : "no student to delete with id=" +
        idStudent });
    }
});

//export { apiRouter };//pour import * as studentApiRoutes from './student-api-routes-memory.js';
export default { apiRouter };//pour import studentApiRoutes from './student-api-routes-memory.js';