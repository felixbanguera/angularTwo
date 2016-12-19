import { TeacherService } from './../model/teacher.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Teacher } from '../model/teacher';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  teacherId;
  teacher = {id: null, name:"", last_name: ""};
  teacherForm: FormGroup;
  constructor(
    private route: ActivatedRoute, 
    private teacherService: TeacherService,
    private formBuilder: FormBuilder) { 

    }

  ngOnInit() {
    this.route.params.forEach((params: Params) => this.teacherId = params["id"]);
    this.teacherForm = this.formBuilder.group({
      name: "",
      last_name: ""
    }); 
    let getTeachers = this.teacherService.get(parseInt(this.teacherId))
    getTeachers.subscribe(teacher => {
      this.teacher = teacher;
      this.teacherForm = this.formBuilder.group({
        name: this.teacher.name,
        last_name: this.teacher.last_name
      }); 
    });
  }

  onSubmit(ev) {
    ev.preventDefault();
    console.info(`TeacherComponent::onSubmit >> !`, this.teacherForm.value);
    let f_v = this.teacherForm.value
    let updateTeacher = this.teacherService.update(new Teacher(this.teacher.id, f_v.name, f_v.last_name));
    updateTeacher.subscribe(data => console.info("the data after update", data));
  }

}
