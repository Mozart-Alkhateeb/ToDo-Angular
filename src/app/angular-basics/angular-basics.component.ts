import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-basics',
  templateUrl: './angular-basics.component.html',
  styleUrls: ['./angular-basics.component.css']
})
export class AngularBasicsComponent implements OnInit {

  // 2
  greetings = 'Hello Code';

  getLanguage() {
    return 'TypeScript';
  }
  // 2

  // 3
  enableBoundButton = false;

  constructor() {
    // 3
    setTimeout(() => {
      this.enableBoundButton = true;
    }, 3000);
    // 3
  }

  // 5
  makeAnAction() {
    console.log('button was clicked!!!');
  }
  // 5

  // 5.1
  inputText = 'Initial Text';
  onInput(event) {
    console.log(event);
    this.inputText = event.target.value;
  }
  // 5.1

  // 8
  allowNewTask:boolean = false;
  // 8

  // 9
  newTask:string = '';
  taskList:string[] = [];

  onAddNewTask(){
    this.taskList.push(this.newTask);
  }
  // 9

  ngOnInit() {
  }
}
