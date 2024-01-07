import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogin } from '../models/Login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpHeaders:HttpHeaders= new HttpHeaders()


  token=""
  constructor(private httpClient:HttpClient) {}
   loginUser(user :ILogin|any){
    this.httpClient.post("https://api.mohamed-sadek.com/User/Login",user).subscribe((data:any)=>{
      console.log(data);
      localStorage.setItem("token" , data.Data)
      this.token=data.Data
    })
   }

   registerUser(user:any){
    return this.httpClient.post("https://api.mohamed-sadek.com/User/POST",user)
   }

   userLogout(){
     this.token = localStorage.getItem("token")!;
     console.log(this.token);
     this.httpHeaders.set("token",this.token)
      localStorage.removeItem("token")
     return this.httpClient.post("https://api.mohamed-sadek.com/User/Logout",{
    
     },{
      headers:this.httpHeaders
     })

     
   }
}
