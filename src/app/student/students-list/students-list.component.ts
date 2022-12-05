import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { get } from 'https';
import { student } from 'src/app/core/models/student';
import { StudentServiceService } from 'src/app/core/services/student-service.service';
import { DeleteStudentComponent } from '../delete-student/delete-student.component';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  isHidden=true;
 id!:Number;
  studentList:student[]=[]
  constructor(private studentService :StudentServiceService,private route:Router) { }
  adding=false; 
  ngOnInit(): void {
    this.getStudents();
  }
  getStudents(){
    this.studentService.getAllStudents().subscribe(data=>this.studentList=data);
    console.log(this.studentList);
  }
  addform(){
    this.adding= !this.adding;
  }

 
  show(){
    this.isHidden=false;
  }
  hide(){
    this.isHidden=true;
  }
  DeleteStudent(idEtudient:any){
    this.studentService.deleteStudent(Number(idEtudient)).subscribe(()=>this.getStudents());
    this.removeElementFromArray(idEtudient);
    this.isHidden=true;

   }
   removeElementFromArray(id: number) {
    this.studentList.forEach((student,index)=>{
        if(student.idEtudiant==id) this.studentList.splice(index,1);
    });
}
   
   

}
