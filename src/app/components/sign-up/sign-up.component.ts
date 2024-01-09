import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthAxiosService } from 'src/app/services/auth-axios.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  constructor(
    private auth: AuthService,
    private authService: AuthAxiosService,
    private route: Router,
    private toastr: ToastrService
  ) {}
  signupForm = new FormGroup({
    Name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    UserName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    Passowrd: new FormControl('', [Validators.required]),
  });

  onSubmitSignup(event: Event) {
    event.preventDefault();

    if (this.signupForm.status === 'INVALID') {
      this.signupForm.markAllAsTouched();
      this.toastr.error('Please enter valid data');
      return;
    } else {
      const user = {
        Name: this.signupForm.controls.Name.value,
        UserName: this.signupForm.controls.UserName.value,
        Password: this.signupForm.controls.Passowrd.value,
      };
      this.authService
        .registerUser(user)
        .then((data) => {
          this.toastr.success('You registered successfully');
          this.route.navigate(['']);
        })
        .catch((err) => {
          this.toastr.error(err.message);
        });
    }
  }
}
