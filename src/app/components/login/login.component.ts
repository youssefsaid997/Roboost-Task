import { Component } from '@angular/core';
import { FormControl, FormGroup ,Validators} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private auth:AuthService){}
  loginForm = new FormGroup({
    UserName:new FormControl("",[Validators.required ,Validators.minLength(3)]),
    Passowrd: new FormControl("",[Validators.required])
  })


  onSubmitLogin(){
    if(this.loginForm.invalid){
      return;
    }
    const user = {UserName:this.loginForm.controls.UserName.value , Password:this.loginForm.controls.Passowrd.value}
    console.log(user);
    
    this.auth.loginUser(user)
    
  }
}
