import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { pokemonReducer } from './store/reducers/pokemon.reducer';
import { pokemonEffect } from './store/effects/pokemon.effect';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({
      'pokemon': pokemonReducer
    }),
    EffectsModule.forRoot([
      pokemonEffect
    ]),
    StoreDevtoolsModule.instrument({
      name: 'Witco Project App'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
