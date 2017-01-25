# Forum

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.25.5.



## API Key

This application uses a database tool called Firebase to store and manage its data. Firebase is a cloud services provider that offers real time databases. It constantly updates and syncs whenever the data changes.

To utilize this functionality (necessary for editing, creating or destroying a post) please create a file in the src/app folder and name it api-keys.ts. The copy and paste the code below to access the database.

```````````````````

export var masterFirebaseConfig = {
  apiKey: "AIzaSyBiThKYDndCRlvMXkqRV_eCG1LYboO-1vY",
  authDomain: "forum-7785f.firebaseapp.com",
  databaseURL: "https://forum-7785f.firebaseio.com",
  storageBucket: "forum-7785f.appspot.com",
  messagingSenderId: "1083962943747"
};

```````````````````

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
