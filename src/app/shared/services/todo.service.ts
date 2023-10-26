import { Injectable } from '@angular/core';
import { Itodo } from '../models/todoitem';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoItemArr: Array<Itodo> = [
    { todoItem : "item1",todoId : "1"},
    { todoItem : "item2",todoId : "2"}
  ]
  constructor() { }

  getAllTodoItem(){
    return this.todoItemArr;
  }

  addNewItem(newTodo: Itodo){
    
    console.log(newTodo);
    
    this.todoItemArr.push(newTodo);
    
    console.log(this.todoItemArr);
    
  }
}
