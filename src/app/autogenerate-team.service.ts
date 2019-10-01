import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutogenerateTeamService {

constructor( private http: HttpClient) { }

  posetedIdeas(): Observable <any> {
    return this.http.get('http://localhost:3000/postAnIdeaDetails');
  }

  participantsByRole(role): Observable <any> {
    return this.http.get('http://localhost:3000/' + role);
  }
}
