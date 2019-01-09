import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Subject} from "../../shared/models/Subject";
import {SelectionModel} from "@angular/cdk/collections";
import {Situation} from "../../shared/models/Situation";
import {Meeting} from "../../shared/models/Meeting";
import {Teacher} from "../../shared/models/Teacher";
import {LoginService} from "../../shared/services/login/login.service";
import {SituationService} from "../../shared/services/situation/situation.service";
import {UserService} from "../../shared/services/user/user.service";
import {User} from "../../shared/models/User";

@Component({
  selector: 'app-teacher-situation',
  templateUrl: './teacher-situation.component.html',
  styleUrls: ['./teacher-situation.component.css']
})
export class TeacherSituationComponent implements OnInit {

  weeks: number[];
  meetings: Meeting[];
  subjects: Subject[];
  loggedInUser: User;
  situations: Situation[];
  selectedSituations: Situation[];
  weekControl: FormControl;
  subjectControl: FormControl;
  meetingControl: FormControl;
  tableEditable: boolean;
  enableShowAllButton: boolean;
  enableSelectionStepper: boolean;
  enableSaveSelection: boolean;
  showAllButtonClicked: boolean;
  showSelectedButtonClicked: boolean;
  teacherID: number;
  doneLoading: boolean = false;

  constructor(
    private situationService: SituationService,
    private loginService: LoginService,
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.tableEditable = true;
    this.doneLoading = false;
    this.enableShowAllButton = true;
    this.enableSaveSelection = true;
    this.enableSelectionStepper = true;
    this.showSelectedButtonClicked = false;
    this.loggedInUser = this.userService.getCurrentLoggedInUser();
    this.teacherID = this.loginService.getUserId();
    this.weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    this.weekControl = new FormControl('', [Validators.required]);
    this.subjectControl = new FormControl('', [Validators.required]);
    this.meetingControl = new FormControl('', [Validators.required]);
    this.situationService.getSubjects(this.loggedInUser).subscribe(s => this.subjects = s);
    this.situationService.getSituations(this.teacherID, null, null)
      .subscribe(r => {
          this.situations = r;
        }
        ,
        e => {
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
    return this.showAllButtonClicked
      || (
        this.showSelectedButtonClicked
        && this.weekControl.touched
        && this.subjectControl.touched
        && this.meetingControl.touched
      );
  }

  getSituations(meeting: Meeting, week: number): Situation[] {
    if (!meeting || !week) {
      this.selectedSituations = this.situations;
    } else {
      this.selectedSituations = this.situations.filter(s => s.meeting.id === meeting.id && s.weekNumber === week);
    }
    return this.selectedSituations;
  }

  getNewSelection(situations: Situation[]): SelectionModel<Situation> {
    return new SelectionModel<Situation>(true, situations.filter(s => s.isPresent === true));
  }

  getDisplayedColumns() {
    if (this.showAllButtonClicked === true)
      return ['action','name', 'year', 'group', 'subject', 'meeting', 'week', 'is_present', 'grade','grade_percentage', 'email'];
    return ['action','name', 'year', 'group', 'is_present', 'grade','grade_percentage', 'email'];
  }

  getNewGradeControl(situations: Situation[]): FormControl[] {
    let result = situations.map(s => new FormControl(s.grade));
    return result;
  }

  showTableForAll() {
    this.showAllButtonClicked = true;
    this.enableSelectionStepper = false;
    this.enableShowAllButton = false;
  }

}

