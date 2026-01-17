import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeHeader } from './poke-header/poke-header';
import { PokeSearch } from './poke-search/poke-search';
import { PokeList } from './poke-list/poke-list';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PokeHeader,
    PokeSearch,
    PokeList
  ],
  exports: [
    PokeHeader,
    PokeSearch,
    PokeList
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
