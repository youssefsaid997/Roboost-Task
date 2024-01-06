import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentTableComponent } from './components/student-table/student-table.component';
import { AddStudentComponent } from './components/add-student/add-student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentTableComponent,
    AddStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
