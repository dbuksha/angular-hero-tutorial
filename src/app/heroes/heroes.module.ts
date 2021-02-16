// global
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// services
import { HeroService } from './hero.service';

// components
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';


@NgModule({
  declarations: [
    HeroesListComponent,
    HeroDetailsComponent,
    HeroSearchComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    HeroService,
  ],
  exports: [
    HeroSearchComponent
  ]
})
export class HeroesModule { }
