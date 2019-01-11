import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Meeting} from "../../shared/models/Meeting";
import {UserService} from "../../shared/services/user/user.service";
import {CourseService} from "../../shared/services/course/course.service";
import {MatSnackBar} from "@angular/material";
import {Subject} from "../../shared/models/Subject";

@Component({
  selector: 'app-teacher-edit-course',
  templateUrl: './teacher-edit-course.component.html',
  styleUrls: ['./teacher-edit-course.component.css']
})
export class TeacherEditCourseComponent implements OnInit {


  constructor(
    private _formBuilder: FormBuilder,
    private userService: UserService,
    private courseService: CourseService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
  }

}
