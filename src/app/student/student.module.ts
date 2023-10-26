import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudDashComponent } from './stud-dash/stud-dash.component';
import { StudFormComponent } from './stud-form/stud-form.component';
import { StudTableComponent } from './stud-table/stud-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    StudDashComponent,
    StudFormComponent,
    StudTableComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports:[StudDashComponent]
})
export class StudentModule { }
