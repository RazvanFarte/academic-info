import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Situation} from "../../shared/models/Situation";
import {SelectionModel} from "@angular/cdk/collections";
import {Meeting} from "../../shared/models/Meeting";
import {LoginService} from "../../shared/services/login/login.service";
import {Teacher} from "../../shared/models/Teacher";
import {SituationService} from "../../shared/services/situation/situation.service";
import {Subject} from "../../shared/models/Subject";
import {UserService} from "../../shared/services/user/user.service";

@Component({
  selector: 'app-student-situation',
  templateUrl: './student-situation.component.html',
  styleUrls: ['./student-situation.component.css']
})
export class StudentSituationComponent implements OnInit {
  public weeks: number[];
  public meetings: Meeting[];
  public subjects: Subject[];
  public situations: Situation[];
  public selectedSituations: Situation[];
  weekControl: FormControl;
  subjectControl: FormControl;
  meetingControl: FormControl;
  tableEditable: boolean;
  enableShowAllButton: boolean;
  enableSelectionStepper: boolean;
  enableSaveSelection: boolean;
  showAllButtonClicked: boolean;
  showSelectedButtonClicked: boolean;
  studentId: number;
  doneLoading: boolean = false;

  constructor(
    private situationService: SituationService,
    private loginService: LoginService,
    private userService: UserService
  ){}

  ngOnInit() {
    this.tableEditable = false;
    this.doneLoading = false;
    this.enableShowAllButton = true;
    this.enableSaveSelection = true;
    this.enableSelectionStepper = true;
    this.showSelectedButtonClicked = false;
    const teacher = this.userService.getCurrentLoggedInUser();
    this.studentId = this.loginService.getUserId();
    this.weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    this.weekControl = new FormControl('', [Validators.required]);
    this.subjectControl = new FormControl('', [Validators.required]);
    this.meetingControl = new FormControl('', [Validators.required]);
    this.situationService.getSubjects(teacher).subscribe(s => this.subjects = s);
    this.situationService.getSituations(this.studentId, null, null)
      .subscribe(r => {
          this.situations = r;
          console.log('received: ' + r.length + ' elems');
        }
        ,
        e => {
          console.log(e);
        },
        () => {
          this.doneLoading = true;
        });
  }

  subjectSelected() {
    this.situationService.getMeetings(this.subjectControl.value).subscribe(m => this.meetings = m);
    this.meetingControl.reset();
  }

  showTable() {
    return this.showAllButtonClicked || (
      this.showSelectedButtonClicked
      && this.weekControl.touched
      && this.subjectControl.touched
      && this.meetingControl.touched);
  }

  getSituations(meeting: Meeting, week: number): Situation[] {
    if (!meeting || !week) {
      this.selectedSituations = this.situations;
    } else {
      this.selectedSituations = this.situations.filter(s => s.appointment.meeting.id === meeting.id && s.appointment.weekNumber === week);
    }
    return this.selectedSituations;
  }

  getNewSelection(situations: Situation[]): SelectionModel<Situation> {
    return new SelectionModel<Situation>(true, situations.filter(s => s.isPresent === true));
  }

  getDisplayedColumns() {
    if (this.showAllButtonClicked === true)
      return ['action','name', 'year', 'group', 'subject', 'meeting', 'week', 'is_present', 'grade', 'email'];
    return ['action','name', 'year', 'group', 'is_present', 'grade', 'email'];
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
