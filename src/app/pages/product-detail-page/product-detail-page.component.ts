import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IProduct } from 'src/app/interface/Product';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommentService } from 'src/app/services/comment/comment.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss'],
})
export class ProductDetailPageComponent {
  productSlug: string | null = '';
  user: any;
  initStar: number = 5;
  product: IProduct = {
    image: '',
    price: 0,
    _id: '',
    average_score: 0,
    review_count: 0,
    description: '',
    productName: '',
    categoryId: '',
  };
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private commentService: CommentService,
    private toastS: ToastrService
  ) {
    window.scrollTo(0, 0);
    const getUser: any = this.authService.getUserLogin();
    const currentUser: any = JSON.parse(getUser);
    this.user = currentUser;
  }
  commentForm = this.formBuilder.group({
    content: ['', Validators.required],
  });
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.productSlug = params['slug'];
      this.productService
        .getProductDetail(this.productSlug)
        .subscribe((data) => {
          console.log(data);
          this.product = data;
          this.commentService
            .getCommentByProductId(this.product._id)
            .subscribe((data) => {
              console.log(data);
            });
        });
    });
  }
  quantity: number = 1;
  stars = [
    { value: 1, filled: true },
    { value: 2, filled: true },
    { value: 3, filled: true },
    { value: 4, filled: true },
    { value: 5, filled: true },
  ];
  rate(value: number) {
    this.stars.forEach((star) => {
      star.filled = star.value <= value;
    });
    this.initStar = value;
    console.log(this.initStar);
  }
  incrementQuantity() {
    if (this.quantity >= 10) {
      return;
    }
    this.quantity = this.quantity + 1;
  }
  decrementQuantity() {
    if (this.quantity <= 1) {
      return;
    }
    this.quantity = this.quantity - 1;
  }
  handleComment() {
    if (this.commentForm.invalid) {
      return;
    }
    const data = {
      stars: this.initStar,
      content: this.commentForm.value.content || '',
      productId: this.product._id,
      fullname: this.user.fullname,
      avatar: this.user.avatar,
    };
    console.log(data);
    this.commentService.createComment(data).subscribe(
      (data) => {
        if (data) {
          this.toastS.success('Đánh giá sản phẩm thành công');
        }
      },
      (error) => {
        this.toastS.error(error.error.message);
      }
    );
  }

  formatPrice(num: number | string) {
    return num?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }
}
