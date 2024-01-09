import { Injectable } from '@angular/core';
import axios from "axios"
import { IStudent } from '../models/Studet';

const API_URL = "https://api.mohamed-sadek.com/Student"
@Injectable({
  providedIn: 'root'
})
export class StudentCrudService {
  constructor() { }

  getStudents(){
    return axios.get(API_URL+"/GET");
  }
  getOneStudent(id:number){
    return axios.get(API_URL+`/GetByID?id=${id}`);
  }
  updateStudent(id:number , updatedStudent:IStudent|any){
    const updated = {
      NameArabic: updatedStudent.NameArabic,
  NameEnglish: updatedStudent.FirstName +" "+ updatedStudent.LastName,
  ID: id,
  ...updatedStudent
    }
    return axios.put(API_URL+`/PUT`,updated)
  }

  createStudent(student :any){
    const newStudent:IStudent = {
      ...student,
      Name:student.FirstName + " "+ student.LastName
    }
    return axios.post(API_URL+"/POST" ,student )
  }
  
  deleteStudent(id:number){
    return axios.delete(API_URL+`/Delete?id=${id}`)
  }
}
