import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { PokeHeader } from './poke-header/poke-header';
import { PokeSearch } from './poke-search/poke-search';
import { PokeList } from './poke-list/poke-list';
import { PokeRandom } from './poke-random/poke-random';

@NgModule({
  declarations: [
    PokeHeader,
    PokeSearch,
    PokeList,
    PokeRandom
  ],
  exports: [
    PokeHeader,
    PokeSearch,
    PokeList,
    PokeRandom
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }