import { createAction, props } from '@ngrx/store';
import { Pokemon } from 'src/app/features/pokemon/model/Pokemon.model';

export const getPokemonList = createAction(
    '[Pokemon] Get Pokemon List'
);

export const getPokemonListSuccess = createAction(
    '[Pokemon] Get Pokemon List Success',
    props<{ pokemon: {name: string, url: string}[] }>()
);

export const getPokemonDetail = createAction(
    '[Pokemon] Get Pokemon Detail',
    (name: string) => ({ name })
);

export const getPokemonDetailSuccess = createAction(
    '[Pokemon] Get Pokemon Detail Success',
    props<{ pokemonDetail: Pokemon }>()
);
