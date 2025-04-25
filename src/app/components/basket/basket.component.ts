// src/app/components/basket/basket.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  basketItems: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAllBaskets().subscribe(data => {
      this.basketItems = data;
    });
  }

  deleteProduct(productId: number) {
    this.apiService.deleteProduct(productId).subscribe(response => {
      console.log('Product removed from basket:', response);
      this.basketItems = this.basketItems.filter(item => item.id !== productId);
    });
  }
  
}
