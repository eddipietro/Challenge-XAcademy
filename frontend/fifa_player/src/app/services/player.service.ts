import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PlayerService {
    private apiUrl = 'http://localhost:8080/api/players';

    constructor(private http: HttpClient) {}

    getPlayers(): Observable<any> {
        return this.http.get(this.apiUrl);
    }

    getPlayer(id: number): Observable<any> {
        return this.http.get(`${this.apiUrl}/${id}`);
    }
}
