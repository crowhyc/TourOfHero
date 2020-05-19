import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero'
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  heroes: Hero[];
  selectHero: Hero;
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getHeroes()
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  onSelect(hero) {
    this.selectHero = hero;
    this.messageService.add(`HeroService: Selected hero id=${hero.id}`);
  }
  add(name: string): void {
    name = name.trim()
    if (!name) return;
    this.heroService.addHero({ name } as Hero).subscribe(hero => {
      this.heroes.push(hero)
    })
  }
  deleteHero(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe()
  }
}
