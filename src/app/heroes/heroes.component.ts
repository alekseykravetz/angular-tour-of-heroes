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
    this.getHeroes();

    /*     this.heroesSub = this.heroService.getHeroes().subscribe(heroes => {
          this.x = heroes;
        }); */
  }

  getHeroes() {
    this.heroes = this.heroService.getHeroes();
  }

  /*   ngOnDestroy() {
      this.heroesSub.unsubscribe();
    } */



  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.getHeroes();
      });
  }

  delete(hero: Hero): void {
    this.heroService.deleteHero(hero)
      .subscribe(h => {
        this.getHeroes();
      });
  }
}
