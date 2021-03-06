import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }
 api = fetch("https://pokeapi.co/api/v2/pokemon?limit=50");

  //fetch Pokemons from Api
  getPokemons(Limit: number, offset: number){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${Limit}&offset=${offset}`);
  }
  getMoreData(name: string){
    
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    
  }
}
