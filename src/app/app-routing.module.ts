import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {path:'', redirectTo:'home', pathMatch:'full'},
 { path: 'studentList',
  loadChildren:()=>import('./student/student.module').then(x => x.StudentModule)}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
