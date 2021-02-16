import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../../models/hero';

import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  hero: Hero;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private heroService: HeroService,
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(h => this.hero = h);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

}
