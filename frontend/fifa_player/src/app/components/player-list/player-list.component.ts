import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent {
  @Input() players = [
    { id: 1, name: 'Jugador 1', club: 'Club 1', position: 'Delantero' },
    { id: 2, name: 'Jugador 2', club: 'Club 2', position: 'Defensa' }
  ];
}
