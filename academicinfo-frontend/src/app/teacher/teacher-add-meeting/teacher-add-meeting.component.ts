import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSlideToggleChange} from "@angular/material";
import {Appointment} from "../../shared/models/Appointment";
import {Meeting} from "../../shared/models/Meeting";
import {Teacher} from "../../shared/models/Teacher";
import {Subject} from "../../shared/models/Subject";

@Component({
  selector: 'app-teacher-add-meeting',
  templateUrl: './teacher-add-meeting.component.html',
  styleUrls: ['./teacher-add-meeting.component.css']
})
export class TeacherAddMeetingComponent {

  totalPercentage: number;
  output: {
    meeting: Meeting,
    appointments: Appointment[]
  };
  isSaving: boolean;

  constructor(
    public dialogRef: MatDialogRef<TeacherAddMeetingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.totalPercentage = 100;
    this.isSaving = false;
    this.data.possibleAppointments.forEach(conf => {
      conf.gradeEdited = false;
      conf.isGradable = conf.gradePercentage != null;
      conf.gradePercentage = null;
      conf.attendanceRequired = false;
      conf.restrictTeacher = false;
    });

    this.data.sharedAppointment = {
      gradePercentage: null,
      attendanceRequired: false,
      isGradable: false,
    };


  };


  getTotalGradePercentage(): number {
    let filteredArray = this.data.appointments
      .filter(appconf => appconf.isGradable === true && appconf.gradePercentage != null);
    return filteredArray.length === 0 ? 100 : filteredArray
      .map(appconf => appconf.gradePercentage)
      .reduce(((sum, currentValue) => sum + currentValue));
  }

  redistributePercentages(ignoreAppointment: any) {

    if (ignoreAppointment == null || ignoreAppointment.gradePercentage == null) {

    } else {
      ignoreAppointment.gradeEdited = true;
      if (ignoreAppointment.gradePercentage < 0)
        ignoreAppointment.gradePercentage = 0;
      else if (ignoreAppointment.gradePercentage > 100)
        ignoreAppointment.gradePercentage = 100;
      else {
        let approxValue = Math.floor(ignoreAppointment.gradePercentage * 100 + (0.001)) / 100;

        if (approxValue != ignoreAppointment.gradePercentage)
          ignoreAppointment.gradePercentage = approxValue;
      }
    }

    let isGradableAppConfigLength = this.data.appointments
      .filter(appconf => appconf.isGradable === true)
      .length;

    let editedAppConfigs = this.data.appointments
      .filter(appconf => appconf.gradeEdited === true && appconf.isGradable === true);

    let reservedAmount =
      editedAppConfigs.length === 0 ? 0 : editedAppConfigs
        .map(appconf => appconf.gradePercentage == null ? 0 : appconf.gradePercentage)
        .reduce(((sum, currentValue) => sum + currentValue));

    if (reservedAmount > 100) {
      this.totalPercentage = this.getTotalGradePercentage();
      return;
    }

    let newValue = (Math.floor(((100 - reservedAmount) / (isGradableAppConfigLength - editedAppConfigs.length)) * 100) / 100);

    if (newValue < 0) return;

    let totalAmount = 0;
    this.data.appointments.forEach(appconf => {
      if (appconf.gradeEdited == false && appconf.isGradable === true) {
        appconf.gradePercentage = newValue;
      }
      totalAmount += appconf.gradePercentage;
    });
    this.totalPercentage = this.getTotalGradePercentage();
  }

  private getGradePercentage(): number {
    if (this.data.appointments == null)
      return null;
    return Math.round((100 / this.data.appointments.length) * 100) / 100;
  }


  refreshGrading() {
    if (this.data.sharedAppointment.isGradable == true) {
      this.data.sharedAppointment.gradePercentage = this.getGradePercentage();
    }
  }

  toggleGrading(event: MatSlideToggleChange, appointment: any) {
    if (event.checked) {
      appointment.isGradable = true;
      if (this.data.hasSeparatedWeekConfigurations == false) {
        appointment.gradePercentage = this.getGradePercentage();
      } else {
        this.redistributePercentages(null);
      }
    } else {
      appointment.isGradable = false;
      appointment.gradePercentage = null;
      this.redistributePercentages(null);
    }
  }

  toggleSeparateConfiguration(event: MatSlideToggleChange) {
    if (event.checked == true) {
      this.data.appointments.forEach(a => {
        a.attendanceRequired = this.data.sharedAppointment.attendanceRequired;
        a.gradePercentage = this.data.sharedAppointment.gradePercentage;
        a.isGradable = this.data.sharedAppointment.isGradable;
        a.restrictTeacher = this.data.sharedAppointment.restrictTeacher;
        a.teachers = this.data.sharedAppointment.teachers;
      });
      this.data.hasSeparatedWeekConfigurations = true;
    } else {
      this.data.hasSeparatedWeekConfigurations = false;
    }

  }

  toggleRestrictTeach(event: MatSlideToggleChange, appointment: any) {
    if (event.checked) {
      appointment.restrictTeacher = true;
    } else {
      appointment.restrictTeacher = false;
      appointment.teacher = null;
    }

  }

  onCloseClick(): void {

    this.dialogRef.close();
  }

  compare(first, second){
    return first.weekNumber == second.weekNumber;
  }

  getData() {
    if (this.isSaving === true)
      return;

    this.isSaving = false;

    this.output = {
      meeting: null,
      appointments: null
    };

    this.output.meeting = {
      id: -1,
      type: this.data.meeting.type,
      subject: this.data.meeting.subject,
      teachers: this.data.meeting.teachers
    };

    this.output.appointments = [];

    this.data.appointments.forEach(appData => {
      if (this.data.hasSeparatedWeekConfigurations === true) {
        this.createAppointment(appData, appData.weekNumber)
      } else {
        this.createAppointment(this.data.sharedAppointment, appData.weekNumber)
      }
    });
    return this.output;
  }


  createAppointment(app, weekNumber): void {

      this.output.appointments.push({
        id: -1,
        weekNumber: weekNumber,
        gradePercentage: app.gradePercentage,
        attendanceRequired: app.attendanceRequired,
        isGradable: app.isGradable,
        meeting: this.output.meeting,
        responsibleTeacher: null
      });

  }

  canSave() {
    return this.totalPercentage <= 100.005
      && this.totalPercentage >= 99.995
      && this.data.appointments != null
      && this.data.appointments.length > 0
      && this.data.meeting.type != null
      && this.data.meeting.type != ''
      && this.data.meeting.teachers != null
      && this.data.meeting.teachers.length > 0;
  }

}
