
export interface MeetingDto {
  id: number;
  type: string;
  attendanceRequired: boolean;
  subject_id: number;
  teachers: number[];
}
