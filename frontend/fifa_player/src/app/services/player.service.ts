import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../models/player.model'; // Asegúrate de que esta ruta sea correcta

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private apiUrl = 'http://localhost:3306/api/players'; // Asegúrate de que esta URL sea correcta

  constructor(private http: HttpClient) {}

  getPlayerById(id: string): Observable<Player> {
    return this.http.get<Player>(`${this.apiUrl}/${id}`);
  }
}
