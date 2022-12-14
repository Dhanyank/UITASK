import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import {MatTabsModule} from '@angular/material/tabs';
import{HttpClientModule} from '@angular/common/http'
import {MatCardModule} from '@angular/material/card';
import { NgFor } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    HttpClientModule,
    MatCardModule,
    NgFor,
  
    
    
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
