import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentModule } from './modules/student/student.module';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';


@NgModule({
  declarations: [
    AppComponent,
    EditStudentComponent,
    WelcomePageComponent,
    ErrorPageComponent,
    InputComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StudentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
