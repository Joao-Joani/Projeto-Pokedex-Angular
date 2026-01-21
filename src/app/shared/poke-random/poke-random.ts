import { Component, OnInit } from '@angular/core';
import { PokeApi } from '../../service/poke-api';

@Component({
  selector: 'poke-random',
  standalone: false,
  templateUrl: './poke-random.html',
  styleUrl: './poke-random.scss'
})
export class PokeRandom implements OnInit {

  public pokemon: any;
  public loading: boolean = true;
  private url: string = "https://pokeapi.co/api/v2/pokemon";

  constructor(private pokeService: PokeApi) {}

  ngOnInit(): void {
    this.getRadomPokemon();
  }

  public getRadomPokemon(){
    const id = Math.floor(Math.random() * 151) + 1;
    
    this.pokeService.apiGetPokemon(`${this.url}/${id}`).subscribe(
      res => {
        this.pokemon = res;
        this.loading = false;
      },
      error => {
        console.error(error);
      }
    )
  }
}