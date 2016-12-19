import { Teacher } from './teacher';
import { Observable, Operator } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http'

@Injectable()
export class TeacherService {
  /*public teachers: Teacher[] = [
    new Teacher(1, "Juancho", "Herrera"),
    new Teacher(2, "Felix", "Banguera")
  ]*/

  private teachersUrl = 'api/teachers';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getTeachers(): Observable<Teacher[]> {
      return this.http.get(this.teachersUrl)
          .map((r: Response) => r.json().data as Teacher[])
  }

  getTeachersByName(name: string): Observable<Teacher[]> {
      const url = `${this.teachersUrl}?name=${name}`;
      return this.http.get(url)
          .map((r: Response) => r.json().data as Teacher[])
  }

  get(id: number): Observable<Teacher> {
      const url = `${this.teachersUrl}/${id}`;
      return this.http.get(url)
          .map((r: Response) => r.json().data as Teacher)
  }

  delete(id: number): Observable<boolean> {
      const url = `${this.teachersUrl}/${id}`;
      return this.http.delete(url, { headers: this.headers })
          .map((r: Response) => r.ok)
  }

  create(teacher: Teacher): Observable<Teacher> {
      return this.http
          .post(this.teachersUrl, JSON.stringify(teacher), { headers: this.headers })
          .map(res => res.json().data as Teacher)
  }

  update(teacher: Teacher): Observable<Teacher> {
      const url = `${this.teachersUrl}/${teacher.id}`;
      return this.http
          .put(url, JSON.stringify(teacher), { headers: this.headers })
          .map(() => teacher)
  }

  /*teachersList(){
    return this.teachers;
  }

  getTeacher(id: number):Teacher{
    return this.teachers.find((teacher: Teacher) => teacher.id == id);
  }*/

}