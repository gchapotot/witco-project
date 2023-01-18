import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { MatCardModule } from '@angular/material/card';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [PokemonComponent, PokemonDetailComponent],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    MatCardModule,
    ScrollingModule,
    MatDialogModule,
    MatButtonModule,
    HighchartsChartModule,
    MatProgressSpinnerModule
  ]
})
export class PokemonModule { }
