import { Injectable } from '@angular/core';
import { Iproducts } from './Iproducts';
import { last } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  url = 'https://fakestoreapi.com/products';
  constructor() {}
  async getProducts(): Promise<Iproducts[]> {
    const prods = await fetch(this.url);
    const products = (await prods.json()) ?? [];
    return products;
  }
  async getProductsById(id: Number): Promise<Iproducts>{
    const products = await fetch(`${this.url}/${id}`);
    return (await products.json())??{};
  }
  async submitApplication(firstName:String, lastName:String, email: String){
    alert(JSON.stringify({firstName,lastName,email}))
}

}