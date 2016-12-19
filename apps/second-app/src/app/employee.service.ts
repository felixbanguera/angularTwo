import { Employee } from './employee';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {
  public employees: Employee[] = [
    new Employee(1),
    new Employee(2),
    new Employee(3)
  ];
  constructor() { }

  employeesList(){
    return this.employees
  }

  getEmployee(id: number):Employee{
    return this.employees.find((employee: Employee) => employee.id == id);
  }
}
