import {Component, OnInit} from '@angular/core';
import {TeamService} from "../../services/team.service";
import {Team} from "../../shared/team";

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {

  private teams: Team[];

  constructor(private teamService: TeamService) {
  }

  ngOnInit() {
    this.teamService.getTeams().subscribe(teams => this.teams = teams);
  }

}
