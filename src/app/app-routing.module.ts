import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './modules/student/main/main.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';


const routes: Routes = [{path:"student", loadChildren:()=>{
  return import('../app/modules/student/student.module').then((module) => module.StudentModule)
}},{path:"student/:id" ,component:EditStudentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
