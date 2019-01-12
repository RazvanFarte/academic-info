import {Injectable} from '@angular/core';
import {Situation} from '../../models/Situation';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SituationService {
  private host = 'http://localhost:4201/';
  private endpoint = 'situation/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private http: HttpClient){

  }

  getSituations(): Observable<Situation[]> {
    return this.http.get<Situation[]>(this.host + this.endpoint,this.httpOptions);
  }

  getSituationById(situationId: number): Observable<Situation> {
    return this.http.get<Situation>(this.host + this.endpoint + situationId,this.httpOptions);
  }

  addSituation(situation: Situation): Observable<Situation> {
    return this.http.post<Situation>(this.host + this.endpoint + 'add', situation,this.httpOptions);
  }

  updateSituation(situationId: number, situation: Situation): Observable<Situation> {
    return this.http.put<Situation>(this.host + this.endpoint + 'update/' + situationId, situation,this.httpOptions);
  }

  getSituationsForUser(userId: number): Observable<Situation[]> {
    return this.http.get<Situation[]>(this.host + this.endpoint + "user/" + userId,this.httpOptions);
  }


}
