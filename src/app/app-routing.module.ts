import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Mycomponents/about/about.component';
import { TodoItemComponent } from './Mycomponents/todo-item/todo-item.component';
import { TodosComponent } from './Mycomponents/todos/todos.component';

const routes: Routes = [

  {path:'',component:TodosComponent},
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
