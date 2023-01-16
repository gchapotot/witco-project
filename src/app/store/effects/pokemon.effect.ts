import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map, Observable, switchMap } from 'rxjs';
import { PokemonService } from 'src/app/features/pokemon/pokemon.service';
import * as pokemonActions from '../actions/pokemon.action';

@Injectable({ providedIn: 'root' })
export class pokemonEffect {

    getPokemonList$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(pokemonActions.getPokemonList),
        switchMap(() => {
            return this.pokemonService.getPokemonList().pipe(
                map(data => pokemonActions.getPokemonListSuccess({ pokemon: data.results }))
            )
        })
    ));


    constructor(private actions$: Actions, private pokemonService: PokemonService) { }
}