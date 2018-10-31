import {Appointment} from "./Appointment";
import {Meeting} from "./Meeting";
import {Student} from "./Student";

export class Situation {
  student: Student;
  appointment: Appointment;
  meeting: Meeting;
  isPresent: boolean;
  grade: number;
}
