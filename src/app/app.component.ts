import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core.module';
import { IProductCategory } from './share/Models/ProductCategory';
import { IPagination } from './share/Models/Paination';
import { ProductCategoryService } from './services/product-category.service';
import { ProductDetailService } from './services/product-detail.service';
import { NgFor } from '@angular/common';
import { IProductDetail } from './share/Models/ProductDetail';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [CoreModule, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Shop Sale';
  productCategories: IProductCategory[] = [];
  productDetails: IProductDetail[] = [];

  constructor(
    private productCategoryService: ProductCategoryService,  
    private productDetailService: ProductDetailService 
  ) {}

  ngOnInit() {
    this.loadProductCategories();
    this.loadProductDetails();
  }

  private loadProductCategories() {
    this.productCategoryService.getProductCategories(1, 20)
      .pipe(
        catchError(error => {
          console.error('Lỗi khi tải danh mục sản phẩm:', error);
          return of([]); // Trả về mảng rỗng nếu có lỗi
        })
      )
      .subscribe({
        next: (data) => {
          this.productCategories = data;
        },
        error: (error) => {
          console.error('Lỗi xử lý dữ liệu danh mục:', error);
        }
      });
  }

  private loadProductDetails() {
    this.productDetailService.getProductDeatail(1, 20)
      .pipe(
        catchError(error => {
          console.error('Lỗi khi tải chi tiết sản phẩm:', error);
          return of([]); // Trả về mảng rỗng nếu có lỗi
        })
      )
      .subscribe({
        next: (data) => {
          this.productDetails = data;
        },
        error: (error) => {
          console.error('Lỗi xử lý dữ liệu sản phẩm:', error);
        }
      });
  }
}
