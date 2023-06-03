import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service';
import { ToastrService } from 'ngx-toastr';
import { ICategory } from 'src/app/interface/Category';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss'],
})
export class UpdateCategoryComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private FormBuilder: FormBuilder,
    private ToastrService: ToastrService
  ) {}

  // KHAI BÁO KIỂU DỮ LIỆU
  category: ICategory = {
    name: '',
  };

  data: any;
  categoryForm = this.FormBuilder.group({
    name: ['', [Validators.required]],
  });

  ngOnInit() {
    this.getCategoryDetail();
  }

  // HÀM LẤY RA DỮ LIỆU CỦA CATEGORY THÔNG QUA ID
  getCategoryDetail() {
    this.route.paramMap.subscribe((params) => {
      const _id = String(params.get('id'));
      if (_id) {
        this.categoryService.getOneCategory(_id).subscribe((data) => {
          this.data = data;
          console.log(data);
          this.category = this.data.data;
          this.categoryForm.patchValue({
            name: this.category?.name,
          });
        });
      }
    });
  }

  //HÀM SỬ LÝ SỰ KIỆN UPDATE
  onHandleUpdate() {
    if (this.categoryForm.invalid) return;

    const product: ICategory = {
      _id: this.category._id,
      name: this.categoryForm.value.name || '',
    };
    this.categoryService.UpdateCategory(product).subscribe(
      (data) => {
        if (data.success) {
          this.ToastrService.success(data.message);
          this.router.navigateByUrl('/admin/category');
        }
      },
      (error) => {
        this.ToastrService.error(error.error.message);
      }
    );
  }
}
