import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  mokaPot?: boolean;
  frenchPress?: boolean;
  manualMachine?: boolean;
  automaticMachine?: boolean;
  coffeeMaker?: boolean;
  nespresso?: boolean;
  features: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  readonly url = 'http://localhost:3000/products';
  readonly http = inject(HttpClient);

  async getProducts(): Promise<Product[]> {
    const response = await fetch(this.url);
    return (await response.json()) ?? [];
  }

  async getProductById(id: number): Promise<Product | undefined> {
    const response = await fetch(`${this.url}/${id}`);
    return (await response.json()) ?? {};
  }

  contactData(firstname: string, lastname: string, email: string, message: string): void {
   console.log(`Data submitted: ${firstname}, ${lastname}, ${email}, ${message}`);
  }
}
