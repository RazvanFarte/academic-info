import {Subject} from "./Subject";
import {Teacher} from "./Teacher";


export class Meeting {
  id: number;
  type: string;
  attendanceRequired: boolean;
  subject: Subject;
  teachers: Teacher[];
}
