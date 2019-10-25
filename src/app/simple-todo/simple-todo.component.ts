import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-simple-todo',
  templateUrl: './simple-todo.component.html',
  styleUrls: ['./simple-todo.component.css']
})

export class SimpleTodoComponent {
  title = 'Simple ToDo';
  baseUrl = 'http://localhost:58635/api';
  todos: any[]
  todoModel: any = {}

  constructor(private http: HttpClient) {
    this.getDtos()
  }

  onSubmit() {
    if(this.todoModel.id){
      this.http.put(this.baseUrl + "/ToDos/" + this.todoModel.id, this.todoModel).subscribe((response) => {
        console.log(response);
        this.todoModel= {} //Empty our object
        this.getDtos() //Get updated dto list
      });
    }else{
      this.http.post(this.baseUrl + "/ToDos", this.todoModel).subscribe((response) => {
        console.log(response);
        this.todoModel= {} //Empty our object
        this.getDtos() //Get updated dto list
      });
    }
  }

  getDtos(){
    this.http.get<any[]>(this.baseUrl + "/ToDos").subscribe((response) => {
      this.todos = response;
      console.log(response);
    });
  }

  onEdit(todo){
    this.todoModel.id = todo.id;
    this.todoModel.status = todo.status;
    this.todoModel.description = todo.description;
    console.log(todo);
  }

  onDelete(todo, i){
    this.http.delete(this.baseUrl + `/ToDos/${todo.id}`).subscribe((response) => {
      console.log(response);
      //this.getDtos(); //Get updated dto list
      this.todos.splice(i, 1); //Remove item manually without server request
    });
  }
}
