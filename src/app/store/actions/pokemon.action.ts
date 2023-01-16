import { createAction, props } from '@ngrx/store';

export const getPokemonList = createAction(
    '[Pokemon] Get Pokemon List'
);

export const getPokemonListSuccess = createAction(
    '[Pokemon] Get Pokemon List Success',
    props<{ pokemon: any[] }>()
);
