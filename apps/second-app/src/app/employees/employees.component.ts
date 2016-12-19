import { EmployeeService } from './../employee.service';
import { inject } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  public employees = [];
  constructor(public myservice: EmployeeService) { }

  ngOnInit() {
    this.employees = this.myservice.employeesList();
  }



}
