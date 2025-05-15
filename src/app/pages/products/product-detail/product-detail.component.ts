import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Product, ProductsService } from '../../../products.service';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  titleService: Title = inject(Title);
  route: ActivatedRoute = inject(ActivatedRoute);
  productService: ProductsService = inject(ProductsService);

  product: Product | undefined;

  constructor() {
    const id = Number(this.route.snapshot.params['id']);
    this.productService.getProductById(id)
      .then((product: Product | undefined) => {
        this.product = product;
    
        if(this.product) {
      this.titleService.setTitle('Ma Boutique Café | ' + this.product.name);
    }
  });
}

hasSuggestions(): boolean {
  return !!(this.product?.mokaPot ||
            this.product?.frenchPress ||
            this.product?.manualMachine ||
            this.product?.automaticMachine ||
            this.product?.coffeeMaker ||
            this.product?.nespresso);
}

isFavorite = false;

toggleFavorite() {
  this.isFavorite = !this.isFavorite;
}

}
