import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NewsService } from 'src/app/services/news/news.service';
import { UploadImageService } from 'src/app/services/uploadImage/upload-image.service';
@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent {
  image: any = [];
  listImage: any = [];
  data: any;

  newsForm = this.formBuilder.group({
    title: ['', [Validators.required]],
    image: [''],
    date: [''],
    description: [''],
  });
  constructor(
    private formBuilder: FormBuilder,
    private uploadImageService: UploadImageService,
    private NewsService: NewsService,
    private router: Router,
    private toastr: ToastrService
  ) {}
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
      this.newsForm.patchValue({ image: this.image.url });
      console.log(this.image);
    });
  };
  handleDeteleImage(publicId: string) {
    this.uploadImageService
      .handleDeleteImage(publicId)
      .subscribe((data: Data) => {
        if (data.success) {
          this.image = [];
        }
      });
  }
 
  onHandleSubmit() {
    if (this.newsForm.invalid) {
      return;
    }
    const news: any = {
      title: this.newsForm.value.title || '',
      image: this.image.url,
      date: this.newsForm.value.date || '',
      description: this.newsForm.value.description || '',
    };

    this.NewsService.AddNews(news).subscribe(
      (data) => {
        if (data.success) {
          this.toastr.success(data.message);
          this.router.navigateByUrl('/admin/news');
        }
      },
      (error) => {
        this.toastr.error(error.error.message);
      }
    );
  }
}
type Data = {
  success?: boolean;
  message?: string;
};
