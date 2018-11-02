import {Component, OnInit} from '@angular/core';
import {Situation} from "../shared/models/Situation";
import {Appointment} from "../shared/models/Appointment";
import {Course} from "../shared/models/Course";
import {Meeting} from "../shared/models/Meeting";

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

  constructor() {
  }

  ngOnInit() {
    this.hardCode();
    this.appointments = this.getAppointmentsOrdered()
    this.meetings = this.getMeetingsOrdered();
    this.courses = this.getCoursesOrdered();
    console.log(this.courses);
  }

  getAppointmentsOrdered() {
    let appointments: Appointment[] = [];
    this.situations
      .map(s => s.appointment)
      .forEach(a => {
          if (appointments.findIndex(addedAppointment => addedAppointment.id === a.id) === -1)
            appointments.push(a);
        }
      );
    return appointments;
  }

  getMeetingCountForCourse(course: Course) {
    return this.meetings.filter(m => m.course.id === course.id).length;
  }


  getSituationFor(meeting: Meeting, week: Appointment): Situation {

    let situations = this.situations.filter(s => s.meeting.id === meeting.id)
      .filter(s => s.appointment.id === week.id);

    if ((!situations) || situations.length != 1 || (!situations[0])) {
      return null;
    }
    return situations.pop();
  }


  getCoursesOrdered() {
    let courses: Course[] = [];
    this.meetings
      .map(m => m.course)
      .forEach(c => {
          if (courses.findIndex(addedCourse => addedCourse.id === c.id) === -1)
            courses.push(c);
        }
      );
    return courses;
  }

  getMeetingsOrdered() {
    return this.situations
      .sort((s1, s2) => s1.meeting.id - s2.meeting.id)
      .filter(s => s.appointment.id === this.appointments[0].id)
      .map(s => s.meeting);
  }


  getTotalAttendances(meeting: Meeting): number {
    return this.situations.filter(s => s.meeting.id === meeting.id)
      .filter(s => s.isPresent === true)
      .length;
  }

  getRequiredAttendances(meeting: Meeting): number {
    return this.situations.filter(s => s.meeting.id === meeting.id)
      .length;
  }


  hardCode() {
    let course_baze: Course = {
      id: 1,
      name: 'Baze de date',
      isOptional: false,
      isDispensable: false,
      studyYear: 1,
      studySemester: 1
    };
    let course_map: Course = {
      id: 1,
      name: 'Metode avansate de programare',
      isOptional: false,
      isDispensable: false,
      studyYear: 1,
      studySemester: 1
    };
    let course_mpp: Course = {
      id: 1,
      name: 'Medii de proiectare si programare',
      isOptional: false,
      isDispensable: false,
      studyYear: 1,
      studySemester: 1
    };
    let course_plf: Course = {
      id: 1,
      name: 'Programare logica si functionala',
      isOptional: false,
      isDispensable: false,
      studyYear: 1,
      studySemester: 1
    };
    let course_fp: Course = {
      id: 1,
      name: 'Fundamentele programarii',
      isOptional: false,
      isDispensable: false,
      studyYear: 1,
      studySemester: 1
    };
    let course_sport: Course = {
      id: 1,
      name: 'Sport',
      isOptional: false,
      isDispensable: false,
      studyYear: 1,
      studySemester: 1
    };
    let courses = [course_baze, course_fp, course_map, course_mpp, course_plf, course_sport];
    this.situations = [];

    for (let i = 1; i < 15; i++) {
      let week: Appointment = {
        id: i,
        startDate: 'now',
        endDate: 'later',
        name: 'Week ' + i
      };

      for (let j = 1; j < 18; j++) {
        let type = j % 3 == 0 ? 'Seminar' :
          (j % 3 == 1 ? 'Laboratory' : 'Workshop');
        let meeting: Meeting = {
          id: j,
          type: type,
          course: courses[j % 6]
        };
        let situation: Situation = {
          student: null,
          appointment: week,
          meeting: meeting,
          isPresent: ( Math.floor(Math.random() * 10) % 2  ) === 0,
          grade: j % 10
        };
        if(Math.floor(Math.random() * 10) % 5 !== 0 ) {
          this.situations.push(situation);
        }

      }


    }
  }


}
