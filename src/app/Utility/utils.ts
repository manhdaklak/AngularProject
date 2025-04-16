import { HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  isRunningInBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }
}

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

export function getAbsoluteImagePath(relativePath: string): string {
  if (!relativePath) return '';
  
  // Kiểm tra nếu đã là đường dẫn tuyệt đối
  if (relativePath.startsWith('http://') || relativePath.startsWith('https://')) {
    return relativePath;
  }

  // Sử dụng API URL từ environment
  const baseUrl = environment.apiUrl;
  return `${baseUrl}/${relativePath.replace(/^\//, '')}`;
}
