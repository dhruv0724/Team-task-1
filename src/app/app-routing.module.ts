import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path:'teams',component:HomeComponent
  },
  {
    path:'',redirectTo:'/teams',pathMatch:"full"
  },
  {path:'members/:id',component:UsersComponent,canActivate:[]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
