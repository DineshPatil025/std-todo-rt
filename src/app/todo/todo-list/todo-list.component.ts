import { Component, Input, OnInit } from '@angular/core';
import { Itodo } from 'src/app/shared/models/todoitem';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
@Input() todoobj !: Itodo;
  todoItemArr : Array<Itodo> = []
  constructor( private _todoService : TodoService) { }

  ngOnInit(): void {
    this.todoItemArr = this._todoService.getAllTodoItem()
    console.log(this.todoItemArr);
  }
}
