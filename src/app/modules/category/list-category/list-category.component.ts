import { ICategory } from 'src/app/interface/Category';
import { CategoryService } from './../../../services/category/category.service';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss'],
})
export class ListCategoryComponent {
  constructor(
    private CategoryService: CategoryService,
    private ToastrService: ToastrService
  ) {}

  // Khai báo kiểu dữ liệu
  categories: ICategory[] = [];
  data: any;

  ngOnInit() {
    this.getAllCategory();
  }

  // hàm lấy ra tất cả danh mục hiện có
  getAllCategory() {
    this.CategoryService.getAllCategory().subscribe((data) => {
      this.data = data;
      this.categories = this.data.data;
      // console.log(data);
    });
  }

  // Hàm xử lý sự kiện xóa
  onHandleRemove(_id: any) {
    const confirm = window.confirm('Bạn có chắc chắn muốn xóa?');
    if (confirm) {
      this.CategoryService.DeleteCategory(_id).subscribe(
        (data) => {
          if (data.success) {
            this.categories = this.categories.filter(
              (cate) => cate._id !== _id
            );
            this.ToastrService.success(data.message);
          }
        },
        (error) => {
          this.ToastrService.warning(error.error.message);
        }
      );
    }
  }
}
