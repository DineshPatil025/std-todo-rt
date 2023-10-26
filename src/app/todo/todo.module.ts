import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoDashComponent } from './todo-dash/todo-dash.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    TodoDashComponent,
    TodoFormComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule

    
  ],
  exports:   [
    TodoDashComponent
  ]
})
export class TodoModule { }
