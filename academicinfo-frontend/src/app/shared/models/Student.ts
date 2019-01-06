import {User} from "./User";

export interface Student extends User{
  group: string;
  year: number;
}
