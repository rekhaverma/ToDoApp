import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { TodoList } from './todolist/todolist.component';
import { Dashboard } from './home/dashboard';
import {TodoService} from "./todolist/todo.service";
import { Card } from "./home/components/cards/card.component";
import { Login } from "./login/login";
// import { SearchComponent } from './search/search.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    TodoList,
    Dashboard,
    Card,
    Login,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserModule.withServerTransition({appId: 'my-app'}),
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
