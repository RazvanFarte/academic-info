import {Subject} from "./Subject";


export class Meeting {
  id: number;
  type: string;
  attendanceRequired: boolean;
  subject: Subject;
}
