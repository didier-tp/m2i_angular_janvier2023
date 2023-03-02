import { Component } from '@angular/core';
import { Student } from '../common/data/student';
import { StudentService } from '../common/service/student.service';
import { firstValueFrom } from 'rxjs';
import { messageFromError } from '../common/util/utils';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  studentList : Student[] = []; //à afficher
  selectedStudent : Student | null = null; 
  student = new Student() ; //à saisir dans un formulaire
  message = "";

  constructor(public studentService : StudentService){
    this.recupererStudents();
  }

  clone(obj : object){
    return JSON.parse(JSON.stringify(obj));
  }

  removeStudentInArray(students : Student[],student : Student){
    let delIndex=-1;
    for(let i =0;i<students.length; i++){
        if(students[i] == student){
            delIndex=i; break;
        }
    }
    if(delIndex>=0){
      students.splice(delIndex,1);
    }
}



  onSelect(s:Student){
    this.selectedStudent = s;
    this.message="selected student:"+s.id;
    //this.student = s; //référence directe : PAS BIEN , PAS BON COMPOERTEMENT
    this.student = this.clone(s); //this.student est une copie de s , BIEN ,  BON COMPOERTEMENT
  }

  async onUpdate(){
    try{
      await firstValueFrom(this.studentService.putStudents$(this.student));
      if(this.selectedStudent!=null){
           this.selectedStudent.firstMidName = this.student.firstMidName;
           this.selectedStudent.lastName = this.student.lastName;
           this.selectedStudent.enrollmentDate = this.student.enrollmentDate;
      }
   }catch(err){
    this.message = messageFromError(<any> err , "echec update ");
    console.log("error:"+ this.message );
   }
  }

  onNew(){
    //on remet toutes les zones de saisies à blanc/rien
    //pour pouvoir saisir un nouveau Student
    //avant de déclencher Add/post
    this.student = new Student();
    this.selectedStudent = null;
    this.message="new student (before add/post)"
  }

  async onAdd(){
    try{
      let addedStudent = await firstValueFrom(this.studentService.postStudents$(this.student));
      this.studentList.push(addedStudent);
      this.student.id=addedStudent.id;
      this.selectedStudent = addedStudent;
      this.message="succesfully added student: " + this.selectedStudent.id;
   }catch(err){
    this.message = messageFromError(<any> err , "echec add/post ");
    console.log("error:"+ this.message );
   }
  }

  async onDelete(){
    let studentIdToDelete = 0;
    if(this.selectedStudent==null || this.selectedStudent.id==null) 
        return;
    else 
       studentIdToDelete = this.selectedStudent.id;
    try{
      await firstValueFrom(this.studentService.deleteStudents$(studentIdToDelete));
      this.message="succesfully deleted student: " + this.selectedStudent.id;
      this.removeStudentInArray(this.studentList,this.selectedStudent);
      this.selectedStudent=null;
      this.student = new Student();
   }catch(err){
     this.message = messageFromError(<any> err , "echec deleteStudents$ ");
     console.log("error:"+ this.message );
   }
  }

  async recupererStudents(){
    try{
       this.studentList = await firstValueFrom(this.studentService.getAllStudents$());
    }catch(err){
      this.message = messageFromError(<any> err , "echec getAllStudents$ ");
      console.log("error:"+ this.message );
    }
  }

}
