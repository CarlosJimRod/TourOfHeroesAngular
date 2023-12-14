import {Injectable} from '@angular/core';
import {HEROES} from "../componentes/heroes/mock-heroes";
import {Hero} from "../componentes/heroes/hero";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor() { }

  getHeroes():Observable<Hero[]>{
    return of(HEROES)
  }
}
