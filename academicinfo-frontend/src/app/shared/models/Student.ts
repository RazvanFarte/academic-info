import {User} from "./User";

export interface Student extends User{
  id: number;
  lastLogin: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  userType: number;
  faculty: string;
  createdAt: string;
  updatedAt: string;
  group: string;
  year: number;
}
