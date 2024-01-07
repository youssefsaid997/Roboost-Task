import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './modules/student/main/main.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'signup', component: SignUpComponent , },
  { path: 'login', component: LoginComponent },
  {
    path: 'student',
    loadChildren: () => {
      return import('../app/modules/student/student.module').then(
        (module) => module.StudentModule
        );
      },
      canActivate:[authGuard]
    },
    { path: 'student/:id', component: EditStudentComponent,canActivate:[authGuard] },
    { path: '', component: WelcomePageComponent },
    { path: '*', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
