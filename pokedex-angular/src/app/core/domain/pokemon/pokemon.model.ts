export interface Pokemon {
    /** The identifier for this resource */
	id: number;
	/** The name for this resource */
	name: string;
	/** The height of this Pokémon in decimetres */
	height: number;
	/** Order for sorting. Almost national order, except families are grouped together */
	order: number;
	/** The weight of this Pokémon in hectograms */
	weight: number;
	/** A list of abilities this Pokémon could potentially have */
	abilities: PokemonAbility[];
	/** A list of moves along with learn methods and level details pertaining to specific version groups */
	moves: PokemonMove[];
	/** A set of sprites used to depict this Pokémon in the game.
	 * A visual representation of the various sprites can be found at [PokeAPI/sprites](https://github.com/PokeAPI/sprites#sprites)
	 */
	sprites: PokemonSprites;
	/** The species this Pokémon belongs to */
	species: NamedAPIResource;
	/** A list of base stat values for this Pokémon */
	stats: PokemonStat[];
	/** A list of details showing types this Pokémon has */
	types: PokemonType[];
}

export interface PokemonAbility {

}

export interface PokemonMove {
    
}

export interface PokemonSprites {
    
}

export interface NamedAPIResource {
    
}

export interface PokemonStat {
    
}

export interface PokemonType {
    
}