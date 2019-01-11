import {Injectable} from '@angular/core';
import {Subject} from '../../models/Subject';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private host = 'localhost:4201/';
  private endpoint = 'subject/';

  constructor(private http: HttpClient){

  }

  getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.host + this.endpoint);
  }

  getSubjectById(subjectId: number): Observable<Subject> {
    return this.http.get<Subject>(this.host + this.endpoint + subjectId);
  }

  addSubject(subject: Subject): Observable<Subject> {
    return this.http.post<Subject>(this.host + this.endpoint + 'add', subject);
  }

  updateSubject(subjectId: number, subject: Subject): Observable<Subject> {
    return this.http.put<Subject>(this.host + this.endpoint + 'update/' + subjectId, subject);
  }

  getSubjectsForUser(loggedInUser: number) {
    return this.http.get<Subject[]>(this.host + this.endpoint + 'user/' + loggedInUser);
  }
}
