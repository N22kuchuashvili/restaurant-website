// src/app/components/basket/basket.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
  imports: [CommonModule],
})
export class BasketComponent implements OnInit {
  basketItems: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAllBaskets().subscribe((data) => {
      this.basketItems = data;
    });
    this.apiService.getAllFilter().subscribe((data: any) => {
      console.log(data);
    });
  }
  increaseQuantity(basketItems: any) {
    basketItems.quantity++;
  }
  decreaseQuantity(basketItems : any) {
    if (basketItems.quantity > 1) {
      basketItems.quantity--;
    }
  }

  deleteProduct(productId: number) {
    this.apiService.deleteProduct(productId).subscribe((response) => {
      console.log('Product removed from basket:', response);
      this.basketItems = this.basketItems.filter(
        (item) => item.product.id !== productId
      );
    });
  }
}
// import { Component ,OnInit } from '@angular/core';
// import { FooterComponent } from "../../Components/footer/footer.component";
// import { RouterModule } from '@angular/router';
// import { RestaurantService } from '../../Services/restaurant.service';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { IProduct } from '../../Models/product';

// @Component({
//   selector: 'app-cart',
//   imports: [FooterComponent, RouterModule, FormsModule , CommonModule],
//   templateUrl: './cart.component.html',
//   styleUrl: './cart.component.scss'
// })
// export class CartComponent {

//   constructor(private httpRestaurant: RestaurantService){}

//   cartItems: any[] = [];
//   products : IProduct[] = [];
//   totalPrice: number = 0;

//   ngOnInit(): void {
//     this.loadCart();
//   }

//   loadProducts() {
//     this.httpRestaurant.getAllProducts().subscribe({
//       next: (data: any) => {
//         this.products = data;
//       }
//     });
//   }

//   loadCart() {
//     this.httpRestaurant.getBasketItems().subscribe({
//       next: (data : any) => {
//         this.cartItems = data;
//         this.calculateTotal();
//       }
//     });
//   }

//   increase(item: any) {
//     item.quantity += 1;
//     this.updateCart(item);
//   }

//   decrease(item: any) {
//     if (item.quantity > 1) {
//       item.quantity -= 1;
//       this.updateCart(item);
//     }
//   }

//   updateCart(item: any) {
//     const objForPost = {
//       quantity : item.quantity,
//       price : item.price,
//       productId : item.product.id
//     }
//     this.httpRestaurant.updateBasket(objForPost).subscribe(() => {
//       this.calculateTotal(); 
//     });
//   }



//   calculateTotal() {
//     this.totalPrice = this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   }

  

// }


