import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ISignin } from 'src/app/interface/auth';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss'],
})
export class SignInPageComponent {
  constructor(
    private FormBuilder: FormBuilder,
    private AuthService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  userForm = this.FormBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  ngOnInit() { }

  onHandleSignin() {
    if (this.userForm.invalid) {
      return;
    }
    const user: ISignin = {
      email: this.userForm.value.email || '',
      password: this.userForm.value.password || '',
    };
    this.AuthService.signin(user).subscribe(
      (data) => {
        if (data.success) {
          this.toastr.success(data.message);
          this.AuthService.saveUserToSessionStorage(data.user);
          this.AuthService.saveAccessToken(data.accessToken);
          this.router.navigateByUrl('');
        }
      },
      (error) => {
        this.toastr.error(error.error.message);
      }
    );
  }
}
