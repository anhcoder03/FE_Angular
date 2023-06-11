import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { IProduct } from 'src/app/interface/Product';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {
  }

  API_URL = "http://localhost:3333/api/v1/"

  searchProducts(keyWords: string): Observable<any> {
    return this.http.get(`${this.API_URL}/getProducts?search=${keyWords}&limit=5`)
  }
}
