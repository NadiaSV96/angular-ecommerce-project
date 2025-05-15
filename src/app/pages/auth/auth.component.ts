import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-auth',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  titleService: Title = inject(Title);

  router: Router = inject(Router);
  route: ActivatedRoute = inject(ActivatedRoute);


  showLogin = true; // true = page de connexion, false = page d'inscription

  loginForm: FormGroup;
  registerForm: FormGroup;

  constructor() {
    this.titleService.setTitle('Ma Boutique Café | Connexion');

    const currentRoute = this.route.snapshot.routeConfig?.path;
    this.showLogin = (currentRoute === 'connexion');
    
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });

    this.registerForm = new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl('')
    });
  }

  toggleForm() {
    this.showLogin = !this.showLogin;
    if (this.showLogin) {
      this.router.navigate(['/connexion']);
    } else {
      this.router.navigate(['/inscription']);
    }
  }

  submitLogin() {
    console.log('Login Form:', this.loginForm.value);
  }

  submitRegister() {
    const password = this.registerForm.get('password')?.value;
    const confirmPassword = this.registerForm.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      console.error('Erreur : les mots de passe ne correspondent pas.');
      return;
    }

    console.log('Register Form:', this.registerForm.value);
  }
}
