import { Component } from '@angular/core';

      import {
          Component
      } from '@angular/core';
    
      @Component({
          selector: 'demo-app',
          templateUrl: './app.component.html',
          moduleId: module.id
      })
      export class AppComponent {
          slider1: number = 30;
          slider2: number = 50;
          slider3: number = 130;
          slider4: Array < number > = [100, 400];
          slider5: number = 50;
          slider6: Array < number > = [100, 500, 2000, 2800];
          primary: number = 45;
          secondary: number = 45;
          success: number = 45;
          danger: number = 45;
          warning: number = 45;
          info: number = 45;
          formSettings = {
              lang: 'en',        // Specify language like: lang: 'pl' or omit setting to use default
              theme: 'ios-dark'  // Specify theme like: theme: 'ios' or omit setting to use default
          };
      }
