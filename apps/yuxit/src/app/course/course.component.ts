import { CourseService } from './../model/course.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courseId;
  course;
  courseForm: FormGroup;
  constructor(
    private route: ActivatedRoute, 
    private courseService: CourseService,
    private formBuilder: FormBuilder) {

     }

  ngOnInit() {
    this.route.params.forEach((params: Params) => this.courseId = params["id"]);
    this.course =  this.courseService.getCourse(parseInt(this.courseId));
    this.courseForm = this.formBuilder.group({
      name: this.course.name,
      starting_date: this.course.starting_date,
      duration: this.course.duration,
      teacher: this.course.teacher
    }); 
  }

  onSubmit() {
    console.info(`CourseComponent::onSubmit >> !`, this.courseForm.value)
  }

}
