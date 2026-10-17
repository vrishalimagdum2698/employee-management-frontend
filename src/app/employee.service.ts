import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  
  private httpClient = inject(HttpClient);
  private baseUrl = 'http://localhost:8080/api/v1/employees';

  getEmployees():Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`);
  }

  createEmployee(employee: Employee):Observable<Employee[]> {
    return this.httpClient.post<Employee[]>(`${this.baseUrl}/saveEmployee`, employee);
  }

  getEmployeeById(id : number) : Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`);
  }

  updateEmployee(id: number, employee : Employee) :Observable<Employee>{
    return this.httpClient.put<Employee>(`${this.baseUrl}/${id}`,employee);
  }

  deleteEmployee(id : number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/deleteEmployee/${id}`);
  }
}
