import { Component, OnInit } from '@angular/core';
import {Subject} from "../shared/models/Subject";
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../shared/models/User";
import {Meeting} from "../shared/models/Meeting";
import {UserService} from "../services/user/user.service";

@Component({
  selector: 'app-teacher-add-course',
  templateUrl: './teacher-add-course.component.html',
  styleUrls: ['./teacher-add-course.component.css']
})
export class TeacherAddCourseComponent implements OnInit {

  operationType: string;
  newCourse: Subject;
  addCourseFormGroup: FormGroup;
  teachers: User[];
  displayMeetingsControl: boolean;
  meetings: Meeting[];
  nameCtrl: FormControl;
  isOptionalCtrl: FormControl;
  teacherCtrl: FormControl;
  meetingNoCtrl: FormControl;

  constructor(private _formBuilder: FormBuilder, private userService: UserService) {
  }

  ngOnInit() {
    this.displayMeetingsControl = false;
    this.operationType = 'none';
    this.meetingNoCtrl = new FormControl('', null);
    this.nameCtrl = new FormControl('', null);
    this.isOptionalCtrl = new FormControl('', null);
    this.teacherCtrl = new FormControl('', null);
    this.meetingNoCtrl = new FormControl('', [Validators.max((30))]);
    this.teachers = this.userService.getAllTeachers();
    this.addCourseFormGroup = this._formBuilder.group({
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


    this.newCourse = {
      id: 0,
      name: '',
      isOptional: false,
      teacher: null
    }
  }


  get formArray(): AbstractControl | null {
    return this.addCourseFormGroup.get('formArray');
  }


  showMeetingsControl() {

    this.newCourse = {
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
        subject: this.newCourse,
        teachers: null
      });
    }


    this.displayMeetingsControl = true;
  }

  isSubjectComplete(): boolean {
    this.newCourse = {
      id: 0,
      name: this.nameCtrl.value,
      isOptional: this.isOptionalCtrl.value,
      teacher: this.teacherCtrl.value
    };



    return this.newCourse.name != null
      && this.newCourse.name != ''
      && this.newCourse.isOptional != null
      && this.newCourse.teacher != null
      && this.meetingNoCtrl.value != null
      && this.meetings != null
      && (this.meetings.findIndex(m => {
        m.subject = this.newCourse;
        return m.teachers == null || m.teachers.length == 0
          || m.attendanceRequired == null || m.type == null;
      }) === -1);
  }

  editCourse() {
    this.operationType = 'edit';
  }
}
