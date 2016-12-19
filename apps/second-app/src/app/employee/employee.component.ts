import { EmployeeService } from './../employee.service';
import { Employee } from './../employee';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  //@Input() employee: Employee;
  employeeId;
  employee;
  constructor(
    private route: ActivatedRoute, 
    private myservice: EmployeeService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) =>
      this.employeeId = params["id"]);
    this.employee =  this.myservice.getEmployee(parseInt(this.employeeId));
  }

}
