import {Injectable} from '@angular/core';
import {Appointment} from '../../models/Appointment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private host = 'localhost:4201/';
  private endpoint = 'appointment/';

  constructor(private http: HttpClient){

  }

  getAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.host + this.endpoint);
  }

  getAppointmentById(appointmentId: number): Observable<Appointment> {
    return this.http.get<Appointment>(this.host + this.endpoint + appointmentId);
  }

  addAppointment(appointment: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(this.host + this.endpoint + 'add', appointment);
  }

  updateAppointment(appointmentId: number, appointment: Appointment): Observable<Appointment> {
    return this.http.put<Appointment>(this.host + this.endpoint + 'update/' + appointmentId, appointment);
  }

}
