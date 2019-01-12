import {Injectable} from '@angular/core';
import {Student} from '../../models/Student';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private host = 'http://localhost:4201/';
  private endpoint = 'student/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  constructor(private http: HttpClient){
    
  }
  
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.host + this.endpoint,this.httpOptions);
  }

  getStudentById(studentId: number): Observable<Student> {
    return this.http.get<Student>(this.host + this.endpoint + studentId,this.httpOptions);
  }

  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.host + this.endpoint + 'add', student,this.httpOptions);
  }

  updateStudent(studentId: number, student: Student): Observable<Student> {
    return this.http.put<Student>(this.host + this.endpoint + 'update/' + studentId, student,this.httpOptions);
  }
  
}
