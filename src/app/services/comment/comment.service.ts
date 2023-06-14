import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment } from 'src/app/interface/Comment';

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
  getAllComment():Observable<IComment[]>{
    return this.http.get<IComment[]>(`${this.Api_Url}/get-all-comment`)
   }
   DeleteComment(_id:String):Observable<any>{
    return this.http.delete(`${this.Api_Url}/remove-comment/${_id}`)
  }
}
