import {Meeting} from "./Meeting";
import {Student} from "./Student";
import {Teacher} from "./Teacher";

export class Situation {
  id: number;
  weekNumber: number;
  isPresent: boolean;
  isGradable: boolean;
  grade: number;
  meeting: Meeting;
  student: Student;
  teacher: Teacher;
  updated: boolean;
}
