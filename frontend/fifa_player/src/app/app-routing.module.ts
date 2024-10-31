import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import LoginComponent from './components/login/login.component';
import PlayerListComponent from './components/player-list/player-list.component';
import PlayerDetailComponent from './components/player-detail/player-detail.component';
import PlayerFormComponent from './components/player-form/player-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'players', component: PlayerListComponent },
  { path: 'players/:id', component: PlayerDetailComponent },
  { path: 'add-player', component: PlayerFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export default class AppRoutingModule { }
