import { SearchService } from './../../services/search/search.service';
import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/Product';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  products: IProduct[] = [];
  data: any = [];
  searchResults: IProduct[] = [];
  showSearchResults: boolean = false;
  noResultsFound: boolean = false;

  searchForm = this.formBuilder.group({
    keyWords: ['']
  });

  constructor(private formBuilder: FormBuilder, private searchService: SearchService) { }

  onHandleSearch() {
    const keyWords = this.searchForm.value.keyWords || '';
    console.log(keyWords);
    this.searchService.searchProducts(keyWords).subscribe((data) => {
      this.data = data;
      this.products = this.data.data;
      this.searchResults = this.products;
      this.showSearchResults = true;

    });
  }

  onHandleChange() {
    const keyWord = this.searchForm.value.keyWords;
    console.log(keyWord);
    if (keyWord && keyWord.trim() !== '') {
      this.searchService.searchProducts(keyWord).subscribe((data) => {
        this.data = data;
        this.products = this.data.data;
        console.log(this.products);
        this.searchResults = this.products;
        this.showSearchResults = true
        this.noResultsFound = this.products.length === 0;
      });
    }
    else {
      this.products = [];
      this.showSearchResults = false
      this.noResultsFound = false;
    }
  }

}
