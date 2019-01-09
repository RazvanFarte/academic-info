import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material";
import {IntroductionDialogComponent} from "../../shared/components/introduction-dialog/introduction-dialog.component";

@Component({
  selector: 'app-student-course-management',
  templateUrl: './student-course-management.component.html',
  styleUrls: ['./student-course-management.component.css']
})
export class StudentCourseManagementComponent implements OnInit {

  operationType: string;
  helpClicked: boolean;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
    this.operationType = 'none';
    this.helpClicked = false;
  }

  getSidenavClass() {
    if (this.helpClicked === false)
      return 'example-sidenav';
    return 'sidenav-hover-simulate';
  }

  getSidenavButtonClass() {
    if (this.helpClicked === false)
      return 'sidenav-button';
    return 'sidenav-button-simulate';
  }

  openDialog(): void {
    this.helpClicked = true;
    const dialogRef = this.dialog.open(IntroductionDialogComponent, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.helpClicked = false;
    });
  }
}
