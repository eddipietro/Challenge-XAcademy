import { Routes } from '@angular/router';
import PlayerListComponent from './components/player-list/player-list.component'; // Cambia aquí
import PlayerFormComponent from './components/player-form/player-form.component'; // Cambia aquí
import LoginComponent from './components/login/login.component'; // Cambia aquí
import PlayerDetailComponent from './components/player-detail/player-detail.component';

export const routes: Routes = [
  { path: 'players/:id', component: PlayerDetailComponent },
  { path: 'players', component: PlayerListComponent },
  { path: 'add-player', component: PlayerFormComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/players', pathMatch: 'full' } 
];
