import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IStudent } from 'src/app/models/Studet';
import { StudentCrudService } from 'src/app/services/student-crud.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css'],
})
export class EditStudentComponent {
  routeParam = '';
  student: IStudent | any;
  constructor(
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private studentCRUD: StudentCrudService,
    private router : Router,

  ) {}
  ngOnInit() {
    this.routeParam = this.route.snapshot.params['id'];
    // this.studentService.getOneStudent(+this.routeParam).subscribe((student:IResponse|any)=>{
    //     this.editForm.get("firstName")?.patchValue(student.Data.Name.split(" ")[0])
    //     this.editForm.get("lastName")?.patchValue(student.Data.Name.split(" ")[1])
    //     this.editForm.get("email")?.patchValue(student.Data.Email)
    //     this.editForm.get("age")?.patchValue(student.Data.Age)
    //     this.editForm.get("mobile")?.patchValue(student.Data.Mobile)
    //     this.editForm.get("nationalID")?.patchValue(student.Data.NationalID)
    // })

    this.studentCRUD.getOneStudent(+this.routeParam).then((data) => {
      this.student = data.data.Data;
      const keys = Object.keys(data.data.Data);
      for (let innerKey in this.editForm.controls) {
        keys.forEach(key=>{
          if(key.toLocaleLowerCase()=== innerKey.toLocaleLowerCase()){
            this.editForm.get(innerKey)?.patchValue(this.student[key]);
          }
          this.editForm.get("firstName")?.patchValue(this.student.Name.split(" ")[0])
          this.editForm.get("lastName")?.patchValue(this.student.Name.split(" ")[1])
        })
        
      }
    });
  }
  editForm = new FormGroup({
    firstName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
    lastName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    age: new FormControl(null, [
      Validators.min(17),
      Validators.max(26),
      Validators.required,
    ]),
    mobile: new FormControl(null, [
      Validators.minLength(12),
      Validators.maxLength(12),
      Validators.required,
    ]),
    nationalID: new FormControl(null, [
      Validators.minLength(14),
      Validators.maxLength(14),
      Validators.required,
    ]),
    NameArabic: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  ngDoCheck() {
    console.log(this.student);
  }
  onEditStudent(event: Event) {
    event.preventDefault();
    const updatedData = this.editForm.value
    // this.studentService.updateStudent(updatedData ,this.routeParam)

    //axios

    if (this.editForm.status === "INVALID") {
      this.showError("Your From is not valid")
      return;
      
    } else {
      this.studentCRUD.updateStudent(+this.routeParam,updatedData).then((data)=>{
        console.log(data.data);
        if(data.data.Success === true){
          this.showSuccess(data.data.Message);
          this.router.navigateByUrl("/student")
          
        }else{
        this.showError(data.data.Message)

        }
      }).catch((err)=>{
        this.showError(err.message)
      })
    }
  }

  showSuccess(msg:string){
    this.toastr.success(msg)
  }
  showError(msg:string){
    this.toastr.error(msg)
  }
}
