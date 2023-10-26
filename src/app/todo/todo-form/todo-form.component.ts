import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Itodo } from 'src/app/shared/models/todoitem';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { TodoService } from 'src/app/shared/services/todo.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  todoForm !: FormGroup

  constructor(private _uuidSrvice: UuidService,
    private _todoService: TodoService, private _snackbar : SnackbarService) { }

  ngOnInit(): void {
    this.createTodoForm()
  }
  createTodoForm() {
    this.todoForm = new FormGroup({
      todoItem: new FormControl(null, [Validators.required])
    })
  }

  onAddToDoItem() {

    if (this.todoForm.valid) {
      let newtodoItem: Itodo = { ...this.todoForm.value, todoId: this._uuidSrvice.create_UUID() }
      console.log(newtodoItem);
      this._todoService.addNewItem(newtodoItem)
      this.todoForm.reset()
      this._snackbar.openSnackBar(`ToDo item ${newtodoItem.todoItem} added`,'close')
    }

  }

}
