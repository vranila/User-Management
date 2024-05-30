import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeesrivcieService {

  private employees = [
    { id: 1, name: 'Jim', position: 'Manager', location: 'NewYork' },
    { id: 2, name: 'Corbett', position: 'HR', location: 'Canada' },
    { id: 3, name: 'Harry', position: 'Designer', location: 'Paris' },
    { id: 4, name: 'Potter', position: 'Developer', location: 'Riyadh' }
  ];


  constructor(private http: HttpClient) { }

  getEmployees(): Observable<any> {
    return of(this.employees);
  }
}
