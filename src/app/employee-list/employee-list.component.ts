import { Component } from '@angular/core';
import { EmployeesrivcieService } from '../employeesrivcie.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  employees: any[] = [];
  filteredEmployees: any[] = [];
  filterStatus: string = 'All';
  filterSubscription: Subscription | undefined;
  filters: any = {};
  employeeToEdit: any = null;

  constructor(private employeeService: EmployeesrivcieService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
      this.filterEmployees();
    });
  }

  ngOnDestroy(): void {
    if (this.filterSubscription) {
      this.filterSubscription.unsubscribe();
    }
  }


  filterEmployees(): void {
    this.filteredEmployees = this.employees.filter(emp => {
      return (!this.filters.id || emp.id == this.filters.id) &&
             (!this.filters.position || emp.position.includes(this.filters.position)) &&
             (!this.filters.location || emp.location.includes(this.filters.location));
    });
  }

  changeFilter(status: string): void {
    this.filterStatus = status;
    this.filterEmployees();
  }

  applyFilters(filters: any): void {
    this.filters = filters;
    this.filterEmployees();
  }

  editEmployee(employee: any): void {
    this.employeeToEdit = { ...employee };
  }

  deleteEmployee(employeeId: string): void {
    this.employees = this.employees.filter(emp => emp.id !== employeeId);
    this.filterEmployees();
    this.saveEmployees();
  }

  saveEmployee(employee: any): void {
    const index = this.employees.findIndex(emp => emp.id === employee.id);
    if (index === -1) {
      this.employees.push(employee);
    } else {
      this.employees[index] = employee;
    }
    this.filterEmployees();
    this.saveEmployees();
    this.employeeToEdit = null;
  }

  updateSuspendedEmployees(): void {
    this.employees.forEach(employee => {
      if (employee.status === 'Temporarily suspended') {
        employee.status = 'Inactive';
      }
    });
    this.filterEmployees();
    this.saveEmployees();
  }

  saveEmployees(): void {
    console.log(JSON.stringify(this.employees));
  }
}