import { Component, OnInit } from '@angular/core';
import {Player} from "../../shared/player";
import {PlayerService} from "../../services/player.service";

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {

  public players: Player[];

  constructor(private playerService: PlayerService) {

  }

  ngOnInit() {
    this.playerService.getPlayers().subscribe(players => this.players = players, err => console.log('error: ' + err));
  }

}
