import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { IUser } from 'src/app/interface/auth';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UploadImageService } from 'src/app/services/uploadImage/upload-image.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent {
 constructor(
  private router : Router,
  private FormBuilder:FormBuilder ,
  private AuthService : AuthService,
  private toastr : ToastrService,
  private route : ActivatedRoute,
  private uploadImageService : UploadImageService
 ){}
 publicId :string = ""
image :any = []
listImage :any =[]
imageUrl :any
imageDefault: string =
'https://images.unsplash.com/photo-1678720131679-14475f693cd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60';
imageRegex: any;
userForm = this.FormBuilder.group({
  fullname: [
    '',
    [Validators.required, Validators.minLength(6), Validators.maxLength(255)],
  ],
  email: ['', [Validators.required, Validators.email]],
  avatar: [''],
  admin: [false],
  status: [''],
  _id: [''],
});
user: IUser = {
  _id: '',
  fullname: '',
  email: '',
  status: '',
  admin: false,
};
ngOnInit() {
  this.getOneAccount();
}
getOneAccount() {
  this.route.paramMap.subscribe((params: any) => {
    const _id = String(params.get('id'));
    if (_id) {
      this.AuthService.getOneAccount(_id).subscribe((data) => {
        this.user = data.data;
        this.userForm.patchValue({
          _id: this.user._id,
          fullname: this.user.fullname,
          email: this.user.email,
          admin: !!this.user.admin,
          status: this.user.status,
        });
        if (this.user.avatar !== this.imageDefault) {
          this.image.url = this.user.avatar;
          this.imageRegex = /\/([^\/]+)\.png/.exec(this.image.url);
          this.publicId =
            this.imageRegex?.length > 0 ? this.imageRegex[1] : '';
        }
      });
    }
  });
}
handleSelectImage = (e: any) => {
  const files = e.target.files;
  if (files.length === 0) {
    return;
  }
  const formData = new FormData();

  for (let i = 0; i < files.length; i++) {
    formData.append('image', files[i]);
  }
  this.uploadImageService.handleUploadImage(formData).subscribe((data) => {
    this.listImage = data;
    this.image = this.listImage.urls[0];
    this.userForm.patchValue({ avatar: this.image.url });
    console.log(this.image);
  });
};
handleDeteleImage() {
  this.uploadImageService
    .handleDeleteImage(this.publicId)
    .subscribe((data: Data) => {
      if (data.success) {
        this.image = [];
      }
    });
}
onHandleSubmit() {
  if (this.userForm.invalid) return;
  const user: IUser = {
    _id: this.user._id,
    fullname: this.userForm.value.fullname || '',
    email: this.userForm.value.email || '',
    avatar: this.image.url,
    admin: !!this.userForm.value.admin,
    status: this.userForm.value.status || '',
  };
  this.AuthService.UpdateAccount(user).subscribe((data) => {
    console.log(data);
    if (data.success) {
      this.toastr.success(data.message);
      this.router.navigateByUrl('/admin/account');
    }
  });
}
}
type Data = {
  success?: boolean;
  message?: string;
};
