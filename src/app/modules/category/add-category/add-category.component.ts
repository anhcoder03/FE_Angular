import { ToastrService } from 'ngx-toastr';
import { CategoryService } from './../../../services/category/category.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/interface/Category';
import { FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent {
  constructor(private router: Router, private categoryService: CategoryService, private FormBuilder: FormBuilder, private ToastrService: ToastrService) { }
  // KHAI BÁO KIỂU DỮ LIỆU
  category: ICategory = {
    name: '',
  }
  categoryForm = this.FormBuilder.group({
    name: ['', [Validators.required, Validators.minLength(0)]]
  })

  ngOnInit() { }

  // HÀM SỬ LÝ SỰ KIỆN THÊM
  onHandleAdd() {
    if (this.categoryForm.valid) {
      const category: ICategory = {
        name: this.categoryForm.value.name || '',
      }
      this.categoryService.AddCategory(category).subscribe((data) => {
        if (data.success) {
          this.ToastrService.success("Thêm thành công(❁´◡`❁)❤️🤭");
          this.router.navigateByUrl("/admin/category")
        }
        else {
          this.ToastrService.error(data.message);
        }
      })
    }
    else { return }
  }
}
