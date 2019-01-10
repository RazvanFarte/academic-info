import {Injectable} from '@angular/core';
import {Situation} from '../../models/Situation';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SituationService {
  private host = 'localhost:4201/';
  private endpoint = 'situation/';

  constructor(private http: HttpClient){

  }

  getSituations(): Observable<Situation[]> {
    return this.http.get<Situation[]>(this.host + this.endpoint);
  }

  getSituationById(situationId: number): Observable<Situation> {
    return this.http.get<Situation>(this.host + this.endpoint + situationId);
  }

  addSituation(situation: Situation): Observable<Situation> {
    return this.http.post<Situation>(this.host + this.endpoint + '/add', situation);
  }

  updateSituation(situationId: number, situation: Situation): Observable<Situation> {
    return this.http.put<Situation>(this.host + this.endpoint + '/update/' + situationId, situation);
  }

}
