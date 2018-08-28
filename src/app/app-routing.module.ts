import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PlayersRoutingModule} from "./players/players-routing.module";
import {TeamsRoutingModule} from "./teams/teams-routing.module";
import {AppComponent} from "./app.component";
import {TeamsModule} from "./teams/teams.module";
import {PlayersModule} from "./players/players.module";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'teams',
    loadChildren: () => TeamsModule,
  },
  {
    path: 'players',
    loadChildren: () => PlayersModule,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
