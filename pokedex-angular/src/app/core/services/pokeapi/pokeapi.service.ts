import { Injectable } from '@angular/core';
import { Observable, from, map } from 'rxjs';
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

    getPokemon(id: number): Observable<Pokemon> {
        return from(this.mainPokemonClient.pokemon.getPokemonById(id))
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
                }))
            );
    }
}
