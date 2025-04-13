import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseService } from './base.service';
import { IProductDetail } from '../share/Models/ProductDetail';
import { createHttpHeaders, createHttpParams, getAbsoluteImagePath } from '../Utility/utils'; // Thêm getAbsoluteImagePath

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
        // Chuyển đổi đường dẫn ảnh từ tương đối sang tuyệt đối cho mỗi sản phẩm
        const productDetails = response.Data.map(product => ({
          ...product,
          AvatarImage: getAbsoluteImagePath(product.AvatarImage || '')
        }));
        return productDetails;
      })
    );
  }
}
