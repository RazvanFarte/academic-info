import {Teacher} from "./Teacher";


export interface Subject {
  id: number;
  name: string;
  isOptional: boolean;
  teacher: Teacher;
}
