import {Injectable} from '@angular/core';
import {Teacher} from '../../models/Teacher';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private host = 'http://localhost:4201/';
  private endpoint = 'teacher/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private http: HttpClient){
  }

  getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.host + this.endpoint,this.httpOptions);
  }

  getTeacherById(teacherId: number): Observable<Teacher> {
    return this.http.get<Teacher>(this.host + this.endpoint + teacherId,this.httpOptions);
  }

  addTeacher(teacher: Teacher): Observable<Teacher> {
    return this.http.post<Teacher>(this.host + this.endpoint + 'add', teacher,this.httpOptions);
  }

  updateTeacher(teacherId: number, teacher: Teacher): Observable<Teacher> {
    return this.http.put<Teacher>(this.host + this.endpoint + 'update/' + teacherId, teacher,this.httpOptions);
  }

}
