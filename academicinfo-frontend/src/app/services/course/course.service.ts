import {Injectable} from '@angular/core';
import {Meeting} from "../../shared/models/Meeting";
import {Situation} from "../../shared/models/Situation";
import {Teacher} from "../../shared/models/Teacher";
import {Subject} from "../../shared/models/Subject";
import {User} from "../../shared/models/User";
import {Student} from "../../shared/models/Student";
import {Observable} from "rxjs";
import {StudentBackend} from "../../shared/models/student-backend";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private subjects: Subject[];
  private meetings: Meeting[];
  private situations: Situation[];
  private students: Student[];
  private initialized: boolean = false;

  constructor(private http: HttpClient) {
    if (this.initialized === true)
      return;

    this.initialized = true;
    this.subjects = [];
    this.meetings = [];
    this.situations = [];
    this.students = [];

    this.students = this.getStudents();


    const teacher: Teacher = {
      user: {
        id: 0,
        lastLogin: "2018-01-01",
        username: "popescu",
        email: "popescu@scs.ubbcluj.ro",
        firstName: "Ion",
        lastName: "Popescu",
        userType: 1,
        faculty: "IE",
        createdAt: "2018-01-02",
        updatedAt: "2018-01-02",
      }
    };


    const subject: Subject = {
      id: 0,
      name: "LFTC",
      isOptional: false,
      teacher: teacher
    };

    const subjectNames = [
      'Limbaje formale si tehnici de compilare',
      'Programare paralela si distribuita',
      'Proiect colectiv',
      'Ingineria sistemelor soft',
      'Medii de proiectare si programare',
      'Securitate software',
      'Prelucrarea datelor audio-video',
    ];

    for (let i = 0; i < 7; i++) {
      let subject: Subject = {
        id: i,
        name: subjectNames[i],
        isOptional: i % 5 === 4,
        teacher: teacher
      };
      this.subjects.push(subject);
      let meeting_1: Meeting = {
        id: i * 10,
        type: "Seminar",
        attendanceRequired: (Math.floor(Math.random() * 10 % 2) > 0),
        subject: subject
      };
      let meeting_2: Meeting = {
        id: i * 10 + 1,
        type: "Laboratory",
        attendanceRequired: (Math.floor(Math.random() * 10 % 2) > 0),
        subject: subject
      };
      this.meetings.push(meeting_1, meeting_2);
    }

    let currentId = 0;
    for (let i = 0; i < this.students.length; i++) {
      for (let j = 0; j < this.meetings.length; j++) {
        for (let k = 0; k < 10; k++) {
          let situation: Situation = {
            id: currentId,
            weekNumber: k,
            isPresent: (Math.floor(Math.random() * 10 % 2) > 0),
            isGradable: (Math.floor(Math.random() * 10 % 2) > 0),
            grade: Math.floor(Math.random() * 10 % 10) + 1,
            meeting: this.meetings[j],
            student: this.students[i],
            updated: false,
            teacher: teacher
          };
          currentId += 1;
          this.situations.push(situation);
        }
      }
    }
  }


  getSituationsSorted(meeting: Meeting, weekNumber: number): Situation[] {
    if (!meeting || !weekNumber) {
      console.log(this.situations.length);
      return this.situations;
    }

    return this.situations.filter(s => s.meeting.id === meeting.id && s.weekNumber === weekNumber)
      .sort((s1, s2) => s1.student.user.lastName > s2.student.user.lastName ? 1 : -1);
  }

  getMeetings(subject
                :
                Subject
  ):
    Meeting[] {
    return this.meetings.filter(m => m.subject.id === subject.id);
  }

  getSubjects(teacher
                :
                Teacher
  ) {
    return this.subjects.filter(s => s.teacher.user.id === teacher.user.id);
  }

  saveSituations(situations
                   :
                   Situation[]
  ) {
    this.situations = situations;
  }

  getStudents(): Student[] {
    let studentsBackend: StudentBackend[];
    this.getStudentsBackend().subscribe(data => studentsBackend = data,  error => console.log(error));

    let students: Student[];
    students = studentsBackend.map(student => this.mapStudentBackendToFrontend(student));

    return students;
  }

  getStudentsBackend(): Observable<StudentBackend[]> {
    return this.http.get<StudentBackend[]>('http://bechend.azurewebsites.net/api/student');
  }

  mapStudentBackendToFrontend(student: StudentBackend): Student {
    let user: User = {
      id: student.$id,
      lastLogin: "2018-01-01",
      username: "TODO-ADDUSERNAMEBACKEND",
      email: student.Email,
      firstName: student.FirstName,
      lastName: student.LastName,
      userType: 1,
      faculty: "IE",
      createdAt: "2018-01-02",
      updatedAt: "2018-01-02"
    };
    let studentFront: Student = {
      user : user,
      group: 'THIS IS THE GROUP ID' + student.GroupID,
      year: student.GroupID
    };
    return studentFront;
  }

}
