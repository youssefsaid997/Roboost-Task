import { Component, OnChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { IResponse } from 'src/app/models/Response';
import { IStudent } from 'src/app/models/Studet';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent{

  students:IStudent[]|undefined
  searchQuery=""
  showedStudents:IStudent[]|undefined
  filteredStudents:IStudent[]|undefined
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
      this.students = res.Data
      this.showedStudents=[...res.Data]
    });
  }

  ngAfterViewInit(){
    this.studentService.getStudents().subscribe((res:IResponse|any)=>{
      this.students = res.Data
      this.showedStudents=[...res.Data]

    });
    
  }

  ngDoCheck(){
    if(!this.searchQuery){
    }else{
      this.showedStudents=this.students
      console.log(this.showedStudents);
    }
    
  }
  onSearchChange(value:any){
    this.searchQuery=value
    if(this.searchQuery){
      this.filteredStudents = this.students?.filter(student=>{
        return student.Name.toLowerCase().includes(value)
      })
      this.showedStudents=this.filteredStudents;
    }else{
      this.showedStudents=this.students
    }
  }

  onEditClick(id:number){
    console.log(id)
  }

  onStudentDelete(id:number ){
    this.studentService.deleteStudent(id)    
  }
}
