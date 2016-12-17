import { CourseService } from './../model/course.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courseId;
  course;
  constructor(private route: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => this.courseId = params["id"]);
    this.course =  this.courseService.getCourse(parseInt(this.courseId));
  }

}
