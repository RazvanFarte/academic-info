import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Situation} from "../shared/models/Situation";
import {FormControl, FormGroupDirective, NgForm} from "@angular/forms";
import {ErrorStateMatcher, MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from "@angular/material";
import {Student} from "../shared/models/Student";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return (control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-situation-table',
  templateUrl: './situation-table.component.html',
  styleUrls: ['./situation-table.component.css']
})
export class SituationTableComponent implements OnInit {

  @Input() situations: Situation[];
  @Input() idisplayedColumns: string[];
  displayedColumns: string[];
  possibleColumns;
  @Input() selection;
  @Input() gradeFormControls: FormControl[];
  @Input() editable: boolean;
  @Input() situationsDataSource: MatTableDataSource<Situation>;
  filters;
  gradeErrorMatcher;
  fc;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  nameFilter: string;
  groupFilter: string;
  yearFilter: string;
  subjectFilter: string;
  meetingFilter: string;
  weekFilter: string;
  emailFilter: string;
  gradeFilter: string;
  presenceFilter;
  gradeOperationFilter;

  constructor(public snackBar: MatSnackBar) {
  }

  getDisplayedColumns(): string[] {
    if (this.displayedColumns == null)
      this.displayedColumns = this.idisplayedColumns;
    return this.displayedColumns;
  }

  compareColumn(column1: string, column2: string) {
    return column1 === column2;
  }

  // warning, the changed field is not guaranteed to be updated when this method is called, it usually updates after
  saveChange(situation: Situation){
    situation.updated = true;
  }

  ngOnInit() {
    this.possibleColumns = [
      {'value': 'action', 'display': 'Actions'},
      {'value': 'name', 'display': 'Name'},
      {'value': 'year', 'display': 'Year'},
      {'value': 'group', 'display': 'Group'},
      {'value': 'subject', 'display': 'Subject'},
      {'value': 'meeting', 'display': 'Meeting'},
      {'value': 'week', 'display': 'Week'},
      {'value': 'is_present', 'display': 'Present'},
      {'value': 'grade', 'display': 'Grade'},
      {'value': 'email', 'display': 'E-Mail'}
    ];
    this.situationsDataSource = new MatTableDataSource(this.situations);
    this.getDisplayedColumns();
    this.situationsDataSource.sortingDataAccessor = (item, property) => {
      if(this.situationsDataSource.paginator._pageIndex > 0)
        this.situationsDataSource.paginator.firstPage();
      switch (property) {
        case 'name':
          return item.student.user.lastName + " " + item.student.user.firstName;
        case 'year':
          return item.student.year;
        case 'group':
          return item.student.group;
        case 'week':
          return item.weekNumber;
        case 'subject':
          return item.meeting.subject.name;
        case 'meeting':
          return item.meeting.type;
        case 'email':
          return item.student.user.email;
        case "is_present":
          return item.meeting.attendanceRequired ? ( item.isPresent === true ? -1 : 0 ) : 1;
        case "grade":
          return item.isGradable ? item.grade : -1;
        default:
          return item[property];
      }
    };

    this.situationsDataSource.sort = this.sort;
    this.situationsDataSource.paginator = this.paginator;
    this.situationsDataSource.filterPredicate = (situation: Situation, filters: string) => this.filterPredicate(situation);

    this.gradeErrorMatcher = new MyErrorStateMatcher();
    this.fc = [];
    this.resetFormControl();
    this.resetFilters();
  }


  filterByYear(situation: Situation): boolean {
    return this.filters.year == '' || ("" + situation.student.year == "" + this.filters.year);
  }

  filterByGroup(situation: Situation): boolean {
    return this.filters.group == '' || "" + situation.student.group == "" + this.filters.group;
  }

  filterBySubject(situation: Situation): boolean {
    return this.filters.subject == ''
      || situation.meeting.subject.name.toLowerCase().trim()
        .includes(this.filters.subject.trim().toLowerCase());
  }

  filterByMeeting(situation: Situation): boolean {
    return this.filters.meeting == ''
      || situation.meeting.type.toLowerCase().trim()
        .includes(this.filters.meeting.trim().toLowerCase());
  }

  filterByWeek(situation: Situation): boolean {
    return this.filters.week == '' || "" + situation.weekNumber == "" + this.filters.week;
  }

