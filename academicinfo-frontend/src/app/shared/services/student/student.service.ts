import {Injectable} from '@angular/core';
import {Student} from '../../models/Student';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private host = 'localhost:4201/';
  private endpoint = 'student/';
  
  constructor(private http: HttpClient){
    
  }
  
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.host + this.endpoint);
  }

  getStudentById(studentId: number): Observable<Student> {
    return this.http.get<Student>(this.host + this.endpoint + studentId);
  }

  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.host + this.endpoint + '/add', student);
  }

  updateStudent(studentId: number, student: Student): Observable<Student> {
    return this.http.put<Student>(this.host + this.endpoint + '/update/' + studentId, student);
  }
  
}
