import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';
import { ProductsService, Product } from '../../products.service';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-products',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  titleService: Title = inject(Title);
  productService: ProductsService = inject(ProductsService);

  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor() {
    this.titleService.setTitle('Ma Boutique Café | Produits');
    this.productService.getProducts()
      .then((products: Product[]) => {
        this.products = products;
        this.filteredProducts = products;
      });    // Récupère les produits depuis le service et les stocke dans la variable products et les stocke dans la variable filteredProducts
  }

  onSearch(event: Event) {
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
  
    this.filteredProducts = this.products.filter(product => {
      const nameMatch = product.name.toLowerCase().includes(searchTerm);
      const descriptionMatch = product.description.toLowerCase().includes(searchTerm);
      const priceMatch = product.price.toString().includes(searchTerm); 
  
      return nameMatch || descriptionMatch || priceMatch;
    });
  }
  
}
