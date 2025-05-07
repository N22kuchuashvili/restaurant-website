// src/app/components/product-list/product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  imports: [CommonModule]
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  categoryId: number | null = null;

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoryId = params['id'];
      if(this.categoryId ){
        this.getFilteredProducts();
      }
      else{
        this.getAllProducts()
      }
    
    });
  }
  getAllProducts(){
    this.apiService.getAllProduct().subscribe((data :any) => {
      this.products = data
      console.log(data)
    })
  }

  getFilteredProducts() {
    this.apiService.getFilteredProducts(this.categoryId).subscribe(data => {
       this.products = data
       console.log(data)
      // this.products = data.filter((product: { categoryId: number | null; }) => product.categoryId === this.categoryId);
    });
  }

  addToBasket(productId: number) {
    this.apiService.addToBasket(productId).subscribe(response => {
      console.log('Product added to basket:', response);
    });
  }
}