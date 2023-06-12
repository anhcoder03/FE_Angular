import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient) {}
  Api_Url = 'http://localhost:3333/api/v1';

  createComment(data: any) {
    return this.http.post(`${this.Api_Url}/create-comment`, data);
  }
  getCommentByProductId(productId: any) {
    return this.http.get(`${this.Api_Url}/getComment/${productId}`);
  }
}
