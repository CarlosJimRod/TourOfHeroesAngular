import {Component, Input} from '@angular/core';
import {Hero} from "../heroes/hero";

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.css']
})
export class HeroesDetailComponent {
  @Input() hero? : Hero

}
