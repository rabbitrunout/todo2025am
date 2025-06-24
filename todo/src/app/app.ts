import { Component } from '@angular/core';
import { TodoList } from './todoList';
import { TodoItem } from './todoItem';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button'; 
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatBadgeModule } from '@angular/material/badge'; 
import { MatTableModule  } from '@angular/material/table'; 
import { MatCheckboxModule  } from '@angular/material/checkbox'; 
import { MatFormFieldModule   } from '@angular/material/form-field'; 
import { MatInputModule  } from '@angular/material/input'; 
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  imports: [FormsModule,
    MatButtonModule, MatToolbarModule, MatIconModule, MatBadgeModule, MatTableModule, MatCheckboxModule , 
    MatFormFieldModule, MatInputModule, MatSlideToggleModule 
  ],
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

  get items(): readonly TodoItem[] { 
    return this.list.items.filter(item => !item.complete); 
  }
}
