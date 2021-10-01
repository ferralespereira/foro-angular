# ForoAngular

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

# JFP NOTES

## After finishing installing Angular CLI, I installed these dependencies:
* npm i @nowzoo/ngx-highlight-js @nowzoo/sheetload --save
* npm install angular-file-uploader --save
* npm install angular2-moment --save
* npm install bootstrap --save
* npm install jquery --save
* npm install @types/jquery --save

## To generate component:
* ng g component components/component_name

## To deploy the proyect in production mode:
### First step (Create a "dist" folder):
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

### Second step (configurate your web server, in my case apache2):
* To apache configuration:
* eject: `sudo a2enmod rewrite`

* Edit the "*.conf" file in your apache, in my case:
* got to `/etc/apache2/sites-enabled`
* eject: `sudo nano 000-default.conf`
* configure the file like this to tell the server where yor web site:

```
<VirtualHost 127.0.0.3:80>
   ServerName thedomain.com
   ServerAdmin webmaster@thedomain.com
   DocumentRoot /var/www/html/node-proyect/foro-angular/dist/foro-angular

   <Directory "/var/www/html/var/www/html/node-proyect/foro-angular/dist/foro-angular">
        AllowOverride All
   </Directory>

   ErrorLog ${APACHE_LOG_DIR}/error.log
   CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```
* restart apache: `sudo systemctl restart apache2`
