import { Component, OnInit } from '@angular/core';
import {Subject} from "../../shared/models/Subject";
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Meeting} from "../../shared/models/Meeting";
import {UserService} from "../../shared/services/user/user.service";
import {Router} from "@angular/router";
import {MatDialog, MatSnackBar} from "@angular/material";
import {CourseService} from "../../shared/services/course/course.service";
import {Teacher} from "../../shared/models/Teacher";
import {TeacherAddMeetingComponent} from "../teacher-add-meeting/teacher-add-meeting.component";

@Component({
  selector: 'app-teacher-add-course',
  templateUrl: './teacher-add-course.component.html',
  styleUrls: ['./teacher-add-course.component.css']
})
export class TeacherAddCourseComponent implements OnInit {

  subject: Subject;
  displayMeetingsControl: boolean;
  meetings: any[];
  teachers: Teacher[];
  /* Form controls & group */
  addSubjectFormGroup: FormGroup;
  nameCtrl: FormControl;
  isOptionalCtrl: FormControl;
  teacherCtrl: FormControl;
  meetingNoCtrl: FormControl;

  constructor(
    private _formBuilder: FormBuilder,
    private userService: UserService,
    private subjectService: CourseService,
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.meetings = [];

    this.displayMeetingsControl = false;
    this.meetingNoCtrl = new FormControl('', null);
    this.nameCtrl = new FormControl('', null);
    this.isOptionalCtrl = new FormControl('', null);
    this.teacherCtrl = new FormControl('', null);
    this.meetingNoCtrl = new FormControl('', [Validators.max((30))]);
    this.teachers = this.userService.getAllTeachers();
    this.addSubjectFormGroup = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({
          nameCtrl: this.nameCtrl
        }),
        this._formBuilder.group({
          isOptionalCtrl: this.isOptionalCtrl
        }),
        this._formBuilder.group({
          teacherCtrl: this.teacherCtrl
        }),
        this._formBuilder.group({
          meetingNoCtrl: this.meetingNoCtrl
        })
      ]) as FormArray
    });


    this.subject = {
      id: 0,
      name: '',
      isOptional: false,
      teacher: null
    }
  }


  get formArray(): AbstractControl | null {
    return this.addSubjectFormGroup.get('formArray');
  }

  editMeeting(meeting: Meeting){

    const dialogRef = this.dialog.open(TeacherAddMeetingComponent, {
      width: '600px',
      data: { meeting: meeting }
    });

    dialogRef.afterClosed().subscribe(result => {


      // after close
    });
  }


  createMeeting(){
    /*
    this.subject = {
      id: 0,
      name: this.nameCtrl.value,
      isOptional: this.isOptionalCtrl.value,
      teacher: this.teacherCtrl.value
    };*/
    this.meetings.push({
      reference: this.meetings.length,
      occurrencesFormControl: new FormControl(),
      typeFormControl: new FormControl(),
      teachersFormControl: new FormControl(),
      attendanceReqFormControl: new FormControl(),
      possibleTeachers: this.teachers,
    });
  }

  isSubjectComplete(): boolean {
    return true;
  }

  saveSubject(){
    this.subjectService.createOrUpdateSubject(this.subject);
    this.subjectService.createOrUpdateMeetings(this.meetings);
    this.snackBar.open("Data has been successfully saved!", 'Clear', {duration: 2000});
  }
}
