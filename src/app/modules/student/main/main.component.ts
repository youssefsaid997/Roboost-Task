import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private auth:AuthService){}

  isModalOpen=false;
  onModalToggle(){
    this.isModalOpen = !this.isModalOpen
  }

  onLogout(){
    this.auth.userLogout().subscribe(data=>{
      console.log(data);
      
    })
  }
}
