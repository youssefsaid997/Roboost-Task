import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IStudent } from 'src/app/models/Studet';
import { StudentCrudService } from 'src/app/services/student-crud.service';


@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent{

  students:IStudent[]|undefined
  showedStudents:IStudent[]|undefined
  filteredStudents:IStudent[]|undefined
  constructor( private studentCRUD: StudentCrudService , private toastr:ToastrService,private route :Router){
  }

  tableHeader = {
    rowNumbers: '#',
    studentName: 'Student Name',
    studentAge: 'Age',
    socialMedia: 'Social Media',
    editBtn: 'Edit',
    deleteBtn: 'Delete',
  };

  ngOnInit(){
    this.getAllStudents();
  }

  ngAfterContentChecked(){
    // this.getAllStudents();
    this.showedStudents = this.students
    
  }
  getObjectValues(object: Object) {
    return Object.values(object);
  }

  onSearchChange(value:any){
    this.filteredStudents = this.students?.filter((student)=>{
     return student.Name.toLowerCase().includes(value)
    })
      this.showedStudents=this.filteredStudents
  }

  onStudentDelete(id:number ){
    this.deleteStudent(id)
  }

  deleteStudent(id:number){
    this.studentCRUD.deleteStudent(id).then((data)=>{
      console.log(data.data); 
      this.showSuccess(data.data.Message);

    }).catch((err)=>{
      console.log(err);
      
    })
  }
  getAllStudents(){
    this.studentCRUD.getStudents().then(data=>{
    this.students=data.data.Data
    this.showedStudents = this.students

    }).catch(err=>{
      console.log(err);
    })
  }

  showSuccess(msg:string){
    this.toastr.success(msg)
  }
  showError(msg:string){
    this.toastr.error(msg)
  }
  
}