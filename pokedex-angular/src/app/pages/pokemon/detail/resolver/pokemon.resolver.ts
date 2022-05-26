import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Pokemon } from 'src/app/core/domain';

import { PokeApiService } from 'src/app/core/services';


@Injectable({
	providedIn: 'root'
})
export class PokemonDetailResolver implements Resolve<Pokemon> {
    constructor(private pokemonApiService: PokeApiService) { }

	resolve(route: ActivatedRouteSnapshot): Observable<Pokemon> {
        const id: string = route.paramMap.get('id') as string;
        return this.pokemonApiService.getPokemon(id);
	}
}
