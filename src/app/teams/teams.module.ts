import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsListComponent } from './teams-list/teams-list.component';

@NgModule({
  imports: [
    CommonModule,
    TeamsRoutingModule
  ],
  declarations: [TeamsListComponent]
})
export class TeamsModule { }
