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
    return this.httpClient.get("https://api.mohamed-sadek.com/Student/Get")
  }

  createStudent(){}

  updateStudent(student:any ,id:string){
    console.log(+id ,student);
    // i couldn't access the targeted student without id 
    console.log(student);
    
    const updatedStudent = {

      ...student,
      id:+id,
      NameEnglish:student.firstName+ " "+ student.lastName,

    }
    console.log(updatedStudent);
    
    this.httpClient.put("https://api.mohamed-sadek.com/Student/PUT",updatedStudent).subscribe(data=>{
      console.log(data);
      
    })
  }

  getOneStudent(id:number){
    return this.httpClient.get(`https://api.mohamed-sadek.com/Student/GetByID?id=${id}`)
  }

  deleteStudent(id:number){
    this.httpClient.delete(`https://api.mohamed-sadek.com/Student/Delete?id=${id}`)
  }
}
