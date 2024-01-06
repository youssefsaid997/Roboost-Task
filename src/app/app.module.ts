import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentModule } from './modules/student/student.module';
import { EditStudentComponent } from './components/edit-student/edit-student.component';


@NgModule({
  declarations: [
    AppComponent,
    EditStudentComponent,
  ],
  imports: [
    BrowserModule,
    StudentModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
