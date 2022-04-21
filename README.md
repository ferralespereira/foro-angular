# [ForoAngular](https://foro.javierfolder.com/)

<p align="center">
  <img src="https://github.com/ferralespereira/foro-angular/blob/master/src/assets/img/jforo1.svg" width="350" title="Foro Angular">
</p>

<p align="center">
<strong>This a project developed in Angular to a Forum. It is the Frontend of the Api Rest at https://github.com/ferralespereira/api-node-rest</strong>
</p>
<br>

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Author's Notes

## After finishing installing Angular CLI, I installed these dependencies:
* `npm i @nowzoo/ngx-highlight-js @nowzoo/sheetload --save`
* `npm install angular-file-uploader --save`
* `npm install angular2-moment --save`
* `npm install bootstrap --save`
* `npm install jquery --save`
* `npm install @types/jquery --save`

## To generate component:
* ng g component components/component_name

## To deploy the proyect in production mode:
* Edit "angular.json" file making this changes:
```
"budgets": [
                {
"type": "initial",
"maximumWarning": "4mb",
"maximumError": "5mb"
```
* Go by console to the proyect folder.
* Eject the command `ng build` to create the "dist" folder.    
