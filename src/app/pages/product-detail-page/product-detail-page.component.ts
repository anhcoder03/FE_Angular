import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interface/Product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss'],
})
export class ProductDetailPageComponent {
  productSlug: string | null = '';
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
    private productService: ProductService
  ) {
    window.scrollTo(0, 0);
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.productSlug = params['slug'];
      this.productService
        .getProductDetail(this.productSlug)
        .subscribe((data) => {
          console.log(data);
          this.product = data;
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

  formatPrice(num: number | string) {
    return num?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }
}
