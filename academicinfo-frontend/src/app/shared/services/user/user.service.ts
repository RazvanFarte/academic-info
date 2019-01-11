import {Injectable} from '@angular/core';
import {Teacher} from "../../models/Teacher";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
  }


  getAllTeachers(): Teacher[] {
    const teacher1 = {
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
    };

    const teacher2 = {
      id: 0,
      lastLogin: "2018-01-01",
      username: "popescu",
      email: "popescu@scs.ubbcluj.ro",
      firstName: "Gigel",
      lastName: "Popescu",
      userType: 1,
      faculty: "IE",
      createdAt: "2018-01-02",
      updatedAt: "2018-01-02",
    };

    return [teacher1,teacher2];
  }

  isUserTeacher(id: number): boolean {
    return true;
  }

  getCurrentLoggedInUser(): Teacher {
    const user = {
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
    };
    return user;
  }

}
