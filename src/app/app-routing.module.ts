import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoList }   from './todolist/todolist.component';
import { Dashboard } from './home/dashboard';
import { Login } from './login/login';

const routes: Routes = [
  { path: 'dashboard', component: Dashboard },
  { path: 'todos', component: TodoList },
  { path: 'login', component: Login },
  {path: '', redirectTo: '/', pathMatch: 'full'},
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}