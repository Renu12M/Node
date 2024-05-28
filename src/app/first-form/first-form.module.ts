import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FirstFormComponent } from './first-form.component';


@NgModule({
  declarations: [FirstFormComponent],
  imports: [ CommonModule,
    FormsModule,
  ],
  exports:[FirstFormComponent]
})
export class FirstFormModule { }
