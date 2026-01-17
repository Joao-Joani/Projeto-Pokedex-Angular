import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { Home } from './home/home';
import { Details } from './details/details';

const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'details/:id',
    component: Details
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }