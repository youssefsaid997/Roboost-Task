import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './modules/shared/shared.module';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    EditStudentComponent,
    WelcomePageComponent,
    ErrorPageComponent,
    SignUpComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
