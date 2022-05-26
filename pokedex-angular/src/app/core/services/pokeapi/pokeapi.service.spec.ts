import { TestBed } from '@angular/core/testing';
import { resolve } from 'path';

import { PokeApiService } from './pokeapi.service';

describe('PokeApiService', () => {
	let service: PokeApiService;
	let servicePrivate: any;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(PokeApiService);
		servicePrivate = service;
		
		servicePrivate.mainPokemonClient = {
			pokemon: {
				getPokemonById: jest.fn().mockReturnValue(
					new Promise((resolve, reject) => {
						resolve({ id: 1, name: 'bulbasaur' });
					})
				)
			}
		};
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	describe('getPokemon', () => {
		it('should return a pokemon', () => {
			service.getPokemon('1').subscribe(pokemon => {
				expect(pokemon).toEqual({ id: 1, name: 'bulbasaur' });
			});
		});
	});
});
