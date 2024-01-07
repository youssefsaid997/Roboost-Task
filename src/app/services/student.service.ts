import { Injectable } from '@angular/core';
import { IStudent } from '../models/Studet';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students:IStudent[] | undefined
  constructor(private httpClient : HttpClient) { }


  getStudents(){
    return this.httpClient.get("https://api.mohamed-sadek.com/Student/Get");
  }

  createStudent(student:IStudent){
    this.httpClient.post("https://api.mohamed-sadek.com/Student/POST",student).subscribe(data=>{console.log(data);
    })
  }

  updateStudent(student:any ,id:string){
    const updatedStudent = {
      ...student,
      id:+id,
      NameEnglish:student.firstName+ " "+ student.lastName,

    }
    this.httpClient.put("https://api.mohamed-sadek.com/Student/PUT",updatedStudent).subscribe(data=>{
      console.log(data);
      
    })
  }

  getOneStudent(id:number){
    return this.httpClient.get(`https://api.mohamed-sadek.com/Student/GetByID?id=${id}`)
  }

  deleteStudent(id:number){
    this.httpClient.delete(`https://api.mohamed-sadek.com/Student/Delete?id=${id}`).subscribe((data)=>{
      console.log(data);
      
    })
  }

}
