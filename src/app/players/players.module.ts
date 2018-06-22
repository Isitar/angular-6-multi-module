import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersRoutingModule } from './players-routing.module';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';

@NgModule({
  imports: [
    PlayersRoutingModule,
    CommonModule,
  ],
  declarations: [PlayerListComponent, PlayerDetailComponent]
})
export class PlayersModule { }
