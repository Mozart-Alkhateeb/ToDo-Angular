import { Component, OnInit } from '@angular/core';
import { TodosService } from './shared/todos.service';
import { ITodo } from './shared/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  title = 'Advanced ToDo';
  todos: ITodo[] = [];

  constructor(private service: TodosService) { }

  ngOnInit() {
    this.service.get().subscribe((res)=>{
      this.todos = res;
    });
  }

  onDelete(id){
    console.log(id);
    this.service.delete(id).subscribe((res)=>{
      const toDelete = this.todos.find(q=> q.id == id);
      const toDeleteIndex = this.todos.indexOf(toDelete);
      this.todos.splice(toDeleteIndex, 1);
    });
  }
}
