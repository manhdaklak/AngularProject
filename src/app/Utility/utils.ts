import { HttpHeaders, HttpParams } from '@angular/common/http';

/**
 * Hàm tạo HttpParams chung
 * @param params Object chứa danh sách tham số
 */
export function createHttpParams(params: { [key: string]: any }): HttpParams {
  let httpParams = new HttpParams();
  Object.keys(params).forEach(key => {
    if (params[key] !== null && params[key] !== undefined) {
      httpParams = httpParams.set(key, params[key].toString());
    }
  });
  return httpParams;
}

/**
 * Hàm tạo HttpHeaders chung
 */
export function createHttpHeaders(): HttpHeaders {
  return new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
}