  filterByGrade(situation: Situation): boolean {
    return (this.filters.grade == '' || this.filters.gradeOperation == '')
      || (situation.isGradable && (this.gradeOperationFilter == 'less_than' ? situation.grade < this.filters.grade
        : this.gradeOperationFilter == 'greater_than' ? situation.grade > this.filters.grade
          : this.gradeOperationFilter == 'equal_to' ? situation.grade == this.filters.grade
            : this.gradeOperationFilter == 'different_from' ? situation.grade != this.filters.grade
              : false));
  }

  filterByEmail(situation: Situation): boolean {
    return this.filters.email == ''
      || situation.student.user.email.toLowerCase()
        .includes(this.filters.email.toLowerCase());
  }

  filterByPresence(situation: Situation): boolean {
    return (this.filters.is_present == '')
      || (this.filters.is_present == 'not_required' ? situation.meeting.attendanceRequired == false
        : (situation.meeting.attendanceRequired == true
          && situation.isPresent == (this.filters.is_present == 'true')));

  }


  filterByName(situation: Situation): boolean {
    return this.filters.name == ''
      || (situation.student.user.lastName + " " + situation.student.user.firstName).trim().toLowerCase()
        .includes(this.filters.name.trim().toLowerCase());
  }


  filterPredicate(situation: Situation): boolean {
    return this.filterByName(situation)
      && this.filterBySubject(situation)
      && this.filterByMeeting(situation)
      && this.filterByYear(situation)
      && this.filterByGroup(situation)
      && this.filterByWeek(situation)
      && this.filterByGrade(situation)
      && this.filterByPresence(situation)
      && this.filterByEmail(situation);
  }


  getIndexForSituation(situation: Situation) {
    return this.situations.findIndex(s => s.id === situation.id);
  }

  resetFormControl() {
    this.fc = this.gradeFormControls;
    //this.gradeFormControls.forEach(f => this.fc.push(new FormControl(f.value)));
  }

  applyFilter(filterValue: string, filterColumn: string) {

    this.filters[filterColumn] = filterValue;
    // do not remove the static string, otherwise the filter won't register a change on empty strings
    this.situationsDataSource.filter = "DONT_REMOVE" + filterValue.trim().toLowerCase();

    if (this.situationsDataSource.paginator) {
      this.situationsDataSource.paginator.firstPage();
    }
  }

  resetFilters() {
    this.filters = {
      'name': '',
      'year': '',
      'group': '',
      'subject': '',
      'meeting': '',
      'gradeOperation': '',
      'week': '',
      'grade': '',
      'email': '',
      'is_present': ''
    };
    this.nameFilter = '';
    this.groupFilter = '';
    this.yearFilter = '';
    this.subjectFilter = '';
    this.meetingFilter = '';
    this.weekFilter = '';
    this.emailFilter = '';
    this.presenceFilter = '';
    this.gradeOperationFilter = '';
    this.gradeFilter = '';

    this.applyFilter('', null);
  }

  getAveragePresence(): number {
    let filteredSituations = this.situationsDataSource.data
      .filter(s => s.meeting.attendanceRequired === true);

    if (filteredSituations.length === 0)
      return 100;

    const situationsWithPresence = filteredSituations
      .filter(s => s.isPresent === true);

    return Math.round((situationsWithPresence.length / filteredSituations.length * 100) * 100) / 100;
  }

  getAverageGrade(): number {
    const filteredSituations = this.situationsDataSource.data
      .filter(s => s.isGradable === true);

    if (filteredSituations.length === 0)
      return null;

    const sum = filteredSituations
      .map(s => s.grade)
      .reduce((sum, grade) => sum + grade);

    return Math.round(sum / filteredSituations.length * 100) / 100;

  }

  removeColumn(column: string) {
    this.displayedColumns = this.displayedColumns.filter(c => c != column);
  }

  save() {
    let avgGrade = Math.round(this.getAverageGrade() * 100) / 100;
    let avgPresence = Math.round(this.getAveragePresence() * 100) / 100;

    let message = "Average grade is " + avgGrade + "\n"
      + "Average presence is " + avgPresence + "%";
    //this.snackBar.open(message, 'OK', {duration: 2000,});

    this.snackBar.open("Data has been successfully saved!", 'Clear', {duration: 2000});
  }

  isColumnDisplayed(column: string): boolean {
    return this.displayedColumns.find(c => c === column) != null;
  }

  getOverallSituation(student: Student) {

  }

}
