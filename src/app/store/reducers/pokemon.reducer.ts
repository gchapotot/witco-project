import { createReducer, on, Action } from "@ngrx/store";
import * as pokemonActions from '../actions/pokemon.action';

export interface pokemonState {
    pokemon: any[];
}

const initialState: pokemonState = {
    pokemon: []
};

export const reducer = createReducer(initialState,
    on(pokemonActions.getPokemonList, () => {
        return initialState;
    }),
    on(pokemonActions.getPokemonListSuccess, (state, { pokemon }) => {
        return { ...state, pokemon };
    }),
);
export function pokemonReducer(state: pokemonState | undefined, action: Action): pokemonState {
    return reducer(state, action);
}