// global
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

// modules
import { AppRoutingModule } from './app-routing.module';

import { MessagesModule } from './messages/messages.module';
import { HeroesModule } from './heroes/heroes.module';

// services
import { InMemoryDataService } from './services/in-memory-data.service';

// components
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    // app modules
    HeroesModule,
    MessagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
