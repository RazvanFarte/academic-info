import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../shared/models/User";
import {Meeting} from "../../shared/models/Meeting";
import {UserService} from "../../shared/services/user/user.service";
import {CourseService} from "../../shared/services/course/course.service";
import {MatSnackBar} from "@angular/material";
import {Subject} from "../../shared/models/Subject";

@Component({
  selector: 'app-teacher-edit-course',
  templateUrl: './teacher-edit-course.component.html',
  styleUrls: ['./teacher-edit-course.component.css']
})
export class TeacherEditCourseComponent implements OnInit {

  newCourse: Subject;
  addCourseFormGroup: FormGroup;
  teachers: User[];
  displayMeetingsControl: boolean;
  meetings: Meeting[];
  nameCtrl: FormControl;
  isOptionalCtrl: FormControl;
  teacherCtrl: FormControl;
  meetingNoCtrl: FormControl;

  constructor(
    private _formBuilder: FormBuilder,
    private userService: UserService,
    private courseService: CourseService,
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

  saveCourse(){
    this.courseService.createOrUpdateSubject(this.newCourse);
    this.courseService.createOrUpdateMeetings(this.meetings);
    this.snackBar.open("Data has been successfully saved!", 'Clear', {duration: 2000});
    //this.router.navigate(['/courses-management']);
  }

}
