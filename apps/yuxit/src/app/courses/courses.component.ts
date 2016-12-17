import { CourseService } from './../model/course.service';
import { inject } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  public courses = [];
  constructor(public coursesService: CourseService) { }

  ngOnInit() {
    this.courses = this.coursesService.coursesList();
  }

}
