import {Student} from "./Student";
import {Appointment} from "./Appointment";

export interface Situation {
  id: number;
  isPresent: boolean;
  grade: number;
  appointment: Appointment;
  student: Student;
  updated: boolean;
}





