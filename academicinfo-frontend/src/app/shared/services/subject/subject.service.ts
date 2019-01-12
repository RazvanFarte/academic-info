import {Injectable} from '@angular/core';
import {Subject} from '../../models/Subject';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private host = 'http://localhost:4201/';
  private endpoint = 'subject/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  constructor(private http: HttpClient){

  }

  getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.host + this.endpoint,this.httpOptions);
  }

  getSubjectById(subjectId: number): Observable<Subject> {
    return this.http.get<Subject>(this.host + this.endpoint + subjectId,this.httpOptions);
  }

  addSubject(subject: Subject): Observable<Subject> {
    return this.http.post<Subject>(this.host + this.endpoint + 'add', subject,this.httpOptions);
  }

  updateSubject(subjectId: number, subject: Subject): Observable<Subject> {
    return this.http.put<Subject>(this.host + this.endpoint + 'update/' + subjectId, subject,this.httpOptions);
  }

  getSubjectsForUser(loggedInUser: number) {
    return this.http.get<Subject[]>(this.host + this.endpoint + 'user/' + loggedInUser,this.httpOptions);
  }
}
