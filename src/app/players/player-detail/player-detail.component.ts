import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PlayerService} from "../../services/player.service";
import {catchError, switchMap} from "rxjs/internal/operators";
import {Player} from "../../shared/player";

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})
export class PlayerDetailComponent implements OnInit {

  private id: number;
  private player: Player;

  constructor(private route: ActivatedRoute, private playerService: PlayerService) {
  }

  ngOnInit() {
    this.route.params.pipe(
      switchMap(params => this.playerService.getPlayer(+params['id'])),
      //catchError(err => console.log(err))
    ).subscribe(
      playerResult => this.player = playerResult,
      err => {
        if (err !== null) console.log(err)
      }
    );
  }

}
