import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IProduct } from 'src/app/interface/Product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss'],
})
export class ListProductComponent {
  products: IProduct[] = [];
  data: any;
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems: number | undefined = 0;

  constructor(
    private productservice: ProductService,
    private toastr: ToastrService
  ) {}
  ngOnInit() {
    this.loadData();
  }
  loadData(): void {
    this.productservice.getAllProduct(this.currentPage).subscribe((data) => {
      this.data = data;
      console.log(data);
      this.products = this.data.data;
      this.totalItems = data.totalProduct;
    });
  }
  onhandleremove(_id: string) {
    const comfirm = window.confirm('Bạn có chắc chắn muốn xóa');

    if (comfirm) {
      this.productservice.deleteProduct(_id).subscribe((data) => {
        if (data.success) {
          this.toastr.success(data.message);
          this.products = this.products.filter(
            (item: IProduct) => item._id !== _id
          );
        } else {
          this.toastr.error(data.message);
        }
      });
    }
  }
  onPageChange(event: number): void {
    this.currentPage = event;
    this.loadData();
  }
  formatPrice(num: number | string) {
    return num?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }
}
