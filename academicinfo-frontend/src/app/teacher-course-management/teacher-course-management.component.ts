import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";
@Component({
  selector: 'app-teacher-course-management',
  templateUrl: './teacher-course-management.component.html',
  styleUrls: ['./teacher-course-management.component.css']
})
export class TeacherCourseManagementComponent implements OnInit {


  operationType: string;
  helpClicked: boolean;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
    this.operationType = 'none';
    this.helpClicked = false;
  }

  getSidenavClass() {
    if( this.helpClicked === false)
      return 'example-sidenav';
    return 'sidenav-hover-simulate';
  }

  getSidenavButtonClass(){
    if( this.helpClicked === false)
      return 'sidenav-button';
    return 'sidenav-button-simulate';
  }

  openDialog(): void {
    this.helpClicked = true;
    const dialogRef = this.dialog.open(IntroductionDialog, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.helpClicked = false;
    });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'teacher-course-management-help.html',
})
export class IntroductionDialog {

  constructor(
    public dialogRef: MatDialogRef<IntroductionDialog>) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
