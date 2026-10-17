import { Component, inject, signal } from '@angular/core';
import { Employee } from '../employee';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  imports: [CommonModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {

  employees = signal<Employee[]>([]);
  router = inject(Router);
  private employeeService = inject(EmployeeService);

  ngOnInit() {
   this.getEmployees();
  }

  getEmployees(){
    this.employeeService.getEmployees().subscribe( data =>{
      this.employees.set(data);
    })
  }

  updateEmployee(id : number){
    localStorage.setItem("update",id.toString());
    this.router.navigate(['create-employee']);
  }

  deleteEmployee(id : number){
    this.employeeService.deleteEmployee(id).subscribe((data:any) =>{
      // if(data.Deleted){
      //   this.popup("Employee deleted successfully.");
      // }
      this.getEmployees();
    })
  }

  employeeDetails(id : number){
    this.router.navigate(['employee-details',id]);
  }
}
