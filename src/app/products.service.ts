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

  readonly url = 'assets/produits.json';
  readonly http = inject(HttpClient);
  private productsCache: Product[] | null = null;


  async getProducts(): Promise<Product[]> {
    if (!this.productsCache) {
    this.productsCache = await this.http.get<Product[]>(this.url).toPromise() ?? [];
    }
    return this.productsCache;
  }

  async getProductById(id: number): Promise<Product | undefined> {
    const products = await this.getProducts();
    return products.find(p => p.id === id);
  }

  contactData(firstname: string, lastname: string, email: string, message: string): void {
    console.log(`Data submitted: ${firstname}, ${lastname}, ${email}, ${message}`);
  }
}
