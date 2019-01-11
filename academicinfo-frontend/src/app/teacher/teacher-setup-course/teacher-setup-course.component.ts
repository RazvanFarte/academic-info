import { Component, OnInit } from '@angular/core';
import {CourseService} from "../../shared/services/course/course.service";
import {Subject} from "../../shared/models/Subject";
import {FormControl} from "@angular/forms";
import {UserService} from "../../shared/services/user/user.service";
import {Teacher} from "../../shared/models/Teacher";

@Component({
  selector: 'app-teacher-setup-course',
  templateUrl: './teacher-setup-course.component.html',
  styleUrls: ['./teacher-setup-course.component.css']
})
export class TeacherSetupCourseComponent implements OnInit {

  public possibleSubjects: Subject[];

  private loggedUser: Teacher;

  public selectedSubject: Subject;
  public selectedNumberOfWeeks: number;

  constructor(
    private courseService: CourseService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.loggedUser = this.userService.getCurrentLoggedInUser();
    this.possibleSubjects = this.courseService.getSubjects(this.loggedUser);
  }



}
