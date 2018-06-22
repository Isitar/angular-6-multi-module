import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PlayersModule} from "./players/players.module";
import {TeamsModule} from "./teams/teams.module";
import {PlayersRoutingModule} from "./players/players-routing.module";
import {SharedModule} from "./shared/shared.module";
import {ServicesModule} from "./services/services.module";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TeamsModule,
    SharedModule,
    ServicesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
