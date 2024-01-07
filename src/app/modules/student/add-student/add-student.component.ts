import { Component,ElementRef, EventEmitter, OnDestroy, OnInit, Output  } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit , OnDestroy{
  constructor(private element:ElementRef , private studentService :StudentService){}

  
  @Output() close = new EventEmitter();
  ngOnInit(): void {
      document.body.appendChild(this.element.nativeElement);
  }

  onModalClose(){
   this.close.emit()
  }

  onSubmit(value:any){
    this.studentService.createStudent(value)
    console.log(value);
    
    
  }

  ngOnDestroy(){
    this.element.nativeElement.remove()
  }
  
}
