import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IProduct } from 'src/app/interface/Product';
import { ProductService } from 'src/app/services/product/product.service';
import { UploadImageService } from 'src/app/services/uploadImage/upload-image.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss'],
})
export class UpdateProductComponent {
  image: any = [];
  listImage: any = [];
  categories: any = [];
  imageRegex: any;
  publicId: string = '';
  product: any = {
    _id: '',
    productName: '',
    price: 0,
    image: '',
    description: '',
    categoryId: '',
  };
  productForm = this.formBuilder.group({
    _id: [''],
    productName: ['', [Validators.required]],
    price: [0],
    image: [''],
    description: ['', [Validators.required]],
    categoryId: [''],
  });
  constructor(
    private formBuilder: FormBuilder,
    private uploadImageService: UploadImageService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.route.paramMap.subscribe((param) => {
      const _id = String(param.get('id'));
      this.productService.getOneproduct(_id).subscribe((data) => {
        this.product = data.data;
        console.log(data.data);
        this.productForm.patchValue({
          categoryId: this.product.categoryId,
          productName: this.product.productName,
          price: this.product.price,
          description: this.product.description,
          _id: this.product._id,
        });
        this.image.url = this.product.image;
        this.imageRegex = /\/([^\/]+)\.png/.exec(this.image.url);
        this.publicId = this.imageRegex?.length > 0 ? this.imageRegex[1] : '';
        console.log(this.publicId);
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
      this.productForm.patchValue({ image: this.image.url });
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
  ngOnInit() {
    this.getcategories();
  }
  getcategories() {
    this.productService.getAllcategories().subscribe((data) => {
      this.categories = data.data as any[];
      console.log(this.categories);
    });
  }
  handleUpdateProduct() {
    if (this.productForm.invalid) {
      return;
    }
    const products: IProduct = {
      _id: this.product._id,
      productName: this.productForm.value.productName || '',
      price: this.productForm.value.price || 0,
      image: this.image.url,
      description: this.productForm.value.description || '',
      categoryId: this.productForm.value.categoryId || '',
    };
    console.log(products);
    this.productService.updateProduct(products).subscribe((data) => {
      if (data.success) {
        this.toastr.success(data.message);
      } else {
        this.toastr.error(data.message);
      }
      this.router.navigateByUrl('/admin/product');
    });
  }
}

type Data = {
  success?: boolean;
  message?: string;
};
