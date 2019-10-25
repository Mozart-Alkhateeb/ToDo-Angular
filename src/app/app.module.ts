import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SimpleTodoComponent } from './simple-todo/simple-todo.component';
import { AngularBasicsComponent } from './angular-basics/angular-basics.component';
import { TaskComponent } from './angular-basics/task/task.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SimpleTodoComponent,
    AngularBasicsComponent,
    TaskComponent,
  ],
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    FormsModule,
    AppRoutingModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
