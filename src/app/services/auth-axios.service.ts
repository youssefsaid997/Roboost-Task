import { Injectable } from '@angular/core';
import axios from 'axios';

const AUTH_URI ="https://api.mohamed-sadek.com/User/";
@Injectable({
  providedIn: 'root'
})
export class AuthAxiosService {


  constructor() { }


  registerUser(user:any){
    return axios.post(AUTH_URI+"POST",user)
  }
  loginUser(user:any){
    return axios.post(AUTH_URI+"Login",user)
  }
  logoutUser(){
    const token = localStorage.getItem("token")
    console.log(token);
    
    return axios.post(AUTH_URI+"Logout",null,{
      headers:{
        token : `${token}`
      }
    })
  }
}
