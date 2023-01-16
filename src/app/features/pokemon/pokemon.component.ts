import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';
import { getPokemonList } from 'src/app/store/actions/pokemon.action';
import { selectPokemon$ } from 'src/app/store/selectors/pokemon.selector';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  public pokemon$: Observable<any[] | null> = this.store.pipe(select(selectPokemon$));

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(getPokemonList());
  }

}
