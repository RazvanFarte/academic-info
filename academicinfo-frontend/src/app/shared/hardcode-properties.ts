import {Teacher} from "./models/Teacher";
import {Student} from "./models/Student";
import {Subject} from "./models/Subject";


export const teacher_DOREL: Teacher = {
    user: {
      id: 0,
      lastLogin: '2018-02-03',
      username: 'tdorel',
      email: 'tdorel@cs.ubbcluj.ro',
      firstName: 'Dorel',
      lastName: 'Dorel',
      userType: 2,
      faculty: 'UBB Mate-Info',
      createdAt: '2018-03-03',
      updatedAt: '2018-03-02',
    }
};

export const teacher_GIGEL: Teacher = {
  user: {
    id: 1,
    lastLogin: '2018-02-03',
    username: 'tgigel',
    email: 'tgigell@cs.ubbcluj.ro',
    firstName: 'Gigel',
    lastName: 'Gigel',
    userType: 2,
    faculty: 'UBB Mate-Info',
    createdAt: '2018-03-03',
    updatedAt: '2018-03-02',
  }
};

export const student_DOREL: Student = {
  user: {
    id: 3,
    lastLogin: '2018-02-03',
    username: 'sdorel',
    email: 'sdorel@scs.ubbcluj.ro',
    firstName: 'Dorel',
    lastName: 'Dorel',
    userType: 2,
    faculty: 'UBB Mate-Info',
    createdAt: '2018-03-03',
    updatedAt: '2018-03-02',
  },
  group: '923',
  year: 2
};

export const student_GIGEL: Student = {
  user: {
    id: 4,
    lastLogin: '2018-02-03',
    username: 'sgigel',
    email: 'sgigel@scs.ubbcluj.ro',
    firstName: 'gigel',
    lastName: 'gigel',
    userType: 2,
    faculty: 'UBB Mate-Info',
    createdAt: '2018-03-03',
    updatedAt: '2018-03-02',
  },
  group: '924',
  year: 2
};
