import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/store';
import { selectPokemonDetail$ } from 'src/app/store/selectors/pokemon.selector';
import * as Highcharts from 'highcharts';
import more from "highcharts/highcharts-more";
import { Pokemon } from '../model/Pokemon.model';
more(Highcharts);

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit, OnDestroy {

  public pokemon$: Observable<Pokemon | null> = this.store.pipe(select(selectPokemonDetail$));
  public pokemonSubscription$: Subscription | null = null;
  public pokemon: Pokemon | null = null;

  public radarChartHighcharts: typeof Highcharts = Highcharts;
  public radarChartOptions: Highcharts.Options | null = null;

  constructor(public dialogRef: MatDialogRef<PokemonDetailComponent>, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.pokemonSubscription$ = this.pokemon$.subscribe((data: any) => {
      this.pokemon = data;
      if (this.pokemon) {
        this.createRadarChart();
      }
    })
  }

  public handleMissingImage(event: Event): void {
    (event.target as HTMLImageElement).width = 90;
    (event.target as HTMLImageElement).height = 90;
    (event.target as HTMLImageElement).src = 'assets/img/picNotFound.png';
  }

  public displayPokemonTypes(): string {
    return this.pokemon ? this.pokemon.types.map((type: any) => { return type.type.name.toUpperCase() }).join(', ') : 'Undefined';
  }

  public displayPokemonAbilities(): string {
    return this.pokemon ? this.pokemon.abilities.map((ability: any) => { return ability.ability.name.toUpperCase() }).join(', ') : 'Undefined';
  }

  public createRadarChart(): void {
    this.radarChartOptions = {
      chart: {
        polar: true,
        type: 'line'
      },
      title: {
        text: 'Pokémon Stats'
      },
      pane: {
        size: '60%'
      },
      xAxis: {
        categories: this.pokemon!.stats.map((stat: any) => { return stat.stat.name.toUpperCase() }),
        tickmarkPlacement: 'on',
        lineWidth: 0
      },
      yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0
      },
      series: [{
        showInLegend: false,
        name: 'Stat',
        type: 'area',
        data: this.pokemon!.stats.map((stat: any) => { return stat.base_stat }),
        pointPlacement: 'on',
        color: '#acc8f8'
      }]
    }
  }

  public onCloseFolder(): void {
    this.dialogRef.close();
  }

  public ngOnDestroy(): void {
    if (this.pokemonSubscription$) this.pokemonSubscription$.unsubscribe();
  }

}
