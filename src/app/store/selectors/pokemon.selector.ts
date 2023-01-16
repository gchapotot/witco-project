import { createSelector } from '@ngrx/store';
import { AppState } from '../index';

export const selectPokemonState$ = (state: AppState) => state.pokemon;

export const selectPokemon$ =
    createSelector(selectPokemonState$, (state) => state.pokemon);