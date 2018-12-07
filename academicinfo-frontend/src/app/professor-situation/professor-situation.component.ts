import {Component, OnInit} from '@angular/core';
import {Meeting} from "../shared/models/Meeting";
import {FormControl, Validators} from '@angular/forms';
import {CourseService} from "../services/course/course.service";
import {Subject} from "../shared/models/Subject";
import {Teacher} from "../shared/models/Teacher";
import {SelectionModel} from "@angular/cdk/collections";
import {Situation} from "../shared/models/Situation";

@Component({
  selector: 'app-professor-situation',
  templateUrl: './professor-situation.component.html',
  styleUrls: ['./professor-situation.component.css']
})
export class ProfessorSituationComponent implements OnInit {

  public weeks: number[];
  public meetings: Meeting[];
  public subjects: Subject[];
  public situations: Situation[];
  weekControl: FormControl;
  subjectControl: FormControl;
  meetingControl: FormControl;
  disableSave: boolean;
  tableEditable: boolean;


  constructor(public courseService: CourseService) {
  }

  ngOnInit() {
    this.tableEditable = true;
    this.disableSave = false;
    const teacher: Teacher = {
      user: {
        id: 0,
        lastLogin: "2018-01-01",
        username: "popescu",
        email: "popescu@scs.ubbcluj.ro",
        firstName: "Ion",
        lastName: "Popescu",
        userType: 1,
        faculty: "IE",
        createdAt: "2018-01-02",
        updatedAt: "2018-01-02",
      }
    };


    this.weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    this.weekControl = new FormControl('', [Validators.required]);
    this.subjectControl = new FormControl('', [Validators.required]);
    this.meetingControl = new FormControl('', [Validators.required]);
    this.subjects = this.courseService.getSubjects(teacher);

    this.meetings = this.courseService.getMeetings(this.subjects[0]);
  }

  subjectSelected() {
    this.meetings = this.courseService.getMeetings(this.subjectControl.value);
    this.meetingControl.reset();
  }

  showTable() {
    return this.weekControl.touched && this.subjectControl.touched && this.meetingControl.touched;
  }

  getSituations(meeting: Meeting, week: number): Situation[] {
    this.situations = this.courseService.getSituationsSorted(meeting, week);
    return this.situations;
  }

  getNewSelection(situations: Situation[]): SelectionModel<Situation> {
    return new SelectionModel<Situation>(true, situations.filter(s => s.isPresent === true));
  }

  getNewGradeControl(situations: Situation[]): FormControl[] {
    let result = situations.map( s => new FormControl(s.grade));
    return result;
  }

}
