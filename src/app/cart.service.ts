import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CartService {
  items = [];

  // The addToCart() method appends a product to an array of items.

  addToCart = product => {
    this.items.push(product);
  };

  // The getItems() method collects the items users add to the cart and returns each item with its associated quantity.

  getItems = () => {
    return this.items;
  };

  // The clearCart() method returns an empty array of items.

  clearCart = () => {
    // console.log(this.items);
    this.items = [];
    // console.log(this.items);
    return this.items;
  };

  getShippingPrices() {
    return this.http.get("/assets/shipping.json");
  }

  constructor(private http: HttpClient) {}
}
