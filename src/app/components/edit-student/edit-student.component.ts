import { Component } from '@angular/core';
import { FormControl ,FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent {
  editForm = new FormGroup({
    name: new FormControl("",[Validators.required ,Validators.minLength(3)]),
    email: new FormControl("",[Validators.email,Validators.required]),
    age : new FormControl(17,[Validators.min(17),Validators.max(26),Validators.required]),
    nationalID : new FormControl("",[Validators.minLength(14),Validators.maxLength(14),Validators.required])
  })


}
