import { Component, OnInit } from '@angular/core';
import {Subject} from "../../shared/models/Subject";
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../shared/models/User";
import {Meeting} from "../../shared/models/Meeting";
import {UserService} from "../../shared/services/user/user.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material";
import {CourseService} from "../../shared/services/course/course.service";

@Component({
  selector: 'app-teacher-add-course',
  templateUrl: './teacher-add-course.component.html',
  styleUrls: ['./teacher-add-course.component.css']
})
export class TeacherAddCourseComponent implements OnInit {

  subject: Subject;
  displayMeetingsControl: boolean;
  meetings: Meeting[];
  teachers: User[];

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
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
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


  showMeetingsControl() {

    this.subject = {
      id: 0,
      name: this.nameCtrl.value,
      isOptional: this.isOptionalCtrl.value,
      teacher: this.teacherCtrl.value
    };

    this.meetings = [];

    const numberOfMeetings = this.meetingNoCtrl.value > 30 ? 30 : this.meetingNoCtrl.value;

    for (let i = 0; i < numberOfMeetings; i++) {
      this.meetings.push({
        id: 0,
        type: null,
        attendanceRequired: null,
        subject: this.subject,
        teachers: null
      });
    }


    this.displayMeetingsControl = true;
  }

  isSubjectComplete(): boolean {
    this.subject = {
      id: 0,
      name: this.nameCtrl.value,
      isOptional: this.isOptionalCtrl.value,
      teacher: this.teacherCtrl.value
    };



    return this.subject.name != null
      && this.subject.name != ''
      && this.subject.isOptional != null
      && this.subject.teacher != null
      && this.meetingNoCtrl.value != null
      && this.meetings != null
      && (this.meetings.findIndex(m => {
        m.subject = this.subject;
        return m.teachers == null || m.teachers.length == 0
          || m.attendanceRequired == null || m.type == null;
      }) === -1);
  }

  saveSubject(){
    this.subjectService.createOrUpdateSubject(this.subject);
    this.subjectService.createOrUpdateMeetings(this.meetings);
    this.snackBar.open("Data has been successfully saved!", 'Clear', {duration: 2000});
  }
}
