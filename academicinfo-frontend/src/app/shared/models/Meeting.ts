import {Subject} from "./Subject";
import {Teacher} from "./Teacher";


export interface Meeting {
  id: number;
  type: string;
  subject: Subject;
  teachers: Teacher[];
}
