# 🍵 E-Commerce Coffee Web App

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.6.

[![Live Demo](https://img.shields.io/badge/🚀%20Live%20Demo-Click%20Here-green?style=for-the-badge)](https://nadiasv96.github.io/angular-ecommerce-project/)

---

## 📅 Project Overview

An Angular standalone e-commerce application for a coffee boutique. Features include:

* Responsive product listings and detail views
* Standalone architecture with modern Angular routing
* Contact form and mocked authentication page
* Product data loaded from JSON (mocked locally and static for deployment)
* Hosted on GitHub Pages

---

## 🚀 Live Demo

You can try the deployed application here:

**🔗 [https://nadiasv96.github.io/angular-ecommerce-project/](https://nadiasv96.github.io/angular-ecommerce-project/)**

> **Note:** This hosted version uses a static JSON file (`public/assets/produits.json`) as a mock product database.
> For full API-like simulation in development, use `json-server` with `db.json`.

---

## 💡 Development Instructions

### 1. Clone the project

```bash
git clone https://github.com/NadiaSV96/angular-ecommerce-project.git
cd angular-ecommerce-project
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the mock database locally (optional)

```bash
npx json-server db.json
```

By default, it serves on `http://localhost:3000/products`

### 4. Run the application locally

```bash
ng serve
```

Then go to: [http://localhost:4200](http://localhost:4200)

### 5. Build the project

```bash
ng build
```

Artifacts are saved in the `dist/` folder by default.

### 6. (Optional) Deploy to Firebase

```bash
firebase deploy
```

---

## 📂 Project Structure

```
e-commerce-coffee-web/
├── .angular/                  # Angular internal cache
├── .firebase/                 # Firebase deployment metadata
├── .vscode/                   # VS Code workspace settings (optional)
├── dist/                      # Production build output
├── node_modules/              # Project dependencies
├── public/                    # Static files copied as-is (images, favicon...)
│   └── assets/
│       ├── images/            # Product images
│       └── produits.json      # Static JSON file used for GitHub Pages
├── src/
│   └── app/
│       ├── core/              # Layout components (header, footer)
│       │   ├── footer/        # Footer component (<app-footer>)
│       │   └── header/        # Header and navigation bar (<app-header>)
│       ├── pages/             # Route-based views
│       │   ├── auth/          # Login/Signup page (<app-auth>)
│       │   ├── contact/       # Contact form page (<app-contact>)
│       │   ├── home/          # Homepage (<app-home>)
│       │   └── products/      # Product list and detail views
│       │       └── product-detail/  # Product detail component
│       ├── shared/            # Reusable UI elements (banners, cards, etc.)
│       ├── app.component.ts   # Root component
│       ├── app.component.html
│       ├── app.component.css
│       ├── app.config.ts      # Angular standalone config (routes, providers)
│       ├── app.routes.ts      # Application routes
│       └── products.service.ts# Service to manage product data and form
├── index.html                 # HTML entry point
├── main.ts                    # Main app entry point
├── styles.css                 # Global styles
├── .editorconfig              # Code formatting rules
├── .firebaserc                # Firebase project config
├── .gitignore                 # Files excluded from Git tracking
├── angular.json               # Angular project config
├── db.json                    # Mock database for json-server (dev only)
├── firebase.json              # Firebase Hosting config
├── package-lock.json          # Dependency lock file
├── package.json               # Project metadata and scripts
├── README.md                  # Project documentation
├── tsconfig.app.json          # TypeScript config for the app
├── tsconfig.json              # Global TypeScript config
└── tsconfig.spec.json         # TypeScript config for tests
```

---

## 🔧 Useful Commands

Generate a new component:

```bash
ng generate component component-name
```

Run tests:

```bash
ng test
```

Run end-to-end tests:

```bash
ng e2e
```

---

## 📄 Credits

Created by **Nadia Simard Villa**
Student in AEC IoT & AI, Collège Ahuntsic, Spring 2025

Under the supervision of Michée Kamte, teacher and B.Eng., CEP


