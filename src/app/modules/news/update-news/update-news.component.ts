import { INews } from 'src/app/interface/News';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NewsService } from 'src/app/services/news/news.service';
import { UploadImageService } from 'src/app/services/uploadImage/upload-image.service';
@Component({
  selector: 'app-update-news',
  templateUrl: './update-news.component.html',
  styleUrls: ['./update-news.component.scss']
})
export class UpdateNewsComponent {
  image: any = [];
  listImage: any = [];
  imageRegex: any;
  publicId: string = '';
  news: any = {
    _id: '',
    title: '',
    date: '',
    image: '',
    description: '',
  };
  newsForm = this.formBuilder.group({
    _id: [''],
    title: ['', [Validators.required]],
    date: [''],
    image: [''],
    description: [''],
  });
  constructor(
    private formBuilder: FormBuilder,
    private uploadImageService: UploadImageService,
    private NewsService: NewsService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.route.paramMap.subscribe((param) => {
      const _id = String(param.get('id'));
      this.NewsService.getOneNews(_id).subscribe((data) => {
        this.news = data.data;
        console.log(data.data);
        this.newsForm.patchValue({
          title: this.news.title,
          date: this.news.date,
          description: this.news.description,
          _id: this.news._id,
        });
        this.image.url = this.news.image;
        this.imageRegex = /\/([^\/]+)\.png/.exec(this.image.url);
        this.publicId = this.imageRegex?.length > 0 ? this.imageRegex[1] : '';
      });
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
      this.newsForm.patchValue({ image: this.image.url });
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
  
  handleUpdateNews() {
    if (this.newsForm.invalid) {
      return;
    }
    const news: INews = {
      _id: this.news._id,
      title: this.newsForm.value.title || '',
      date: this.newsForm.value.date || '',
      image: this.image.url,
      description: this.newsForm.value.description || '',
    };
    console.log(news);
    this.NewsService.UpdateNews(news).subscribe(
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

