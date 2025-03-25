import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private apiBaseUrl = 'http://localhost:5055/api'; // URL chung cho API

  constructor(private http: HttpClient) {}

  // 🟢 GET request
  get<T>(endpoint: string, params?: HttpParams): Observable<T> {
    return this.http.get<T>(`${this.apiBaseUrl}/${endpoint}`, { params });
  }

  // 🟢 POST request
  post<T>(endpoint: string, body: any, headers?: HttpHeaders): Observable<T> {
    return this.http.post<T>(`${this.apiBaseUrl}/${endpoint}`, body, { headers });
  }
}
