import { Component } from '@angular/core';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html'
})
export default class PlayerFormComponent {
  player = {
    name: '',
    club: '',
    position: ''
  };

  onNameInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.player.name = input.value;
  }

  onClubInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.player.club = input.value;
  }

  onPositionInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.player.position = input.value;
  }

  onSubmit(): void {
    // Lógica para manejar la creación del jugador
    console.log('Jugador creado:', this.player);
  }
}
