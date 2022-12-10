import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Competence } from 'src/app/core/models/Competence';
import { student } from 'src/app/core/models/student';
import { StudentServiceService } from 'src/app/core/services/student-service.service';
import { CompetenceService } from 'src/app/core/services/competence.service' ;


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  @Input() studentList!:student[];

  @Output() addingModeOff = new EventEmitter()
  

  ShSkillsform=false ;

  reactiveForm = this.fb.group({
    firstName:['', [Validators.required, Validators.minLength(3)]],
    lastName: ['',[Validators.required]],
    option:['',[Validators.required]],
    });
    
    Skillsform = this.fb.group({
      nomCompetence:['', [Validators.required, Validators.minLength(3)]],
      type: ['',[Validators.required]],
      niveauC:['',[Validators.required]],
      });

    skills(){
    this.ShSkillsform = !this.ShSkillsform      
    }
    

    addStudent(){
     let etudiant =new student();
     etudiant.nomE=this.reactiveForm.get('firstName')?.value;
     etudiant.prenomE=this.reactiveForm.get('lastName')?.value;
     etudiant.option=this.reactiveForm.get('option')?.value;

     this.studentService.addStudent(etudiant).subscribe(etudiant=>this.studentList.push(etudiant as student));
     this.addingModeOff.emit();

    }


    addWithCompetence(){
       let etudiant =new student();
     etudiant.nomE=this.reactiveForm.get('firstName')?.value;
     etudiant.prenomE=this.reactiveForm.get('lastName')?.value;
     etudiant.option=this.reactiveForm.get('option')?.value;
      let c = new Competence(); 
      c.nomCompetence=this.Skillsform.get('nomCompetence')?.value;
      c.type=this.Skillsform.get('type')?.value;
      c.etudiants.push(etudiant);
      c.niveauC=this.Skillsform.get('niveauC')?.value;

      this.competenceService.AddCompetenceAndAssign(c).subscribe(etudiant=>this.studentList.push(etudiant as student))
    }
  constructor(private fb:FormBuilder,private studentService:StudentServiceService ,private competenceService:CompetenceService) { }

  ngOnInit(): void {
  }

}
