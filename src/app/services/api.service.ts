// src/app/services/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from '../app.config'; // Import the config

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = AppConfig.apiUrl; // Use the API URL from the config

  constructor(private http: HttpClient) { }

  getAllBaskets(): Observable<any> {
    return this.http.get(`${this.baseUrl}/Baskets/GetAll`);
  }

  updateBasket(basket: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/Baskets/UpdateBasket`, basket);
  }

  addToBasket(productId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/Baskets/AddToBasket`, { productId });
  }

  deleteProduct(productId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/Baskets/DeleteProduct/${productId}`);
  }

  getAllCategories(): Observable<any> {
    return this.http.get(`${this.baseUrl}/Categories/GetAll`);
  }

  getCategory(categoryId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/Categories/GetCategory/${categoryId}`);
  }

  getFilteredProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/Products/GetFiltered`);
  }
}