import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ISignup } from 'src/app/interface/auth';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss'],
})
export class SignUpPageComponent {
  constructor(
    private FormBuilder: FormBuilder,
    private AuthService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  userForm = this.FormBuilder.group({
    fullname: [''],
    email: [''],
    password: [''],
    confirmPassword: [''],
  });

  ngOnInit() {
    console.log(this.userForm);
  }
  onHandleSignup() {
    if (this.userForm.invalid) return;
    const user: ISignup = {
      email: this.userForm.value.email || '',
      fullname: this.userForm.value.fullname || '',
      password: this.userForm.value.password || '',
      confirmPassword: this.userForm.value.confirmPassword || '',
    };
    console.log(user);
    this.AuthService.signup(user).subscribe(
      (data) => {
        if (data.success) {
          this.toastr.success(data.message);
          this.router.navigateByUrl('/sign-in');
        }
      },
      (error) => {
        this.toastr.error(error.error.message);
      }
    );
  }
}
