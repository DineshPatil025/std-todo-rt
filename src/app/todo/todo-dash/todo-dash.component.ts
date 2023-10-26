import { Component, OnInit } from '@angular/core';
import { Itodo } from 'src/app/shared/models/todoitem';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todo-dash',
  templateUrl: './todo-dash.component.html',
  styleUrls: ['./todo-dash.component.scss']
})
export class TodoDashComponent implements OnInit {

todoArr : Array<Itodo> = []

  constructor( private _todoService : TodoService) { }

  ngOnInit(): void {
    this.todoArr = this._todoService.getAllTodoItem()
  }

}
