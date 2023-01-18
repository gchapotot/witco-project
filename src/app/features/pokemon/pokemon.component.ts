import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';
import { getPokemonDetail, getPokemonList } from 'src/app/store/actions/pokemon.action';
import { selectPokemon$ } from 'src/app/store/selectors/pokemon.selector';
import { PokemonWithIndex } from './model/Pokemon.model';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonComponent implements OnInit {

  public pokemon$: Observable<PokemonWithIndex[] | null> = this.store.pipe(select(selectPokemon$));

  constructor(private store: Store<AppState>, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.store.dispatch(getPokemonList());
  }

  public handleMissingImage(event: Event): void {
    (event.target as HTMLImageElement).width = 50;
    (event.target as HTMLImageElement).height = 50;
    (event.target as HTMLImageElement).src = 'assets/img/picNotFound.png';
  }

  public onClickPokemonDetail(pokemon: PokemonWithIndex) : void {
    this.store.dispatch(getPokemonDetail(pokemon.name));
    this.dialog.open(PokemonDetailComponent);
  }
}
