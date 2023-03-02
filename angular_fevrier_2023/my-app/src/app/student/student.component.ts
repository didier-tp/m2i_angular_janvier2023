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



  onSelect(s:Student){
    this.selectedStudent = s;
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

  async recupererStudents(){
    try{
       this.studentList = await firstValueFrom(this.studentService.getAllStudents$());
    }catch(err){
      this.message = messageFromError(<any> err , "echec getAllStudents$ ");
      console.log("error:"+ this.message );
    }
  }

}
