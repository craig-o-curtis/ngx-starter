
# This uses Angular 4.0.2

# Environment configuration
For builds:
 ng build --environment=environment
 ng build --environment=production
shorthand:
 ng b -prod
 ng b -e qas
 ng b -e sandbox

# for tree-shaking, do:
 ng b -prod -e dev
 ng b -prod -e sandbox
 ng b -prod -e qas
 ng b -prod -e prod


For Serve:
 ng serve --environment=environment
 ng serve --environment=production
shorthand
 ng s -prod
 ng s -e qas
 ng s -e sandbox

# NgxStarter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.1.

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

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README]
