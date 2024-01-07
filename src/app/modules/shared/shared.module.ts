import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../shared/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [InputComponent, FormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[InputComponent , FormComponent]
})
export class SharedModule { }
