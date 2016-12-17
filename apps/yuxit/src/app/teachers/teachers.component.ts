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
  public sort = {sortBy: "name", direction: "up"};
  constructor(public teacherSrevice: TeacherService) { }

  ngOnInit() {
    this.teachers = this.teacherSrevice.teachersList();
    
  }

  sortData(attr: String){

  }

}
