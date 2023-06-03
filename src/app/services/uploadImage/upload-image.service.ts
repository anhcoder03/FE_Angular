import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UploadImageService {
  constructor(private http: HttpClient) {}
  Api_Url = 'http://localhost:3333/api/v1';
  handleUploadImage(file: any) {
    return this.http.post(`${this.Api_Url}/upload-image`, file);
  }
  handleDeleteImage(publicId: string) {
    return this.http.delete(`${this.Api_Url}/delete-image/${publicId}`);
  }
}
