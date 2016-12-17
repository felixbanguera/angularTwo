import { TeacherService } from './model/teacher.service';
import { CourseService } from './model/course.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TeachersComponent } from './teachers/teachers.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    TeachersComponent,
    TeacherComponent,
    CoursesComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: "courses/:id",
        component: CourseComponent
      },
      {
        path: "courses",
        component: CoursesComponent
      },
      {
        path: "teachers/:id",
        component: TeacherComponent
      },
      {
        path: "teachers",
        component: TeachersComponent
      }/*,
      {
        path: '',
        redirectTo: 'courses',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'courses',
        pathMatch: 'full'
      }*/
    ])
  ],
  providers: [CourseService, TeacherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
