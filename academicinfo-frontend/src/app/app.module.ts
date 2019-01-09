import {BrowserModule} from '@angular/platform-browser';
import {Injectable, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {CommunicationComponent} from './communication/communication.component';
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
import { SituationTableComponent } from './situation-table/situation-table.component';
import { TeacherSituationComponent } from './teacher-situation/teacher-situation.component';
import {
  IntroductionDialog,
  TeacherCourseManagementComponent
} from './teacher-course-management/teacher-course-management.component';
import { TeacherAddCourseComponent } from './teacher-add-course/teacher-add-course.component';
import { TeacherEditCourseComponent } from './teacher-edit-course/teacher-edit-course.component';
import {MaterialModule} from "./modules/material/material.module";




const appRoutes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/login'
  },
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'situations', component: TeacherSituationComponent
  },
  {
    path: 'courses-management', component: TeacherCourseManagementComponent
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
    IntroductionDialog,
    TeacherEditCourseComponent
  ],
  entryComponents: [
    IntroductionDialog
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

