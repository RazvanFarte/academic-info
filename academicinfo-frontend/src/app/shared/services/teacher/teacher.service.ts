import {Injectable} from '@angular/core';
import {Teacher} from '../../models/Teacher';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private host = 'localhost:4201/';
  private endpoint = 'teacher/';

  constructor(private http: HttpClient){

  }

  getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.host + this.endpoint);
  }

  getTeacherById(teacherId: number): Observable<Teacher> {
    return this.http.get<Teacher>(this.host + this.endpoint + teacherId);
  }

  addTeacher(teacher: Teacher): Observable<Teacher> {
    return this.http.post<Teacher>(this.host + this.endpoint + 'add', teacher);
  }

  updateTeacher(teacherId: number, teacher: Teacher): Observable<Teacher> {
    return this.http.put<Teacher>(this.host + this.endpoint + 'update/' + teacherId, teacher);
  }

}
