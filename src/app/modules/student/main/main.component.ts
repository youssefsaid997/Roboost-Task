import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthAxiosService } from 'src/app/services/auth-axios.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private auth:AuthService , private authService:AuthAxiosService, private route:Router){}

  isModalOpen=false;
  onModalToggle(){
    this.isModalOpen = !this.isModalOpen
  }

  onLogout(event:Event){
    event?.preventDefault()
    this.authService.logoutUser().then((data)=>{
      console.log(data);
      
      this.route.navigateByUrl("/")
      localStorage.removeItem("token")
    }).catch(err=>{
      console.log(err);
      
    })
  }
}
