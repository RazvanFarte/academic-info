import {UserDto} from "./UserDto";
import {User} from "../models/User";
import {TeacherDto} from "./TeacherDto";
import {Teacher} from "../models/Teacher";
import {SubjectDto} from "./SubjectDto";
import {Subject} from "../models/Subject";
import {Student} from "../models/Student";
import {StudentDto} from "./StudentDto";
import {Meeting} from "../models/Meeting";
import {MeetingDto} from "./MeetingDto";
import {Situation} from "../models/Situation";
import {SituationDto} from "./SituationDto";


export class Converter {


  public static userToDto(user: User): UserDto {
    return user;
  }

  public static userFromDto(userDto: UserDto): User {
    return userDto;
  }

  public static teacherToDto(teacher: Teacher): TeacherDto {
    return teacher;
  }

  public static teacherFromDto(teacherDto: TeacherDto): Teacher {
    return teacherDto;
  }

  public static studentToDto(student: Student): StudentDto {
    return student;
  }

  public static studentFromDto(studentDto: StudentDto): Student {
    return studentDto;
  }

  public static subjectToDto(subject: Subject) {
    return {
      id: subject.id,
      name: subject.name,
      isOptional: subject.isOptional,
      teacher_id: subject.teacher.id
    }
  }

  public static subjectFromDto(subjectDto: SubjectDto, teacherDto: TeacherDto) {
    return {
      id: subjectDto.id,
      name: subjectDto.name,
      isOptional: subjectDto.isOptional,
      teacher: teacherDto
    }
  }

  public static meetingToDto(meeting: Meeting): MeetingDto {
    return {
      id: meeting.id,
      type: meeting.type,
      attendanceRequired: meeting.attendanceRequired,
      subject_id: meeting.subject.id,
      teachers: meeting.teachers.map(t => t.id)
    }
  }

  public static meetingFromDto(meetingDto: MeetingDto, subjectDto: SubjectDto, subjTeacherDto: TeacherDto, teacherDtos: TeacherDto[]): Meeting{
    return {
      id: meetingDto.id,
      type: meetingDto.type,
      attendanceRequired: meetingDto.attendanceRequired,
      subject: this.subjectFromDto(subjectDto,subjTeacherDto),
      teachers: teacherDtos
    }
  }

  public static situationToDto(situation: Situation): SituationDto {
    return {
      id: situation.id,
      weekNumber: situation.weekNumber,
      isPresent: situation.isPresent,
      isGradable: situation.isGradable,
      grade: situation.grade,
      gradePercentage: situation.gradePercentage,
      meeting_id: situation.meeting.id,
      student_id: situation.student.id,
      teacher_id: situation.teacher.id
    };
  }

  public static situationFromDto(
    situationDto: SituationDto,
    meetingDto: MeetingDto,
    subjectDto: SubjectDto,
    subjTeacherDto: TeacherDto,
    meetingTeacherDtos: TeacherDto[],
    studentDto: StudentDto,
    situationTeacherDto: TeacherDto
    )
  {
    return {
      id: situationDto.id,
      weekNumber: situationDto.weekNumber,
      isPresent: situationDto.isPresent,
      isGradable: situationDto.isGradable,
      grade: situationDto.grade,
      gradePercentage: situationDto.gradePercentage,
      meeting: this.meetingFromDto(meetingDto,subjectDto,subjTeacherDto,meetingTeacherDtos),
      student: this.studentFromDto(studentDto),
      teacher: situationTeacherDto
    }
  }
}
