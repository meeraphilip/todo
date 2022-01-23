import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos!: Todo[];
  todoText!: string;

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: "First todo",
        completed: false
      },
      {
        content: "Second todo",
        completed: true
      }
    ]
  }

  addTodo(){
    this.todos.push(
      {
        content: this.todoText,
        completed: false
      }
    );
    this.todoText = '';
  }

  toggleDone(id: number){
    this.todos.map((todo, i) => {
      if(i == id)
        todo.completed = !todo.completed;
    })
  }

  removeTodo(id: number){
    this.todos = this.todos.filter((todo, i) => i != id );
  }

}
