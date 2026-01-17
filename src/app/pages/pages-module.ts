import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Pages
import { Home } from './home/home';
import { RoutingModule } from './routing-module';
import { Details } from './details/details';
import { SharedModule } from '../shared/shared-module';

@NgModule({
  declarations: [
    Home,
    Details
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ]
})
export class PagesModule { }