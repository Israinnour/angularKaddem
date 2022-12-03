import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentsListComponent } from './students-list/students-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { StudentServiceService } from '../core/services/student-service.service';

@NgModule({
  declarations: [
    StudentsListComponent,
    AddStudentComponent
  ],
  providers:[StudentServiceService],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule

  ]
})
export class StudentModule { }
