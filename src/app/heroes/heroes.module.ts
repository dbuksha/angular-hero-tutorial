// global
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// services
import { HeroService } from './services/hero.service';

// components
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';


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
