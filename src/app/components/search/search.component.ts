import { SearchService } from './../../services/search/search.service';
import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  products: IProduct[] = [];
  data: any = [];
  searchResults: IProduct[] = [];
  isShow: boolean = false;

  searchForm = this.formBuilder.group({
    keyWords: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private searchService: SearchService,
    private router: Router
  ) {}
  onProductClick(product: any) {
    this.isShow = false;
    this.router.navigate(['/product', product.slug]);
    this.searchForm.controls['keyWords'].setValue('');
  }
  onHandleChange(e: any) {
    const keyWord: any = e.target.value;
    if (keyWord.length >= 0) {
      this.isShow = true;
    }
    if (keyWord && keyWord.trim() !== '') {
      this.searchService.searchProducts(keyWord).subscribe((data) => {
        this.data = data;
        this.products = this.data.data;
        this.searchResults = this.products;
      });
    }
  }
}
