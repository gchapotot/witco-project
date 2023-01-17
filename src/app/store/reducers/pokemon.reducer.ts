import { createReducer, on, Action } from "@ngrx/store";
import * as pokemonActions from '../actions/pokemon.action';

export interface pokemonState {
    pokemon: {
        name: string,
        index: number
    }[];
}

const initialState: pokemonState = {
    pokemon: []
};

export const reducer = createReducer(initialState,
    on(pokemonActions.getPokemonList, () => {
        return initialState;
    }),
    on(pokemonActions.getPokemonListSuccess, (state, { pokemon }) => {
        const newState = pokemon.map((element: any, index: number) => { return { name: element.name, index: index + 1 } });
        return { ...state, pokemon: newState };
    }),
);
export function pokemonReducer(state: pokemonState | undefined, action: Action): pokemonState {
    return reducer(state, action);
}