import { Component } from '@angular/core';
import { FormControl ,FormGroup, Validators } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';
import { ActivatedRoute } from '@angular/router';
import { IStudent } from 'src/app/models/Studet';
import { IResponse } from 'src/app/models/Response';



@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent {
  routeParam=""
  student:IStudent|undefined
  constructor(private studentService : StudentService , private route:ActivatedRoute){

  }
  ngOnInit(){
   this.routeParam = this.route.snapshot.params["id"]  
    this.studentService.getOneStudent(+this.routeParam).subscribe((student:IResponse|any)=>{
        this.editForm.get("firstName")?.patchValue(student.Data.Name.split(" ")[0])
        this.editForm.get("lastName")?.patchValue(student.Data.Name.split(" ")[1])
        this.editForm.get("email")?.patchValue(student.Data.Email)
        this.editForm.get("age")?.patchValue(student.Data.Age)
        this.editForm.get("mobile")?.patchValue(student.Data.Mobile)
        this.editForm.get("nationalID")?.patchValue(student.Data.NationalID)
    })
  }
    editForm = new FormGroup({
    firstName: new FormControl(null,[Validators.required ,Validators.minLength(3)]),
    lastName: new FormControl(null,[Validators.required ,Validators.minLength(3)]),
    email: new FormControl(null,[Validators.email,Validators.required]),
    age : new FormControl(null,[Validators.min(17),Validators.max(26),Validators.required]),
    mobile : new FormControl(null,[Validators.minLength(12),Validators.maxLength(12),Validators.required]),
    nationalID : new FormControl(null,[Validators.minLength(14),Validators.maxLength(14),Validators.required]),
    NameArabic : new FormControl(null,[Validators.required ,Validators.minLength(3)]),
  })


  onEditStudent(event:Event){
    event.preventDefault();
    console.log(this.editForm.value);
    const updatedData =this.editForm.value
    this.studentService.updateStudent(updatedData ,this.routeParam)
    
  }
}
