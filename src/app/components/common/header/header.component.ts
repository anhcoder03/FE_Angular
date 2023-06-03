import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  user: any;
  constructor(
    private authService: AuthService,
    private toastr: ToastrService
  ) {}
  logOut() {
    this.authService.logOut();
    this.toastr.success('Đăng xuất thành công');
  }
  get dataUser() {
    const getUser: any = this.authService.getUserLogin();
    const currentUser: any = JSON.parse(getUser);
    return currentUser;
  }
}
