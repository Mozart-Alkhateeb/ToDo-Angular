import { Component, OnInit } from '@angular/core';
import { ITodo } from '../shared/todo.model';
import { ActivatedRoute } from '@angular/router';
import { TodosService } from '../shared/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoModel: ITodo = {
    id: 0,
    description: '',
    status: ''
  };

  constructor(private route: ActivatedRoute, private service: TodosService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != '0') {
      this.service.getById(parseInt(id)).subscribe((res) => {
        this.todoModel = res;
      });
    }
  }

  onSubmit() {
    if (this.todoModel.id == 0) {
      this.service.post(this.todoModel).subscribe((res) => {
        console.log(res);
      });
    } else {
      this.service.put(this.todoModel).subscribe((res) => {
        console.log(res);
      });
    }
  }

}
