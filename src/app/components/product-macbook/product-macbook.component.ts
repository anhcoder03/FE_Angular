import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { IProduct } from 'src/app/interface/Product';
@Component({
  selector: 'app-product-macbook',
  templateUrl: './product-macbook.component.html',
  styleUrls: ['./product-macbook.component.scss']
})
export class ProductMacbookComponent {
  products: IProduct[] = [];
  data: any;
  constructor(private productService: ProductService) {
    this.productService
      .getProductByCategory('64766182e1d8643e9e507472')
      .subscribe((data) => {
        this.data = data;
        this.products = this.data.data;
      });
  }
  formatPrice(num: number | string) {
    return num?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }
}
