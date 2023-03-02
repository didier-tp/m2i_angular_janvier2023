import { Component } from '@angular/core';
import { Student } from '../common/data/student';
import { StudentService } from '../common/service/student.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  studentList : Student[] = []; //à afficher

  constructor(public studentService : StudentService){
    this.recupererStudents();
  }

  async recupererStudents(){
    try{
       this.studentList = await firstValueFrom(this.studentService.getAllStudents$());
    }catch(err){
       console.log("err="+err);
    }
  }

}
