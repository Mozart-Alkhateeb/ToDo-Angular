import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo-Angular';
  baseUrl = 'http://localhost:58635/api';
  todos: any
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
    this.http.get(this.baseUrl + "/ToDos").subscribe((response) => {
      this.todos = response;
      console.log(response);
    });
  }

  onEdit(todo){
    this.todoModel = todo;
    console.log(todo);
  }
}
