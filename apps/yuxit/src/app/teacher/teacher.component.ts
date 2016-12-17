import { TeacherService } from './../model/teacher.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  teacherId;
  teacher;
  constructor(private route: ActivatedRoute, private teacherService: TeacherService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => this.teacherId = params["id"]);
    this.teacher =  this.teacherService.getTeacher(parseInt(this.teacherId));
  }

}
