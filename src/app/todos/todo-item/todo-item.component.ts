import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITodo } from '../shared/todo.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() id: number;
  @Input() description: string;
  @Input() status: string;

  // @Output() editEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter();

  colorClass: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    const baseClassName = 'list-group-item-';
    switch (this.status) {
      case 'Pending':
        this.colorClass = `${baseClassName}info`
        break;
      case 'In Progress':
        this.colorClass = `${baseClassName}success`
        break;
      case 'Done':
        this.colorClass = `${baseClassName}primary`
        break;
      case 'Cancelled':
        this.colorClass = `${baseClassName}warning`
        break;

      default:
        break;
    }
  }

  onEdit() {
    this.router.navigate([`/todo-list/${this.id}`]);
  }

  onDelete() {
    this.deleteEvent.emit(this.id);
  }
}
