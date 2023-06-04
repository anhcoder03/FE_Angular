import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { IProduct } from 'src/app/interface/Product';
@Component({
  selector: 'app-product-xiaomi-oppo',
  templateUrl: './product-xiaomi-oppo.component.html',
  styleUrls: ['./product-xiaomi-oppo.component.scss']
})
export class ProductXiaomiOppoComponent {
  products: IProduct[] = [];
  data: any;
  constructor(private productService: ProductService) {
    this.productService
      .getProductByCategory('6476617be1d8643e9e50746e')
      .subscribe((data) => {
        this.data = data;
        this.products = this.data.data;
      });
  }
  formatPrice(num: number | string) {
    return num?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }
}
