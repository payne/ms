import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MbscModule } from '../js/mobiscroll.angular.lite.min.js';
import { AppComponent } from 'app/app.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, JsonpModule, FormsModule, ReactiveFormsModule, MbscModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
export { mobiscroll }

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/