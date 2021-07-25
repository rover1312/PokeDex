import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  constructor(
    private dataService: DataService
    ) { }

   ngOnInit(): void {
    this.dataService.getPokemons()
    .subscribe((response: any) => {
      console.log(response);
    })
   }

}
