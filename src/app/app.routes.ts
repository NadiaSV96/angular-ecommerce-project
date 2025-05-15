import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/products/product-detail/product-detail.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AuthComponent } from './pages/auth/auth.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produits', component: ProductsComponent },
  { path: 'produits/:id', component: ProductDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'connexion', component: AuthComponent },
  { path: 'inscription', component: AuthComponent },
  { path: '**', redirectTo: '' } // redirection si la route n'existe pas
];