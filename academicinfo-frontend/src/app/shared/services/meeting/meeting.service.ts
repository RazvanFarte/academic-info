import {Injectable} from '@angular/core';
import {Meeting} from '../../models/Meeting';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {
  private host = 'localhost:4201/';
  private endpoint = 'meeting/';

  constructor(private http: HttpClient){

  }

  getMeetings(): Observable<Meeting[]> {
    return this.http.get<Meeting[]>(this.host + this.endpoint);
  }

  getMeetingById(meetingId: number): Observable<Meeting> {
    return this.http.get<Meeting>(this.host + this.endpoint + meetingId);
  }

  addMeeting(meeting: Meeting): Observable<Meeting> {
    return this.http.post<Meeting>(this.host + this.endpoint + 'add', meeting);
  }

  updateMeeting(meetingId: number, meeting: Meeting): Observable<Meeting> {
    return this.http.put<Meeting>(this.host + this.endpoint + 'update/' + meetingId, meeting);
  }

}
