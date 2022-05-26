import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, from, map, catchError, throwError } from 'rxjs';
import { MainClient } from 'pokenode-ts';

import { Pokemon } from '../../domain';


@Injectable({
	providedIn: 'root'
})
export class PokeApiService {
    private mainPokemonClient: MainClient;

	constructor() {
        this.mainPokemonClient = new MainClient({
            cacheOptions: { maxAge: 5000, exclude: { query: false } },
        });
    }

    getPokemon(id: string): Observable<Pokemon> {
        return from(this.mainPokemonClient.pokemon.getPokemonById(parseInt(id, 10)))
            .pipe(
                map(pokemon => ({
                    id: pokemon.id,
                    name: pokemon.name,
                    height: pokemon.height,
                    order: pokemon.order,
                    weight: pokemon.weight,
                    abilities: pokemon.abilities,
                    moves: pokemon.moves,
                    sprites: pokemon.sprites,
                    species: pokemon.species,
                    stats: pokemon.stats,
                    types: pokemon.types
                })),
                catchError(this.handleError)
            );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
            console.error('An error occurred:', error.error);
        } else {
            console.error(`API returned code ${error.status}, body was: `, error.error);
        }
  
        return throwError(() => new Error('Something bad happened; please try again later.'));
    }
}
