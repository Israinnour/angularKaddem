import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { student } from 'src/app/core/models/student';
import { StudentServiceService } from 'src/app/core/services/student-service.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  studentList:student[]=[]
  constructor(private studentService :StudentServiceService,private route:Router) { }

  ngOnInit(): void {
    this.getStudents();
  }
  getStudents(){
    this.studentService.getAllStudents().subscribe(data=>this.studentList=data);
    console.log(this.studentList);
  }

}
