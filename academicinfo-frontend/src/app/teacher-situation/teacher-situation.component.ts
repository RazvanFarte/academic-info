import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Subject} from "../shared/models/Subject";
import {SelectionModel} from "@angular/cdk/collections";
import {CourseService} from "../services/course/course.service";
import {Situation} from "../shared/models/Situation";
import {Meeting} from "../shared/models/Meeting";
import {Teacher} from "../shared/models/Teacher";

@Component({
  selector: 'app-teacher-situation',
  templateUrl: './teacher-situation.component.html',
  styleUrls: ['./teacher-situation.component.css']
})
export class TeacherSituationComponent implements OnInit {
  public weeks: number[];
  public meetings: Meeting[];
  public subjects: Subject[];
  public situations: Situation[];
  weekControl: FormControl;
  subjectControl: FormControl;
  meetingControl: FormControl;
  tableEditable: boolean;
  displayedColumns: string[];
  enableShowAllButton: boolean;
  enableSelectionStepper: boolean;
  enableSaveSelection: boolean;
  showAllButtonClicked: boolean;

  constructor(public courseService: CourseService) {
  }

  ngOnInit() {
    this.tableEditable = true;
    this.enableShowAllButton = true;
    this.enableSaveSelection = true;
    this.enableSelectionStepper = true;
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
    return this.showAllButtonClicked || (
      this.weekControl.touched
      && this.subjectControl.touched
      && this.meetingControl.touched);
  }

  getSituations(meeting: Meeting, week: number): Situation[] {
    this.situations = this.courseService.getSituationsSorted(meeting, week);
    return this.situations;
  }

  getNewSelection(situations: Situation[]): SelectionModel<Situation> {
    return new SelectionModel<Situation>(true, situations.filter(s => s.isPresent === true));
  }

  getDisplayedColumns() {
    if(this.showAllButtonClicked === true)
      return ['name', 'year', 'group', 'subject','meeting', 'is_present', 'grade', 'email'];
    return ['name', 'year', 'group', 'is_present', 'grade', 'email'];
  }

  getNewGradeControl(situations: Situation[]): FormControl[] {
    let result = situations.map(s => new FormControl(s.grade));
    return result;
  }

  getMeeting(): Meeting {
    if (this.weekControl.touched)
      return this.meetingControl.value;
    return null;
  }

  getWeek(): number {
    if (this.weekControl.touched)
      return this.weekControl.value;
    return null;
  }

  showTableForAll() {
    this.showAllButtonClicked = true;
    this.enableSelectionStepper = false;
    this.enableShowAllButton = false;
  }

}

