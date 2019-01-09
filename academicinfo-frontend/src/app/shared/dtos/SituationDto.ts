
export interface SituationDto {
  id: number;
  weekNumber: number;
  isPresent: boolean;
  isGradable: boolean;
  grade: number;
  gradePercentage: number;
  meeting_id: number;
  student_id: number;
  teacher_id: number;
}
