import { ToDoKeyLocalStorage } from '../models/enum/ToDoKeyLocalStorage';
import { ToDo } from './../models/model/Todo.model';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToDoSignalsService {
  public todoState = signal<Array<ToDo>>([]);

  public updateTodos({ id, title, description, done, category }: ToDo): void {
    if ((id && title && description !== null) || undefined) {
      this.todoState.mutate((todos) => {
        if (todos !== null) {
          todos.push({
            id,
            title,
            description,
            category,
            done,
            createdAt: new Date(),
          });
        }
      });
      this.saveTodosInLocalStorage();
    }
  }

  public saveTodosInLocalStorage(): void {
    const todos = JSON.stringify(this.todoState());
    todos && localStorage.setItem(ToDoKeyLocalStorage.TODO_LIST, todos);
  }
}
