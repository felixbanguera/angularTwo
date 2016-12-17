import { Teacher } from './teacher';
import { Injectable } from '@angular/core';

@Injectable()
export class TeacherService {
  public teachers: Teacher[] = [
    new Teacher(1, "Juancho", "Herrera"),
    new Teacher(2, "Felix", "Banguera")
  ]

  constructor() { }

  teachersList(){
    return this.teachers;
  }

  getTeacher(id: number):Teacher{
    return this.teachers.find((teacher: Teacher) => teacher.id == id);
  }

}