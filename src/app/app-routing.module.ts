import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimpleTodoComponent } from './simple-todo/simple-todo.component';
import { AngularBasicsComponent } from './angular-basics/angular-basics.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/angular-basics', pathMatch: 'full' },
    { path: 'simple-todo', component: SimpleTodoComponent },
    { path: 'angular-basics', component:  AngularBasicsComponent},
    { path: 'todo-list', loadChildren: () => import('./todos/shared/todos.module').then(m => m.TodosModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
