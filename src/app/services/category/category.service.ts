import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ICategory } from 'src/app/interface/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) { }

  API_URL = "http://localhost:3333/api/v1"

  getAllCategory(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${this.API_URL}/get-all-category`)
  }
  getOneCategory(_id: string): Observable<ICategory> {
    return this.http.get<ICategory>(`${this.API_URL}/get-category/${_id}`)
  }
  AddCategory(cate: ICategory): Observable<ICategory> {
    return this.http.post<ICategory>(`${this.API_URL}/create-category`, cate)
  }
  UpdateCategory(cate: ICategory): Observable<ICategory> {
    return this.http.put<ICategory>(`${this.API_URL}/update-category/${cate._id}`, cate)
  }
  DeleteCategory(_id: string): Observable<any> {
    return this.http.delete(`${this.API_URL}/remove-category/${_id}`)
  }
}
