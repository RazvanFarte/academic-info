import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {CourseService} from "../course/course.service";
import {of} from "rxjs/internal/observable/of";
import {situation_properties} from "../../properties/situation-properties";
import {Meeting} from "../../models/Meeting";
import {Situation} from "../../models/Situation";
import {Subject} from "../../models/Subject";
import {Teacher} from "../../models/Teacher";

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
    //TODO CONNECT TO BACKEND: get all situations for teacher_id, meeting_id and weekNumber
    //return this.http.get<Situation[]>(this.properties.url, options);
  }

  getAllSituations(teacher_id: number): Observable<Situation[]> {
    let p = this.properties.situation_get_all_sorted;
    p.headers.access_token = localStorage.getItem("ACCESS_TOKEN");
    let options = {
      headers: new HttpHeaders(p.headers)
    };
    return of(this.courseService.getSituationsSorted(null,null));
    //TODO CONNECT TO BACKEND: get all situations for teacher_id
    //return this.http.get<Situation[]>(p.url, options);
  }


  getSituations(teacher_id: number,meeting: Meeting, weekNumber: number): Observable<Situation[]> {
    if (!meeting || !weekNumber)
      return this.getAllSituations(teacher_id);
      return this.getSituationsFor(teacher_id, meeting, weekNumber);
    }

  getMeetings(subject: Subject): Observable<Meeting[]> {
    //return this.meetings.filter(m => m.subject.id === subject.id);
    //TODO CONNECT TO BACKEND: get all meetings for a subject
    return of(this.courseService.getMeetings(subject));
  }

  getSubjects(teacher: Teacher): Observable<Subject[]> {
    //TODO CONNECT TO BACKEND: get all subjects for a teacher
    //return this.subjects.filter(s => s.teacher.user.id === teacher.user.id);
    return of(this.courseService.getSubjects(teacher));
  }

  createSituations(situations: Situation[]) {
    //TODO CONNECT TO BACKEND
    //this.situations = situations;
  }

  updateSituations(situations: Situation[]) {
    //TODO CONNECT TO BACKEND
  }

  createOrUpdateSubject(subject: Subject){
    //TODO CONNECT TO BACKEND
  }

  createOrUpdateMeetings(meetings: Meeting[]){
    //TODO CONNECT TO BACKEND
    // warning!! on update the old meetings for the same subject should be replaced by the new ones (ex. if we had some meetings for subject X before
    // and we make another call on the api the new meetings should replace the old ones)
  }
}
