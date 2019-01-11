import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSlideToggleChange} from "@angular/material";

@Component({
  selector: 'app-teacher-add-meeting',
  templateUrl: './teacher-add-meeting.component.html',
  styleUrls: ['./teacher-add-meeting.component.css']
})
export class TeacherAddMeetingComponent {


  possibleAppointments: any[];

  constructor(
    public dialogRef: MatDialogRef<TeacherAddMeetingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.possibleAppointments = [];
    for(let i = 1; i < 15; i++){
      this.possibleAppointments.push(
        { week: i, gradePercentage: 0, presenceRequired: false, gradable: false, restrictTeacher: false, teacher: null}
      );
    }

  }


  toggleGrading(event: MatSlideToggleChange,appointment: any){
    if(event.checked){
      appointment.gradable = true;
    } else {
      appointment.gradable = false;
      appointment.gradePercentage = 0;
    }
  }

  toggleRestrictTeach(event: MatSlideToggleChange,appointment: any){
    if(event.checked){
      appointment.restrictTeacher = true;
    } else {
      appointment.restrictTeacher = false;
      appointment.teacher = null;
    }

  }

}
