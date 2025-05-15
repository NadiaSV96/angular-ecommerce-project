import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService, Product } from '../../products.service';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';
import { BannerComponent } from '../../shared/banner/banner.component';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  imports: [ProductCardComponent, BannerComponent, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  titleService: Title = inject(Title);
  productService: ProductsService = inject(ProductsService);
  previewProducts: Product[] = [];

  constructor() {
    this.titleService.setTitle('Ma Boutique Café | Accueil');
    this.productService.getProducts()
      .then((products: Product[]) => {
        this.previewProducts = products.filter(p => [1, 2, 3].includes(Number(p.id))); // On récupère les 3 premiers produits par leur ID
      });
  }
}
