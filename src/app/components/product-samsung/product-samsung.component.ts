import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/Product';
import { ProductService } from 'src/app/services/product/product.service';
@Component({
  selector: 'app-product-samsung',
  templateUrl: './product-samsung.component.html',
  styleUrls: ['./product-samsung.component.scss']
})
export class ProductSamsungComponent {
  products: IProduct[] = [];
  data: any;
  constructor(private productService: ProductService) {
    this.productService
      .getProductByCategory('647330335e0d5b35f0588f44')
      .subscribe((data) => {
        console.log(data)
        this.data = data;
        this.products = this.data.data;
      });
  }
  formatPrice(num: number | string) {
    return num?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }
}
