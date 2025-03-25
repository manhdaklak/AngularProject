import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProductCategory } from '../share/Models/ProductCategory'; 

@Injectable({
  providedIn: 'root' // Giúp service có thể sử dụng ở mọi nơi mà không cần import vào providers
})
export class ProductCategoryService {
  private apiUrl = 'http://localhost:5055/api/ProductCategory/GetData';

  constructor(private http: HttpClient) {}

  getProductCategories(page: number, pageSize: number): Observable<IProductCategory[]> {
    const body = new URLSearchParams();
    body.set('page', page.toString());
    body.set('pageSize', pageSize.toString());

    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    return this.http.post<{ IsSuccess: boolean; Message: string; Data: IProductCategory[] }>(
      this.apiUrl,
      body.toString(),
      { headers }
    ).pipe(
      map(response => response.Data) // Chỉ lấy danh sách ProductCategory từ API
    );
  }
}
