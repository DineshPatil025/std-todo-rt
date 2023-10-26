import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';




const matModArr = [
  MatButtonModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...matModArr
  ],
  exports: [
    
    ...matModArr
  ]
})
export class MaterialModule { }
