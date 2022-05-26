import { TestBed } from '@angular/core/testing';

import { PokemonDetailResolver } from './pokemon.resolver';

describe('PokemonResolver', () => {
	let resolver: PokemonDetailResolver;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		resolver = TestBed.inject(PokemonDetailResolver);
	});

	it('should be created', () => {
		expect(resolver).toBeTruthy();
	});
});
