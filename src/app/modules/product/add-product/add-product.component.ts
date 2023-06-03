import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductService } from 'src/app/services/product/product.service';
import { UploadImageService } from 'src/app/services/uploadImage/upload-image.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {
  image: any = [];
  listImage: any = [];
  categories: any = [];
  data: any;

  productForm = this.formBuilder.group({
    productName: ['', [Validators.required]],
    price: [0],
    image: [''],
    description: ['', Validators.required],
    categoryId: [''],
  });
  constructor(
    private formBuilder: FormBuilder,
    private uploadImageService: UploadImageService,
    private productService: ProductService,
    private categoryService: CategoryService,
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
      this.productForm.patchValue({ image: this.image.url });
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
  ngOnInit() {
    this.getcategories();
  }
  getcategories() {
    this.categoryService.getAllCategory().subscribe((data) => {
      this.data = data;
      this.categories = this.data.data;
      console.log(this.categories);
    });
  }
  onHandleSubmit() {
    if (this.productForm.invalid) {
      return;
    }
    const products: any = {
      productName: this.productForm.value.productName || '',
      price: this.productForm.value.price || 0,
      image: this.image.url,
      description: this.productForm.value.description || '',
      categoryId: this.productForm.value.categoryId || '',
    };

    this.productService.addProduct(products).subscribe(
      (data) => {
        if (data.success) {
          this.toastr.success(data.message);
          this.router.navigateByUrl('/admin/product');
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
