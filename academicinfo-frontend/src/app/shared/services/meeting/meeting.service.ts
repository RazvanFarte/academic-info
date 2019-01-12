import {Injectable} from '@angular/core';
import {Meeting} from '../../models/Meeting';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {
  private host = 'http://localhost:4201/';
  private endpoint = 'meeting/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private http: HttpClient){

  }

  getMeetings(): Observable<Meeting[]> {
    return this.http.get<Meeting[]>(this.host + this.endpoint,this.httpOptions);
  }

  getMeetingById(meetingId: number): Observable<Meeting> {
    return this.http.get<Meeting>(this.host + this.endpoint + meetingId,this.httpOptions);
  }

  addMeeting(meeting: Meeting): Observable<Meeting> {
    return this.http.post<Meeting>(this.host + this.endpoint + 'add', meeting,this.httpOptions);
  }

  updateMeeting(meetingId: number, meeting: Meeting): Observable<Meeting> {
    return this.http.put<Meeting>(this.host + this.endpoint + 'update/' + meetingId, meeting,this.httpOptions);
  }

}
