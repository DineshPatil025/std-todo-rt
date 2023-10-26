import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';




const matModArr = [
  MatButtonModule,
  MatSnackBarModule
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
