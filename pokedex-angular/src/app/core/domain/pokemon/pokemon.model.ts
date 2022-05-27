export interface Pokemon {
    id: number;
    name: string;
    height: number;
    order: number;
    weight: number;
    images: string[];
    types: PokemonType[];
}
export interface PokemonType {
    name: string;
    url: string;
}
