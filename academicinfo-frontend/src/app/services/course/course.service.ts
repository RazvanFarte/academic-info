import {Injectable} from '@angular/core';
import {Meeting} from "../../shared/models/Meeting";
import {Situation} from "../../shared/models/Situation";
import {Teacher} from "../../shared/models/Teacher";
import {Subject} from "../../shared/models/Subject";
import {User} from "../../shared/models/User";
import {Student} from "../../shared/models/Student";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private subjects: Subject[];
  private meetings: Meeting[];
  private situations: Situation[];
  private students: Student[];
  private initialized: boolean = false;

  constructor() {
    if (this.initialized === true)
      return;

    this.initialized = true;
    this.subjects = [];
    this.meetings = [];
    this.situations = [];
    this.students = [];

    let names: string[] = [
      "Aaren"
      ,
      "Aarika"
      ,
      "Abagael"
      ,
      "Abagail"
      ,
      "Abbe"
      ,
      "Abbey"
      ,
      "Abbi"
      ,
      "Abbie"
      ,
      "Abby"
      ,
      "Abbye"
      ,
      "Abigael"
      ,
      "Abigail"
      ,
      "Abigale"
      ,
      "Abra"
      ,
      "Ada"
      ,
      "Adah"
      ,
      "Adaline"
      ,
      "Adan"
      ,
      "Adara"
      ,
      "Adda"
      ,
      "Addi"
      ,
      "Addia"
      ,
      "Addie"
      ,
      "Addy"
      ,
      "Adel"
      ,
      "Adela"
      ,
      "Adelaida"
      ,
      "Adelaide"
      ,
      "Adele"
      ,
      "Adelheid"
      ,
      "Adelice"
      ,
      "Adelina"
      ,
      "Adelind"
      ,
      "Adeline"
      ,
      "Adella"
      ,
      "Adelle"
      ,
      "Adena"
      ,
      "Adey"
      ,
      "Adi"
      ,
      "Adiana"
      ,
      "Adina"
      ,
      "Adora"
      ,
      "Adore"
      ,
      "Adoree"
      ,
      "Adorne"
      ,
      "Adrea"
      ,
      "Adria"
      ,
      "Adriaens"
      ,
      "Adrian"
      ,
      "Adriana"
      ,
      "Adriane"
      ,
      "Adrianna"
      ,
      "Adrianne"
      ,
      "Adriena"
      ,
      "Adrienne"
      ,
      "Aeriel"
      ,
      "Aeriela"
      ,
      "Aeriell"
      ,
      "Afton"
      ,
      "Ag"
      ,
      "Agace"
      ,
      "Agata"
      ,
      "Agatha"
      ,
      "Agathe"
      ,
      "Aggi"
      ,
      "Aggie"
      ,
      "Aggy"
      ,
      "Agna"
      ,
      "Agnella"
      ,
      "Agnes"
      ,
      "Agnese"
      ,
      "Agnesse"
      ,
      "Agneta"
      ,
      "Agnola"
      ,
      "Agretha"
      ,
      "Aida"
      ,
      "Aidan"
      ,
      "Aigneis"
      ,
      "Aila"
      ,
      "Aile"
      ,
      "Ailee"
      ,
      "Aileen"
      ,
      "Ailene"
      ,
      "Ailey"
      ,
      "Aili"
      ,
      "Ailina"
      ,
      "Ailis"
      ,
      "Ailsun"
      ,
      "Ailyn"
      ,
      "Aime"
      ,
      "Aimee"
      ,
      "Aimil"
      ,
      "Aindrea"
      ,
      "Ainslee"
      ,
      "Ainsley"
      ,
      "Ainslie"
      ,
      "Ajay"
      ,
      "Alaine"
      ,
      "Alameda"
      ,
      "Alana"
      ,
      "Alanah"
      ,
      "Alane"
      ,
      "Alanna"
      ,
      "Alayne"
      ,
      "Alberta"
      ,
      "Albertina"
      ,
      "Albertine"
      ,
      "Albina"
      ,
      "Alecia"
      ,
      "Aleda"
      ,
      "Aleece"
      ,
      "Aleen"
      ,
      "Alejandra"
      ,
      "Alejandrina"
      ,
      "Alena"
      ,
      "Alene"
      ,
      "Alessandra"
      ,
      "Aleta"
      ,
      "Alethea"
      ,
      "Alex"
      ,
      "Alexa"
      ,
      "Alexandra"
      ,
      "Alexandrina"
      ,
      "Alexi"
      ,
      "Alexia"
      ,
      "Alexina"
      ,
      "Alexine"
      ,
      "Alexis"
      ,
      "Alfi"
      ,
      "Alfie"
      ,
      "Alfreda"
      ,
      "Alfy"
      ,
      "Ali"
      ,
      "Alia"
      ,
      "Alica"
      ,
      "Alice"
      ,
      "Alicea"
      ,
      "Alicia"
      ,
      "Alida"
      ,
      "Alidia"
      ,
      "Alie"
      ,
      "Alika"
      ,
      "Alikee"
      ,
      "Alina"
      ,
      "Aline"
      ,
      "Alis"
      ,
      "Alisa"
      ,
      "Alisha"
      ,
      "Alison"
      ,
      "Alissa"
      ,
      "Alisun"
      ,
      "Alix"
      ,
      "Aliza"
      ,
      "Alla"
      ,
      "Alleen"
      ,
      "Allegra"
      ,
      "Allene"
      ,
      "Alli"
      ,
      "Allianora"
      ,
      "Allie"
      ,
      "Allina"
      ,
      "Allis"
      ,
      "Allison"
      ,
      "Allissa"
      ,
      "Allix"
      ,
      "Allsun"
      ,
      "Allx"
      ,
      "Ally"
      ,
      "Allyce"
      ,
      "Allyn"
      ,
      "Allys"
      ,
      "Allyson"
      ,
      "Alma"
      ,
      "Almeda"
      ,
      "Almeria"
      ,
      "Almeta"
      ,
      "Almira"
      ,
      "Almire"
      ,
      "Aloise"
      ,
      "Aloisia"
      ,
      "Aloysia"
      ,
      "Alta"
      ,
      "Althea"
      ,
      "Alvera"
      ,
      "Alverta"
      ,
      "Alvina"
      ,
      "Alvinia"
      ,
      "Alvira"
      ,
      "Alyce"
      ,
      "Alyda"
      ,
      "Alys"
      ,
      "Alysa"
      ,
      "Alyse"
      ,
      "Alysia"
      ,
      "Alyson"
      ,
      "Alyss"
      ,
      "Alyssa"
      ,
      "Amabel"
      ,
      "Amabelle"
      ,
      "Amalea"
      ,
      "Amalee"
      ,
      "Amaleta"
      ,
      "Amalia"
      ,
      "Amalie"
      ,
      "Amalita"
      ,
      "Amalle"
      ,
      "Amanda"
      ,
      "Amandi"
      ,
      "Amandie"
      ,
      "Amandy"
      ,
      "Amara"
      ,
      "Amargo"
      ,
      "Amata"
      ,
      "Amber"
      ,
      "Amberly"
      ,
      "Ambur"
      ,
      "Ame"
      ,
      "Amelia"
    ];

    for (let i = 0; i < 30; i++) {
      const student: Student = {
        id: i,
        lastLogin: "2018-01-01",
        username: "username" + i,
        email: i + "@scs.ubbcluj.ro",
        firstName: names[Math.floor(Math.random() * 100 % names.length)],
        lastName: names[Math.floor(Math.random() * 100 % names.length)],
        userType: 1,
        faculty: "IE",
        createdAt: "2018-01-02",
        updatedAt: "2018-01-02",
        group: "" + (i % 5 + 1),
        year: i % 3 + 1
      };
      this.students.push(student);
    }


    const teacher: Teacher = {
        id: 0,
        lastLogin: "2018-01-01",
        username: "popescu",
        email: "popescu@scs.ubbcluj.ro",
        firstName: "Ion",
        lastName: "Popescu",
        userType: 1,
        faculty: "IE",
        createdAt: "2018-01-02",
        updatedAt: "2018-01-02"
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
        subject: subject,
        teachers: [teacher]
      };
      let meeting_2: Meeting = {
        id: i * 10 + 1,
        type: "Laboratory",
        attendanceRequired: (Math.floor(Math.random() * 10 % 2) > 0),
        subject: subject,
        teachers: [teacher]
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
      .sort((s1, s2) => s1.student.lastName > s2.student.lastName ? 1 : -1);
  }

  getMeetings(subject: Subject):
    Meeting[] {
    return this.meetings.filter(m => m.subject.id === subject.id);
  }

  getSubjects(teacher: Teacher) {
    return this.subjects.filter(s => s.teacher.id === teacher.id);
  }

  saveSituations(situations: Situation[]) {
    this.situations = situations;
  }


}
