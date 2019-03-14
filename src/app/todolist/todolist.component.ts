import { Component, OnInit, DoCheck } from '@angular/core';
import { TodoService } from './todo.service';
import {Todo} from "./todo";

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: [ './todolist.component.css' ]
})
export class TodoList {
  newTodo: Todo = new Todo();
  constructor(private todoService: TodoService){
  }
  addToDo() {
    this.todoService.addToDo(this.newTodo);
    // Reinitialize todo so that input becomes empty
    this.newTodo = new Todo();
  }
  deleteToDo(item: Todo) {
    this.todoService.deleteToDo(item);
  }
  updateToDo(id: string) {
    this.updateToDo(id);
  }
  get todos() {
    return this.todoService.getTodos();
  }
}