import { Routes } from '@angular/router';
import { EmployeeList } from './employee-list/employee-list';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

export const routes: Routes = [
    {path : 'employees', component: EmployeeList},
    {path : 'create-employee', component: CreateEmployeeComponent},
    { path : '', redirectTo : '/employees', pathMatch : 'full' },
    {path : 'employee-details/:id', component : EmployeeDetailsComponent},
];
