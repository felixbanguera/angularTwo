import { Course } from './course';
import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {
  public courses: Course[] = [
    new Course(1, "ANgular2", 
      {formatted:"2016-01-01"}, 
      32, "Juancho"),
    new Course(2, "Rails", 
    {formatted:"2016-08-01"},
    32, "Felix ;P")
  ];

  constructor() { }

  coursesList(){
    return this.courses;
  }

  getCourse(id: number):Course{
    return this.courses.find((course: Course) => course.id == id);
  }

}