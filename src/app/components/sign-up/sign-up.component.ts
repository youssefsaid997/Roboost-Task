import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  constructor(private auth :AuthService){}
  signupForm = new FormGroup({
    Name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    UserName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    Passowrd: new FormControl('', [Validators.required]),
  });

  onSubmitSignup() {
    if (this.signupForm.invalid) {
      return;
    }
    const user = {
      Name: this.signupForm.controls.Name.value,
      UserName: this.signupForm.controls.UserName.value,
      Password: this.signupForm.controls.Passowrd.value,
    };

    let userLogin = {
      UserName: this.signupForm.controls.UserName.value,
      Password: this.signupForm.controls.Passowrd.value,
    }
    this.auth.registerUser(user).subscribe(data=>{
      console.log(data);
      this.auth.loginUser(userLogin)
    })

  }
}
