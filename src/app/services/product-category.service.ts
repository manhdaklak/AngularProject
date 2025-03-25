import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseService } from './base.service';
import { IProductCategory } from '../share/Models/ProductCategory';
import { createHttpHeaders, createHttpParams } from '../Utility/utils'; // Import hàm tiện ích

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {
  private apiEndpoint = 'ProductCategory/GetData';

  constructor(private baseService: BaseService) {}

  getProductCategories(page: number, pageSize: number): Observable<IProductCategory[]> {
    const params = createHttpParams({ page, pageSize });
    const headers = createHttpHeaders();

    return this.baseService.post<{ IsSuccess: boolean; Message: string; Data: IProductCategory[] }>(
      this.apiEndpoint,
      params.toString(),
      headers
    ).pipe(
      map(response => response.Data) 
    );
  }
}
