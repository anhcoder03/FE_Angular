import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { INews } from 'src/app/interface/News';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  Api_Url = 'http://localhost:3333/api/v1';

  getAllNews():Observable<INews[]>{
    return this.http.get<INews[]>(`${this.Api_Url}/get-all-news`)
   }
  getOneNews(_id: string): Observable<any> {
    return this.http.get(`${this.Api_Url}/get-news/${_id}`);
  }
  getNewsDetail(slug: any): Observable<any> {
    return this.http.get(`${this.Api_Url}/getNewsDetail/${slug}`);
  }
  deleteNews(_id: string): Observable<IData> {
    return this.http.delete(`${this.Api_Url}/remove-news/${_id}`);
  }
  AddNews(news: INews): Observable<INews> {
    return this.http.post<INews>(`${this.Api_Url}/create-news`, news)
  }
 
  UpdateNews(news: INews): Observable<INews> {
    return this.http.put<INews>(`${this.Api_Url}/update-news/${news._id}`, news)
  }
  getNewById(_id: string): Observable<INews> {
    return this.http.get<INews>(`${this.Api_Url}/getNews/${_id}`);
  }
}
interface IData {
  success?: boolean;
  message?: string;
  data?: INews | INews[];
  totalPage?: number;
  totalProduct?: any;
}
