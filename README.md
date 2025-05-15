# MyFinalProject

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


myFinalProject/
├── .angular/                  # Dossier Angular interne (auto-géré)
├── .firebase/                 # Dossier Firebase interne (auto-géré)
├── .vscode/                   # Paramètres VS Code (facultatif)
├── dist/                      # Dossier de sortie des builds
├── node_modules/              # Dépendances du projet
├── public/                    # Fichiers statiques (assets, favicon...)
├── src/
│   └── app/
│       ├── core/              # Composants persistants du layout
│       │   ├── footer/        # Pied de page (<app-footer>)
│       │   └── header/        # En-tête/navigation (<app-header>)
│       ├── pages/             # Pages principales accessibles par route
│       │   ├── auth/          # Connexion / inscription (<app-auth>)
│       │   ├── contact/       # Formulaire de contact (<app-contact>)
│       │   ├── home/          # Accueil avec bannière et produits (<app-home>)
│       │   └── products/      # Liste des produits (<app-products>)
│       │       └── product-detail/ # Détails d'un produit (<app-product-detail>)
│       ├── shared/            # Composants réutilisables (ex: banner, cards)
│       ├── app.component.ts   # Composant racine de l'app
│       ├── app.component.html
│       ├── app.component.css
│       ├── app.config.ts      # Configuration Angular standalone (routes, providers)
│       |── app.routes.ts      # Définition des routes de l'application
        └── products.service.ts# Service pour gérer les produits et formulaire
├── index.html                 # Fichier HTML racine
├── main.ts                    # Point d'entrée principal
├── styles.css                 # Feuille de style globale
├── .editorconfig              # Règles d'édition (indentation, etc.)
|── .firebaserc                # Configuration Firebase
├── .gitignore                 # Fichiers à exclure de Git
├── angular.json               # Configuration globale Angular
├── package.json               # Dépendances et scripts du projet
├── db.json                    # Données JSON pour les produits
├── firebase.json              # Configuration Firebase Hosting
├── package-lock.json          # Verrouillage des dépendances exactes
├── package.json               # Dépendances et scripts du projet
├── README.md                  # Documentation du projet
├── tsconfig.app.json          # Config TypeScript pour l'app
├── tsconfig.json              # Config TypeScript générale
└── tsconfig.spec.json         # Config TypeScript pour les tests



## Étapes pour lancer le projet

1. Cloner ou décompresser le dossier `myFinalProject`  
   (sans les dossiers `node_modules/` ni `dist/`).

2. Installer les dépendances (une seule fois) :
```bash
npm install
```

3. Lancer le serveur de la base de données locale (`db.json`) avec `json-server` :
```bash
json-server --watch db.json
#ou 
npx json-server db.json
```

4. Démarrer le projet Angular localement :
```bash
npm start
# ou
ng serve
```

5. Générer un build pour la production :
```bash
ng build
```

6. (Optionnel) Déployer sur Firebase (si configuré) :
```bash
firebase deploy
```
