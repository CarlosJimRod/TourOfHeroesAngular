import {Component, OnInit} from '@angular/core';
import {HEROES} from "./mock-heroes";
import {Hero} from "./hero";
import {HeroesService} from "../../services/heroes.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{
  heroes : Hero[] = []
  selectHero?: Hero

  constructor(private heroService : HeroesService) {
  }
  onSelect(hero:Hero): void{
    this.selectHero=hero
  }

  ngOnInit() {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
