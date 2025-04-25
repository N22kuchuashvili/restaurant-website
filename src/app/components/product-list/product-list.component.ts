// src/app/components/product-list/product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  categoryId: number | null = null;

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.categoryId = params['categoryId'];
      this.getProducts();
    });
  }

  getProducts() {
    this.apiService.getFilteredProducts().subscribe(data => {
      this.products = data.filter((product: { categoryId: number | null; }) => product.categoryId === this.categoryId);
    });
  }

  addToBasket(productId: number) {
    this.apiService.addToBasket(productId).subscribe(response => {
      console.log('Product added to basket:', response);
    });
  }
}