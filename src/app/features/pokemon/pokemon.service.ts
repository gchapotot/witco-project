import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from './model/Pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  public getPokemonList(): Observable<{count: number, results: {name: string, url: string}[]}> {
    return this.http.get<any>(`${environment.API_URL}/pokemon?limit=2000&offset=0`);
  }

  public getPokemonDetail(name: string): Observable<Pokemon> {
    return this.http.get<any>(`${environment.API_URL}/pokemon/${name}`);
  }
}
