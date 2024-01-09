import { Component,ElementRef, EventEmitter, OnDestroy, OnInit, Output  } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { StudentCrudService } from 'src/app/services/student-crud.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit , OnDestroy{
  constructor(private element:ElementRef , private studentCRUD:StudentCrudService , private toastr:ToastrService){}

  
  @Output() close = new EventEmitter();
  ngOnInit(): void {
      document.body.appendChild(this.element.nativeElement);
  }

  onModalClose(){
   this.close.emit()
  }

  onSubmit(value:any){
    if(value){
      this.studentCRUD.createStudent(value).then((data)=>{
        console.log(data.data);
        this.toastr.success(data.data.Message)
      }).catch(err=>{
        console.log(err);
        this.toastr.success(err.Message)
      })
    }else{
      this.toastr.success("Form is not valid")

    }
    this.onModalClose()
  }

  ngOnDestroy(){
    this.element.nativeElement.remove()
  }
  
}
