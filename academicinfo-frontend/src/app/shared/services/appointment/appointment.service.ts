import {Injectable} from '@angular/core';
import {Appointment} from '../../models/Appointment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private host = 'http://localhost:4201/';
  private endpoint = 'appointment/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private http: HttpClient){

  }

  getAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.host + this.endpoint,this.httpOptions);
  }

  getAppointmentById(appointmentId: number): Observable<Appointment> {
    return this.http.get<Appointment>(this.host + this.endpoint + appointmentId,this.httpOptions);
  }

  addAppointment(appointment: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(this.host + this.endpoint + 'add', appointment,this.httpOptions);
  }

  updateAppointment(appointmentId: number, appointment: Appointment): Observable<Appointment> {
    return this.http.put<Appointment>(this.host + this.endpoint + 'update/' + appointmentId, appointment,this.httpOptions);
  }

}
