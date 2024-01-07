import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { IResponse } from 'src/app/models/Response';
import { IStudent } from 'src/app/models/Studet';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent {

  students:IStudent[]|undefined

  subscriber!: Subscription;
  constructor(private studentService:StudentService){

  }
  tableHeader = {
    rowNumbers: '#',
    studentName: 'Student Name',
    studentAge: 'Age',
    socialMedia: 'Social Media',
    editBtn: 'Edit',
    deleteBtn: 'Delete',
  };

  getObjectValues(object: Object) {
    return Object.values(object);
  }

  ngOnInit(){
   this.studentService.getStudents().subscribe((res:IResponse|any)=>{
    this.students = res.Data;
   })

    
  }

  onEditClick(id:number){
    console.log(id)
  }

  onStudentDelete(id:number ){
    this.studentService.deleteStudent(id)    
  }
}
