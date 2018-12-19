import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Situation} from "../shared/models/Situation";
import {CourseService} from "../services/course/course.service";
import {FormControl, FormGroupDirective, NgForm} from "@angular/forms";
import {ErrorStateMatcher, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";

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
  @Input() displayedColumns: string[];
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
  emailFilter: string;
  gradeFilter: string;
  presenceFilter;
  gradeOperationFilter;

  constructor(private courseService: CourseService) {
  }

  ngOnInit() {
    this.situationsDataSource = new MatTableDataSource(this.situations);
    this.situationsDataSource.paginator = this.paginator;
    this.situationsDataSource.sortingDataAccessor = (item, property) => {
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
          return item.isPresent;
        default:
          return item[property];
      }
    };
    this.situationsDataSource.filterPredicate = (situation: Situation, filters: string) => this.filterPredicate(situation);
    this.situationsDataSource.sort = this.sort;
    this.gradeErrorMatcher = new MyErrorStateMatcher();
    this.fc = [];
    this.resetFormControl();
    this.resetFilters();
  }

  filterPredicate(situation: Situation): boolean {
    let ok = true;
    if (this.filters.year != '')
      ok = ok === true && "" + situation.student.year === this.filters.year;
    if (this.filters.group != '')
      ok = ok === true && "" + situation.student.group === this.filters.group;
    if (this.filters.grade != '')
      ok = ok === true && "" + situation.grade === this.filters.grade;
    if (this.filters.email != '')
      ok = ok === true && situation.student.user.email.toLowerCase().includes(this.filters.email.toLowerCase());
    if (this.filters.is_present != '') {
      if (this.filters.is_present === 'not_required') {
        ok = ok === true && situation.meeting.attendanceRequired === false;
      }
      else {
        ok = ok === true
          && situation.meeting.attendanceRequired === true
          && situation.isPresent == (this.filters.is_present == 'true');
      }
    }
    if (this.filters.name != '')
      ok = ok === true && ((situation.student.user.lastName + " " +situation.student.user.firstName).trim().toLowerCase().includes(this.filters.name.trim().toLowerCase()));
    return ok;
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
    this.situationsDataSource.filter = "a" + filterValue.trim().toLowerCase();

    if (this.situationsDataSource.paginator) {
      this.situationsDataSource.paginator.firstPage();
    }
  }

  resetFilters() {
    this.filters = {
      'name': '',
      'year': '',
      'group': '',
      'grade': '',
      'email': '',
      'is_present': ''
    };
    this.nameFilter = '';
    this.groupFilter = '';
    this.yearFilter = '';
    this.emailFilter = '';
    this.presenceFilter = '';
    this.gradeOperationFilter = '';
    this.gradeFilter = '';

    this.applyFilter('', null);
  }

  getAveragePresence(): number {
    const filteredSituations = this.situations
      .filter(s => this.filterPredicate(s) === true
        && s.meeting.attendanceRequired === true);

    if(filteredSituations.length === 0)
      return 100;

    const situationsWithPresence = filteredSituations
      .filter(s => s.isPresent === true);

    return situationsWithPresence.length / filteredSituations.length * 100;
  }

  getAverageGrade(): number {
    const filteredSituations = this.situations
      .filter(s => this.filterPredicate(s) === true);

    if(filteredSituations.length === 0)
      return null;

    const sum = filteredSituations
      .map(s => s.grade)
      .reduce((sum, grade) => sum + grade);

    return sum / filteredSituations.length;

  }

  save(){

  }


}
