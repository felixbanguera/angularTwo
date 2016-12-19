import { OrderbyPipe } from './../shared/orderby.pipe';
import { TeacherService } from './../model/teacher.service';
import { inject } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  public teachers = [];
  public teachersToPrint = [];
  public variableH = '-name';
  constructor(public teacherSrevice: TeacherService) { }

  ngOnInit() {
    this.teacherSrevice.getTeachers()
    .subscribe(teachers => this.teachers = teachers);
  }

}
