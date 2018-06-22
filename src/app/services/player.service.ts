import {Injectable} from '@angular/core';
import {Player} from "../shared/player";
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {


  private players: Player[] = [
    {id: 1, address: 'othmarsingerstrasse 18', name: 'Pascal'},
    {id: 2, address: 'othmarsingerstrasse 18', name: 'Noemi'},
    {id: 3, address: 'bernstrasse 159', name: 'Cedric'},
  ];

  constructor() {
  }

  public getPlayers(): Observable<Player[]> {
    return of(this.players);
  }

  public getPlayer(id: number) : Observable<Player> {
    return of(this.players.filter(p => p.id === id)[0]);
  }
}
