import { Component, OnInit, OnDestroy } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // OnDestroy

  heroes: Observable<Hero[]>;
  // heroesSub: Subscription;
  // hero: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();

    /*     this.heroesSub = this.heroService.getHeroes().subscribe(heroes => {
          this.x = heroes;
        }); */
  }

  /*   ngOnDestroy() {
      this.heroesSub.unsubscribe();
    } */
}
