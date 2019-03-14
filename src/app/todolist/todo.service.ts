import { Injectable } from '@angular/core';
import {Todo} from './todo';
@Injectable()
export class TodoService {
    lastId: number = 0;
    todos: Todo[] = [];
    getTodos(): Todo[] {
        return this.todos;
    }
    addToDo(item: Todo): TodoService {
        if (!item.id) {
            item.id = ++this.lastId;
          }
          this.todos.push(item);
          return this;
      
    }
    deleteToDo(item: Todo): TodoService {
        this.todos = this.todos
            .filter(todo => todo.id !== item.id);
        return this;
    }
    updateToDo(id: string): void {
        console.log("update element by id",id)
    }
}