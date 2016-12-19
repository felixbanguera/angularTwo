import { TeacherService } from './model/teacher.service';
import { CourseService } from './model/course.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { DatePickerModule } from 'ng2-datepicker';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './fake-web-api.service';


import { AppComponent } from './app.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TeachersComponent } from './teachers/teachers.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { OrderbyPipe } from './shared/orderby.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TeachersComponent,
    TeacherComponent,
    CoursesComponent,
    CourseComponent,
    OrderbyPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    DatePickerModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
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
      }
    ])
  ],
  providers: [CourseService, TeacherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
