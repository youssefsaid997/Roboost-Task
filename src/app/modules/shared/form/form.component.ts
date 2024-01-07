import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-shared',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  
  @Output() createStudent = new EventEmitter()
  createStudentForm = new FormGroup({
    FirstName : new FormControl("",[Validators.required,Validators.minLength(3)]),
    LastName : new FormControl("",[Validators.required,Validators.minLength(3)]),
    Mobile : new FormControl("",[Validators.required,Validators.maxLength(12),Validators.minLength(12)]),
    Email : new FormControl("",[Validators.required,Validators.email]),
    NationalID : new FormControl("",[Validators.required,Validators.minLength(14),Validators.maxLength(14)]),
    Age : new FormControl("",[Validators.required , Validators.min(17),Validators.max(26)]),
  })

  onCreateStudent(event:Event){
    event.preventDefault()
    const data = this.createStudentForm.value;
    this.createStudent.emit(data)
  }
}
