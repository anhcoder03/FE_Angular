import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';
import { IUser } from 'src/app/interface/auth';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent {
 constructor(
  private AuthService : AuthService,
  private toastrService :ToastrService
  ){}
  users: IUser[] = [];
  data: any;
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems: number | undefined = 0;
  ngOnInit() {
    this.getAllAccount();
  }
  getAllAccount() {
    this.AuthService.getAllAccount().subscribe((data) => {
      this.data = data;
      this.users = this.data.data;
      this.totalItems = this.data.totalUser;
    });
  }
  onPageChange(event: number): void {
    this.currentPage = event;
    this.getAllAccount();
  }
  onHandleRemove(_id:any){
    const comfirm = window.confirm("Bạn có chắc chắn muốn xóa");
    if(comfirm){
      this.AuthService.DeleteAccount(_id).subscribe((data)=>{
        if(data.success){
          this.toastrService.success('Xóa tài khoản thành công ')
          this.users = this.users.filter((user)=> user._id !== _id)
        }else{
          this.toastrService.error('xóa tài khoản thất bại')
        }
      })
    }
  }
}
