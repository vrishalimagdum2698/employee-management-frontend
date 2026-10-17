import { Component, inject, input, signal } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-details',
  imports: [],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css',
})
export class EmployeeDetailsComponent {

  id = input.required<number>();
  private employeeService = inject(EmployeeService);
  employee = signal<Employee>(new Employee());

  ngOnInit(){
    this.employeeService.getEmployeeById(this.id()).subscribe( data=>{
      this.employee.set(data);
    })
  }
}
