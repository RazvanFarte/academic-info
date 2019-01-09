import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-introduction-dialog',
  templateUrl: './introduction-dialog.component.html',
  styleUrls: ['./introduction-dialog.component.css']
})
export class IntroductionDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<IntroductionDialogComponent>
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
