import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeHeader } from './poke-header/poke-header';
import { PokeSearch } from './poke-search/poke-search';
import { PokeList } from './poke-list/poke-list';



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
    CommonModule
  ]
})
export class SharedModule { }
