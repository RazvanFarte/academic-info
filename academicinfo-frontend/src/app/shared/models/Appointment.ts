import {Teacher} from "./Teacher";
import {Meeting} from "./Meeting";


  export interface Appointment {
    id: number;
    weekNumber: number;
    gradePercentage: number;
    attendanceRequired: boolean;
    isGradable: boolean;
    meeting: Meeting;
    responsibleTeacher: Teacher;
  }
