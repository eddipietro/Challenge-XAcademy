import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent {
  @Input() player: { name: string; club: string; position: string } = {
    name: '',
    club: '',
    position: ''
  };
}
