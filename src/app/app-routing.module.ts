import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CreateUserComponent} from './create-user/create-user.component';
import {TasksComponent} from './tasks/tasks.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path: 'user', component: CreateUserComponent},
  {path: 'tasks', component: TasksComponent},
  {path: '**', component: PageNotFoundComponent},
  {path: '', redirectTo: 'user', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
