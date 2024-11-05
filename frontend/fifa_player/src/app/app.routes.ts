import { Routes } from '@angular/router';
import PlayerListComponent from './components/player-list/player-list.component'; 
import PlayerFormComponent from './components/player-form/player-form.component'; 
import LoginComponent from './components/login/login.component'; 
import PlayerDetailComponent from './components/player-detail/player-detail.component';

export const routes: Routes = [
  { path: 'players/:id', component: PlayerDetailComponent },
  { path: 'players', component: PlayerListComponent },
  { path: 'add-player', component: PlayerFormComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/players', pathMatch: 'full' } 
];
