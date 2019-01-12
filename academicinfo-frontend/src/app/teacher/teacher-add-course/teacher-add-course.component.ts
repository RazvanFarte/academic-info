import {Component, OnInit} from '@angular/core';
import {Subject} from "../../shared/models/Subject";
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Meeting} from "../../shared/models/Meeting";
import {UserService} from "../../shared/services/user/user.service";
import {Router} from "@angular/router";
import {MatDialog, MatSnackBar} from "@angular/material";
import {CourseService} from "../../shared/services/course/course.service";
import {Teacher} from "../../shared/models/Teacher";
import {TeacherAddMeetingComponent} from "../teacher-add-meeting/teacher-add-meeting.component";
import {Appointment} from "../../shared/models/Appointment";

@Component({
  selector: 'app-teacher-add-course',
  templateUrl: './teacher-add-course.component.html',
  styleUrls: ['./teacher-add-course.component.css']
})
export class TeacherAddCourseComponent implements OnInit {

  subject: Subject;
  displayMeetingsControl: boolean;
  meetingComplexForms: any[];
  teachers: Teacher[];
  /* Form controls & group */
  addSubjectFormGroup: FormGroup;
  nameCtrl: FormControl;
  isOptionalCtrl: FormControl;
  teacherCtrl: FormControl;
  meetingNoCtrl: FormControl;
  appointments: Appointment[];
  meetings: Meeting[];

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
    this.meetingComplexForms = [];

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


  isComplete(meetingComplexForm: any): boolean {
    return meetingComplexForm.result != null;
  }


  get formArray(): AbstractControl | null {
    return this.addSubjectFormGroup.get('formArray');
  }

  editMeeting(meeting) {

    const dialogRef = this.dialog.open(TeacherAddMeetingComponent, {
      width: '600px',
      data: meeting
    });

    let r;

    dialogRef.afterClosed().subscribe(result => {
      meeting.result = result;
      meeting.appointments = [];

      result.appointments.forEach(resultedAppointment => {

        let index = meeting.appointments.findIndex(a => a.weekNumber === resultedAppointment.weekNumber);
        if(index != -1){
          meeting.appointments[index]
        }


      });



      meeting.appointments = result.appointments;
      console.log(meeting.appointments)

    }, error => {
      console.log(error);
    }, () => {
    });
  }


  createMeeting() {

    this.subject = {
      id: 0,
      name: this.nameCtrl.value,
      isOptional: this.isOptionalCtrl.value,
      teacher: this.teacherCtrl.value
    };

    let possibleAppointments = [];
    for (let i = 1; i < 15; i++) {
      possibleAppointments.push({weekNumber: 'Week ' + i});
    }
    possibleAppointments.push({weekNumber: 'Primary Examination Week'});
    possibleAppointments.push({weekNumber: 'Secondary Examination Week'});
    possibleAppointments.push({weekNumber: 'Reexamination week'});




    this.meetingComplexForms.push({
      meeting: {
        id: -1,
        type: null,
        subject: this.subject,
        teachers: null
      },
      appointments: [],
      possibleTeachers: this.teachers,
      hasSeparatedWeekConfigurations: false,
      possibleAppointments: possibleAppointments,
      result: null
    });
  }

  isSubjectComplete(): boolean {
    return true;
  }

  saveSubject() {

    let meetings: Meeting[] = this.meetingComplexForms.map(form => form.result.meeting);
    this.appointments = [];
    this.meetingComplexForms.forEach(form => {
        form.result.appointments.forEach(appointment => this.appointments.push(appointment))
      }
    );



    this.subjectService.createOrUpdateSubject(this.subject);
    this.subjectService.createOrUpdateMeetings(this.meetingComplexForms);
    this.snackBar.open("Data has been successfully saved!", 'Clear', {duration: 2000});
  }
}
