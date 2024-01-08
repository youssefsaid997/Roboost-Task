# StudentList

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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



# Project structure 

### Project is seperated in modules 

- Shared Module has Two main components 
** <app-input> ** : a generic input component with its validation messages depending on the controller passed to it.

** <app-form-component> ** : a generic form grouping all inputs with validation and binded to a form group.

- Components
    - edit student its a page consist of form to edit user data.
    - login page
    - sign up page
    - welcome page that consist of the login page and welcome page 

- Student module : which is used to add users and display list of users


## services used

### student service
- For student CRUD operations

### auth service 
-To handle login , registeration and logout 

## Guarding routes to by canActivate method


## Used Bootstrap for UI and Bootstrap Icons

# installation Steps

- clone the repo
- npm i -> to add the node_modules folder
- ng serve -o --watch -> to run the app and watch for any changes