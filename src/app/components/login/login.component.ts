import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthAxiosService } from 'src/app/services/auth-axios.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private auth: AuthService,
    private authService: AuthAxiosService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  validationFlag = false;
  loginForm = new FormGroup({
    UserName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    Passowrd: new FormControl('', [Validators.required]),
  });

  onSubmitLogin(e: Event) {
    e.preventDefault();
    if (this.loginForm.status === 'INVALID') {
      console.log('throw error ');
      this.loginForm.markAllAsTouched();
      this.showError('Please enter your login data');

      this.validationFlag = true;
    } else {
      const user = {
        UserName: this.loginForm.controls.UserName.value,
        Password: this.loginForm.controls.Passowrd.value,
      };
      console.log(user);
      this.authService
        .loginUser(user)
        .then((data) => {
          console.log(data);
          this.showSuccess("Welcome Back to the account");
          localStorage.setItem("token",data.data.Data)
          this.router.navigate(["/student"])
          this.validationFlag = false;
        })
        .catch((err) => {
          this.showError(err.message);
        });
    }
  }

  showSuccess(message: string) {
    this.toastr.success(message);
  }
  showError(message: string) {
    this.toastr.error(message);
  }
}
