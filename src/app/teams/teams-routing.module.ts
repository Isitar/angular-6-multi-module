import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TeamDetailComponent} from "./team-detail/team-detail.component";
import {TeamListComponent} from "./team-list/team-list.component";

const routes: Routes = [
  {
    path: '',
    component: TeamListComponent,
  },
  {
    path: ':id',
    component: TeamDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule {
}
