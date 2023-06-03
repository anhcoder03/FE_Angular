import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss'],
})
export class DashboardHeaderComponent {
  constructor(private authService: AuthService) {}
  get dataUser() {
    const getUser: any = this.authService.getUserLogin();
    const currentUser: any = JSON.parse(getUser);
    return currentUser;
  }
}
