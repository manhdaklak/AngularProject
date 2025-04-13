import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseService } from './base.service';
import { IProductDetail } from '../share/Models/ProductDetail';
import { createHttpHeaders, createHttpParams } from '../Utility/utils';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {
  private apiEndpoint = 'ProductDetail/GetData';

  constructor(private baseService: BaseService) {}

  getProductDeatail(page: number, pageSize: number): Observable<IProductDetail[]> {
    const params = createHttpParams({ page, pageSize });
    const headers = createHttpHeaders();

    return this.baseService.post<{ IsSuccess: boolean; Message: string; Data: IProductDetail[] }>(
      this.apiEndpoint,
      params.toString(),
      headers
    ).pipe(
      map(response => {
        if (!response || !response.Data) return [];
        
        // Chuyển đổi đường dẫn ảnh từ tương đối sang tuyệt đối cho mỗi sản phẩm
        return response.Data.map(product => ({
          ...product,
          // Thêm domain vào đường dẫn ảnh nếu có
          AvatarImage: product.AvatarImage ? `${environment.apiUrl}/${product.AvatarImage}` : ''
        }));
      })
    );
  }
}
