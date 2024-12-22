import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];
  private cartKey = 'cartItems';
  
  constructor() {
    this.loadCart();
  }

  private loadCart() {
    const storedItems = localStorage.getItem(this.cartKey);
    if (storedItems) {
      this.cartItems = JSON.parse(storedItems);
    } else {
      this.cartItems = [];
    }
  }

  private saveCart() {
    localStorage.setItem(this.cartKey, JSON.stringify(this.cartItems));
  }

  addToCart(item: any) {
    this.cartItems.push(item);
    this.saveCart();
  }

  getCartItems() {
    return this.cartItems;
  }

  removeFromCart(index: number) {
    if (index >= 0 && index < this.cartItems.length) {
      this.cartItems.splice(index, 1);
      this.saveCart();
    }
  }

  clearCart() {
    this.cartItems = [];
    localStorage.removeItem(this.cartKey);
  }
}
