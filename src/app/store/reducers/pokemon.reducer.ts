import { createReducer, on, Action } from "@ngrx/store";
import { Pokemon, PokemonWithIndex } from "src/app/features/pokemon/model/Pokemon.model";
import * as pokemonActions from '../actions/pokemon.action';

export interface pokemonState {
    pokemon: PokemonWithIndex[];
    pokemonDetail: Pokemon | null;
}

const initialState: pokemonState = {
    pokemon: [],
    pokemonDetail: null
};

export const reducer = createReducer(initialState,
    on(pokemonActions.getPokemonList, () => {
        return initialState;
    }),
    on(pokemonActions.getPokemonListSuccess, (state, { pokemon }) => {
        const newState = pokemon.map((element: {name: string, url: string}) => { return { name: element.name, index: parseInt(element.url.slice(34,-1)) } });
        return { ...state, pokemon: newState };
    }),
    on(pokemonActions.getPokemonDetail, (state) => {
        return { ...state, pokemonDetail: null };
    }),
    on(pokemonActions.getPokemonDetailSuccess, (state, { pokemonDetail}) => {
        return { ...state, pokemonDetail: pokemonDetail };
    }),
);
export function pokemonReducer(state: pokemonState | undefined, action: Action): pokemonState {
    return reducer(state, action);
}