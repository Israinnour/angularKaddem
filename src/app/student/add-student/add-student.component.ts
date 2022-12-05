import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { student } from 'src/app/core/models/student';
import { StudentServiceService } from 'src/app/core/services/student-service.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  @Input() studentList!:student[];
  reactiveForm = this.fb.group({
    firstName:['', [Validators.required, Validators.minLength(3)]],
    lastName: ['',[Validators.required]],
    option:['',[Validators.required]]
   
    });

    
    addStudent(){
     let etudiant =new student();
     etudiant.nomE=this.reactiveForm.get('firstName')?.value;
     etudiant.prenomE=this.reactiveForm.get('lastName')?.value;
     etudiant.option=this.reactiveForm.get('option')?.value;

     this.studentService.addStudent(etudiant).subscribe(etudiant=>this.studentList.push(etudiant as student))
    }
  constructor(private fb:FormBuilder,private studentService:StudentServiceService) { }

  ngOnInit(): void {
  }

}
