import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  reactiveForm = this.fb.group({
    firstName:['', [Validators.required, Validators.minLength(3)]],
    lastName: ['',[Validators.required]],
    option:['',[Validators.pattern('[SE]||[GAMIX]||[SIM]||[NIDS]')]]
   
    });

    
    addStudent(){
      console.log(this.reactiveForm.getRawValue());
    }
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
