import { Component } from '@angular/core';
import { TodoList } from './todoList';
import { TodoItem } from './todoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected title = 'todo';

  private list = new TodoList("Irina", [
    new TodoItem("Go for run", true),
    new TodoItem("Get flowers"), 
    new TodoItem("Collect tickets")
  ]);

  get username(): string
  {
    return this.list.user;
  }

  get itemCount(): number{
    return this.list.items.filter(item=>!item.complete).length;
  }
}
