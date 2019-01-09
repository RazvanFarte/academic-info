import {BrowserModule} from '@angular/platform-browser';
import {Injectable, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {ActivatedRouteSnapshot, CanActivate, RouterModule, RouterStateSnapshot, Routes, UrlTree} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RecaptchaModule} from 'ng-recaptcha';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import {ToastrModule} from 'ngx-toastr';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from "./modules/material/material.module";
import { StudentCourseManagementComponent } from './student/student-course-management/student-course-management.component';
import { StudentSituationComponent } from './student/student-situation/student-situation.component';
import {TeacherSituationComponent} from "./teacher/teacher-situation/teacher-situation.component";
import {TeacherCourseManagementComponent} from "./teacher/teacher-course-management/teacher-course-management.component";
import {CommunicationComponent} from "./shared/components/communication/communication.component";
import {SituationTableComponent} from "./shared/components/situation-table/situation-table.component";
import {TeacherEditCourseComponent} from "./teacher/teacher-edit-course/teacher-edit-course.component";
import {TeacherAddCourseComponent} from "./teacher/teacher-add-course/teacher-add-course.component";
import { IntroductionDialogComponent } from './shared/components/introduction-dialog/introduction-dialog.component';




const appRoutes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/login'
  },
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'teacher', component: TeacherCourseManagementComponent
  },
  {
    path: 'student', component: StudentCourseManagementComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CommunicationComponent,
    SituationTableComponent,
    TeacherSituationComponent,
    TeacherCourseManagementComponent,
    TeacherAddCourseComponent,
    TeacherEditCourseComponent,
    StudentCourseManagementComponent,
    StudentSituationComponent,
    IntroductionDialogComponent
  ],
  entryComponents: [
    IntroductionDialogComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      enableHtml: true,
      progressBar: true,
      progressAnimation: 'decreasing',
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

