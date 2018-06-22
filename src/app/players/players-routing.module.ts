import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlayerListComponent} from "./player-list/player-list.component";
import {PlayerDetailComponent} from "./player-detail/player-detail.component";

const routes: Routes = [
  {
    path: '',
    component: PlayerListComponent,
  },
  {
    path: ':id',
    component: PlayerDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayersRoutingModule { }
