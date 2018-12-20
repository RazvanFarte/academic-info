import {Injectable} from '@angular/core';
import {Subject} from "../../shared/models/Subject";
import {Situation} from "../../shared/models/Situation";
import {Meeting} from "../../shared/models/Meeting";
import {Student} from "../../shared/models/Student";
import {Teacher} from "../../shared/models/Teacher";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {situation_properties} from "../../shared/properties/situation-properties";
import {Observable} from "rxjs/Observable";
import {CourseService} from "../course/course.service";
import {of} from "rxjs/internal/observable/of";

@Injectable({
  providedIn: 'root'
})
export class SituationService {

  private properties;

  constructor(private http: HttpClient, private courseService: CourseService) {
    this.properties = situation_properties;
  }


  getSituationsFor(teacher_id: number, meeting: Meeting, weekNumber: number): Observable<Situation[]> {
    let p = this.properties.situation_get_sorted_by;
    p.params.meeting_id = meeting.id;
    p.params.week_number = weekNumber;
    p.headers.access_token = localStorage.getItem("ACCESS_TOKEN");
    let options = {
      params: p.params,
      headers: new HttpHeaders(p.headers)
    };
    return of(this.courseService.getSituationsSorted(meeting, weekNumber));
    //TODO return this.http.get<Situation[]>(this.properties.url, options);
  }

  getAllSituations(teacher_id: number): Observable<Situation[]> {
    let p = this.properties.situation_get_all_sorted;
    p.headers.access_token = localStorage.getItem("ACCESS_TOKEN");
    let options = {
      headers: new HttpHeaders(p.headers)
    };
    return of(this.courseService.getSituationsSorted(null,null));
    //TODO return this.http.get<Situation[]>(p.url, options);
  }


  getSituations(teacher_id: number,meeting: Meeting, weekNumber: number): Observable<Situation[]> {
    if (!meeting || !weekNumber)
      return this.getAllSituations(teacher_id);
      return this.getSituationsFor(teacher_id, meeting, weekNumber);
    }

  getMeetings(subject: Subject): Observable<Meeting[]> {
    //return this.meetings.filter(m => m.subject.id === subject.id);
    //TODO
    return of(this.courseService.getMeetings(subject));
  }

  getSubjects(teacher: Teacher): Observable<Subject[]> {
    //return this.subjects.filter(s => s.teacher.user.id === teacher.user.id);
    return of(this.courseService.getSubjects(teacher));
  }

  saveSituations(situations: Situation[]) {
    //this.situations = situations;
  }
}
