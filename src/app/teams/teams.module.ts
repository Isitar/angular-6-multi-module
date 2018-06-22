import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TeamsRoutingModule} from './teams-routing.module';
import {TeamListComponent} from './team-list/team-list.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';

@NgModule({
  imports: [
    CommonModule,
    TeamsRoutingModule
  ],
  declarations: [TeamListComponent, TeamDetailComponent]
})
export class TeamsModule {
}
