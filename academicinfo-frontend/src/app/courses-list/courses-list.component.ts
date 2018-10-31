import { Component, OnInit } from '@angular/core';
import {Situation} from "../shared/models/Situation";
import {Appointment} from "../shared/models/Appointment";
import {Student} from "../shared/models/Student";
import {Course} from "../shared/models/Course";
import {Meeting} from "../shared/models/Meeting";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {


  meetings: Meeting[];
  courses: Course[];
  appointments: Appointment[];
  situations: Situation[];
  value = 2;

  constructor() { }

  ngOnInit() {
    this.hardCode();
    this.meetings = this.getMeetings();
    this.courses = this.getCoursesOrdered();
  }

  getMeetingsForCourse(course: Course){
    return this.meetings.filter(m => m.course.id === course.id).length;

  }

  getCoursesOrdered(){

    let courses: Course[] = [];
    this.meetings.map(m => m.course)
      .forEach(c => {
        if (courses.findIndex(addedCouse => addedCouse.id === c.id) === -1)
          courses.push(c);
      }
    );
    return courses;
  }

  getMeetings(){
    return this.situations
      .filter(s => s.appointment.id === this.appointments[0].id )
      .map(s => s.meeting);
  }

  getSituationsForAppointment(appointment: Appointment): Situation[]{
    return this.situations.filter(s => s.appointment.id === appointment.id);
  }

  getTotalAttendances(meeting: Meeting): number {
    return this.situations.filter(s => s.meeting.id === meeting.id)
      .filter(s => s.isPresent === true )
      .length;
  }




  hardCode() {
    let week_1: Appointment = {
      id: 1,
      startDate: 'now',
      endDate: 'later',
      name: 'Week 1'
    };
    let week_2: Appointment = {
      id: 2,
      startDate: 'now',
      endDate: 'later',
      name: 'Week 2'
    };
    let week_3: Appointment = {
      id: 3,
      startDate: 'now',
      endDate: 'later',
      name: 'Week 3'
    };
    this.appointments = [week_1,week_2,week_3];

    let student_1: Student = {
      id: 1,
      name: 'Dorel',
      studyYear: 3
    };

    let course_1: Course = {
      id: 1,
      name: 'Baze',
      isOptional: false,
      isDispensable: true,
      studyYear: 1,
      studySemester: 1
    };

    let course_2: Course = {
      id: 2,
      name: 'Baze 2',
      isOptional: false,
      isDispensable: true,
      studyYear: 1,
      studySemester: 2
    };

    let meeting_1_1: Meeting = {
      id: 1,
      type: 'Laboratory',
      course: course_1
    };

    let meeting_1_2: Meeting = {
      id: 2,
      type: 'Seminar',
      course: course_1
    };

    let meeting_2_1: Meeting = {
      id: 3,
      type: 'Laboratory',
      course: course_2
    };

    let meeting_2_2: Meeting = {
      id: 4,
      type: 'Seminar',
      course: course_2
    };

    this.meetings = [meeting_1_1,meeting_1_2,meeting_2_1,meeting_2_2];

    let situation_1_w1_sem: Situation = {
      student: student_1,
      appointment: week_1,
      meeting: meeting_1_1,
      isPresent: false,
      grade: -1
    };
    let situation_1_w2_sem: Situation = {
      student: student_1,
      appointment: week_2,
      meeting: meeting_1_1,
      isPresent: false,
      grade: -1
    };
    let situation_1_w3_sem: Situation = {
      student: student_1,
      appointment: week_3,
      meeting: meeting_1_1,
      isPresent: false,
      grade: -1
    };
    let situation_1_w1_lab: Situation = {
      student: student_1,
      appointment: week_1,
      meeting: meeting_1_2,
      isPresent: false,
      grade: -1
    };
    let situation_1_w2_lab: Situation = {
      student: student_1,
      appointment: week_2,
      meeting: meeting_1_2,
      isPresent: false,
      grade: -1
    };
    let situation_1_w3_lab: Situation = {
      student: student_1,
      appointment: week_3,
      meeting: meeting_1_2,
      isPresent: false,
      grade: -1
    };


    let situation_2_w1_sem: Situation = {
      student: student_1,
      appointment: week_1,
      meeting: meeting_2_1,
      isPresent: true,
      grade: -1
    };
    let situation_2_w2_sem: Situation = {
      student: student_1,
      appointment: week_2,
      meeting: meeting_2_1,
      isPresent: true,
      grade: -1
    };
    let situation_2_w3_sem: Situation = {
      student: student_1,
      appointment: week_3,
      meeting: meeting_2_1,
      isPresent: true,
      grade: -1
    };
    let situation_2_w1_lab: Situation = {
      student: student_1,
      appointment: week_1,
      meeting: meeting_2_2,
      isPresent: true,
      grade: -1
    };
    let situation_2_w2_lab: Situation = {
      student: student_1,
      appointment: week_2,
      meeting: meeting_2_2,
      isPresent: false,
      grade: -1
    };
    let situation_2_w3_lab: Situation = {
      student: student_1,
      appointment: week_3,
      meeting: meeting_2_2,
      isPresent: false,
      grade: -1
    };

    this.situations = [situation_1_w1_lab, situation_1_w1_sem, situation_1_w2_lab, situation_1_w2_sem,
      situation_1_w3_lab, situation_1_w3_sem, situation_2_w1_lab, situation_2_w1_sem, situation_2_w2_lab,
      situation_2_w2_sem, situation_2_w3_lab, situation_2_w3_sem];

  }


}
