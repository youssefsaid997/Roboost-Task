import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './modules/student/main/main.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';


const routes: Routes = [{path:"",component:WelcomePageComponent},{path:"student", loadChildren:()=>{
  return import('../app/modules/student/student.module').then((module) => module.StudentModule)
}},{path:"student/:id" ,component:EditStudentComponent},{path:"*",component:ErrorPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
