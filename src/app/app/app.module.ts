import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FirstFormComponent } from '../first-form/first-form.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    
    Component
   

  ],
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule, BrowserModule,
  
 
  
    
  ],
 
  bootstrap: [FirstFormComponent]
})
export class AppModule { }

