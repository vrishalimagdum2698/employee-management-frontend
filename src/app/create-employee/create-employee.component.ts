import { Component, inject, signal } from '@angular/core';
import { Employee } from '../employee';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-employee',
  imports: [FormsModule],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css',
})
export class CreateEmployeeComponent {

  employee = signal<Employee>(new Employee());
  private employeeService = inject(EmployeeService);
  private router = inject(Router);
  update = signal(false);
  id = signal(0);

  ngOnInit() {
    localStorage.getItem("update") ? this.update.set(true) : this.update.set(false);

    if(this.update()){
      this.id.set(Number(localStorage.getItem("update")));
      this.getEmployeeById(this.id());
    }
  }

  onSubmit(){
    this.employeeService.createEmployee(this.employee()).subscribe( data =>{
      if(data){
        alert("Employee created successfully.");
        this.router.navigate(['/employees']); 
      }
    })
  }

  getEmployeeById(id : number){
    this.employeeService.getEmployeeById(this.id()).subscribe( data =>{
      this.employee.set(data);
    })
  }

  onUpdate(){
    this.employeeService.updateEmployee(this.id(), this.employee()).subscribe(data =>{
      if(data){
        this.router.navigate(['/employees']);
      }
    })
  }

  ngOnDestroy() {
    localStorage.removeItem("update");
  }
}
