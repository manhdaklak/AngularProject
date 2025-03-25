import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core.module';
import { IProductCategory } from './share/Models/ProductCategory';
import { IPagination } from './share/Models/Paination';
import { ProductCategoryService } from './services/product-category.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CoreModule, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Shop Sale';
  productCategories: IProductCategory[] = [];

  constructor(private productCategoryService: ProductCategoryService) {}

  getProductCategories() {
    this.productCategoryService.getProductCategories(1, 20).subscribe({
      next: (data) => (this.productCategories = data),
      error: (err) => console.error('Lỗi khi gọi API Product:', err),
    });
  }
  ngOnInit() {
    this.getProductCategories();
  }
}
