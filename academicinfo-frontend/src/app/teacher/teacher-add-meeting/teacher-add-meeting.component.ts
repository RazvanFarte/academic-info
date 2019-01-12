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


  separateAppointmentsConfig: any[];
  separateWeekConfiguration: boolean;
  sharedAppointmentsConfig: any;
  totalPercentage: number;
  constructorDone: boolean;
  output: {
    meeting: Meeting,
    appointments: Appointment[]
  };

  constructor(
    public dialogRef: MatDialogRef<TeacherAddMeetingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.constructorDone = false;
    this.totalPercentage = 100;
    this.separateWeekConfiguration = false;
    this.sharedAppointmentsConfig = {
      gradePercentage: null,
      attendanceRequired: false,
      isGradable: false,
      restrictTeacher: false,
      teachers: null
    };
    this.separateAppointmentsConfig = [];
    for (let i = 1; i < 15; i++) {
      this.separateAppointmentsConfig.push(
        {
          week: 'Week ' + i,
          gradePercentage: 0,
          attendanceRequired: false,
          isGradable: false,
          restrictTeacher: false,
          teachers: null,
          gradeEdited: false
        }
      );
    }
    this.separateAppointmentsConfig.push(
      {
        week: 'Primary Examination Week',
        gradePercentage: 0,
        attendanceRequired: false,
        isGradable: false,
        restrictTeacher: false,
        teachers: null,
        gradeEdited: false
      }
    );
    this.separateAppointmentsConfig.push(
      {
        week: 'Secondary Examination Week',
        gradePercentage: 0,
        attendanceRequired: false,
        isGradable: false,
        restrictTeacher: false,
        teachers: null,
        gradeEdited: false
      }
    );
    this.separateAppointmentsConfig.push(
      {
        week: 'Reexamination week',
        gradePercentage: 0,
        attendanceRequired: false,
        isGradable: false,
        restrictTeacher: false,
        teachers: null,
        gradeEdited: false
      }
    );
    this.sharedAppointmentsConfig.gradePercentage = "Not gradable";
    this.constructorDone = true;
  };


  getTotalGradePercentage(): number {
    let filteredArray = this.data.meeting.occurrencesFormControl.value
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
        let approxValue = Math.floor(ignoreAppointment.gradePercentage * 100) / 100;
        if (approxValue != ignoreAppointment.gradePercentage)
          ignoreAppointment.gradePercentage = approxValue;
      }
    }

    let isGradableAppConfigLength = this.data.meeting.occurrencesFormControl.value
      .filter(appconf => appconf.isGradable === true)
      .length;

    let editedAppConfigs = this.data.meeting.occurrencesFormControl.value
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
    this.data.meeting.occurrencesFormControl.value.forEach(appconf => {
      if (appconf.gradeEdited == false && appconf.isGradable === true) {
        appconf.gradePercentage = newValue;
      }
      totalAmount += appconf.gradePercentage;
    });
    this.totalPercentage = this.getTotalGradePercentage();
  }

  private getGradePercentage(): number {
    if (this.data.meeting.occurrencesFormControl.value == null)
      return null;
    return Math.round((100 / this.data.meeting.occurrencesFormControl.value.length) * 100) / 100;
  }


  refreshGrading() {
    if (this.sharedAppointmentsConfig.isGradable == true) {
      this.sharedAppointmentsConfig.gradePercentage = this.getGradePercentage();
    }
  }

  toggleGrading(event: MatSlideToggleChange, appointment: any) {
    if (event.checked) {
      appointment.isGradable = true;
      if (this.separateWeekConfiguration == false)
        appointment.gradePercentage = this.getGradePercentage();
      else {
        this.redistributePercentages(null);
      }
    } else {
      appointment.isGradable = false;
      appointment.gradePercentage = 0;
      this.redistributePercentages(null);
    }
  }

  toggleSeparateConfiguration(event: MatSlideToggleChange) {
    if (event.checked == true) {
      this.data.meeting.occurrencesFormControl.value.forEach(a => {
        a.attendanceRequired = this.sharedAppointmentsConfig.attendanceRequired;
        a.gradePercentage = this.sharedAppointmentsConfig.gradePercentage;
        a.isGradable = this.sharedAppointmentsConfig.isGradable;
        a.restrictTeacher = this.sharedAppointmentsConfig.restrictTeacher;
        a.teachers = this.sharedAppointmentsConfig.teachers;
      });
      this.separateWeekConfiguration = true;
    } else {
      this.separateWeekConfiguration = false;
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

  onSaveClick(): void {

    this.output = {
      meeting: null,
      appointments: null
    };

    this.output.meeting = {
      id: -1,
      type: this.data.meeting.typeFormControl.value,
      subject: this.data.meeting.subject,
      teachers: this.data.meeting.teachersFormControl.value
    };

    this.output.appointments = [];

    this.data.meeting.occurrencesFormControl.value.forEach(appData => {
      if (this.separateWeekConfiguration === true) {
        this.createAppointment(appData, appData.week)
      } else {
        this.createAppointment(this.sharedAppointmentsConfig, appData.week)
      }
    });

    console.log(this.output);
  }


  createAppointment(app, weekNumber): void {
    if (app.restrictTeacher === true ) {
      this.output.appointments.push({
        id: -1,
        weekNumber: weekNumber,
        gradePercentage: app.gradePercentage,
        attendanceRequired: app.attendanceRequired,
        isGradable: app.isGradable,
        meeting: this.output.meeting,
        responsibleTeacher: app.teachers
      });
    } else {
      this.output.meeting.teachers.forEach(teacher => {
        this.output.appointments.push({
          id: -1,
          weekNumber: weekNumber,
          gradePercentage: app.gradePercentage,
          attendanceRequired: app.attendanceRequired,
          isGradable: app.isGradable,
          meeting: this.output.meeting,
          responsibleTeacher: teacher
        });
      })
    }
  }

  canSave() {
    return this.constructorDone === true
      && this.totalPercentage <= 100.005
      && this.totalPercentage >= 99.995
      && this.data.meeting.occurrencesFormControl.value != null
      && this.data.meeting.occurrencesFormControl.value.length > 0
      && this.data.meeting.teachersFormControl.value != null
      && this.data.meeting.teachersFormControl.value.length > 0;
  }

}
