import { Component,ElementRef, EventEmitter, OnDestroy, OnInit, Output  } from '@angular/core';
import { StudentCrudService } from 'src/app/services/student-crud.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit , OnDestroy{
  constructor(private element:ElementRef , private studentCRUD:StudentCrudService){}

  
  @Output() close = new EventEmitter();
  ngOnInit(): void {
      document.body.appendChild(this.element.nativeElement);
  }

  onModalClose(){
   this.close.emit()
  }

  onSubmit(value:any){
    console.log(value);
    if(value){
      this.studentCRUD.createStudent(value).then((data)=>{
        console.log(data.data);
      }).catch(err=>{
        console.log(err);
      })
    }
    this.onModalClose()
  }

  ngOnDestroy(){
    this.element.nativeElement.remove()
  }
  
}
