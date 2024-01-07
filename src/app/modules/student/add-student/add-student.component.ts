import { Component,ElementRef, EventEmitter, OnDestroy, OnInit, Output  } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit , OnDestroy{
  constructor(private element:ElementRef){}

  
  @Output() close = new EventEmitter();
  ngOnInit(): void {
      document.body.appendChild(this.element.nativeElement);
  }

  onModalClose(){
   this.close.emit()
  }

  ngOnDestroy(){
    this.element.nativeElement.remove()
  }
  
}
