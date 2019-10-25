import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from '../todos.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoComponent } from '../todo/todo.component';


@NgModule({
  declarations: [TodosComponent, TodoItemComponent, TodoComponent],
  imports: [
    CommonModule,
    FormsModule,
    TodosRoutingModule
  ]
})
export class TodosModule { }
