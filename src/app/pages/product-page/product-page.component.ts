import { CategoryService } from 'src/app/services/category/category.service';
import { ProductService } from 'src/app/services/product/product.service';
import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/Product';
import { ICategory } from 'src/app/interface/Category';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {

  constructor(private ProductService: ProductService, private CategoryService: CategoryService) {
  }

  products: IProduct[] = [];
  categories: ICategory[] = [];
  data: any;
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems: number | undefined = 0;

  ngOnInit() {
    this.getAllcategories();
    this.getAllProduct();
  }

  // Hàm xử lí lấy tất cả dữ liệu sản phẩm
  getAllProduct() {
    this.ProductService.getAllProduct(this.currentPage).subscribe((data) => {
      this.data = data;
      this.products = this.data.data;
      this.totalItems = data.totalProduct;
    })
  }

  // Hàm xử lí lấy tất cả dữ liệu danh mục
  getAllcategories() {
    this.CategoryService.getAllCategory().subscribe((data) => {
      this.data = data;
      this.categories = this.data.data;
      console.log(this.categories);
    }
    )
  }

  // Hàm xử lí lấy những sản phẩm thuộc danh mục thông qua thuộc tính id
  getProductByCate(_id: any) {
    this.ProductService.getProductByCategory(_id).subscribe((data) => {
      this.data = data;
      this.products = this.data.data;
    })
  }

  // Format price
  formatPrice(num: number | string) {
    return num?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }

  //Hàm xử lý việc chuyển trang
  onPageChange(event: number): void {
    this.currentPage = event;
    this.getAllProduct();
  }
}
