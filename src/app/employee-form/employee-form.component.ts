import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {
  @Input() employee: any = { id: null, name: '', position: '', location: '' };
  @Output() employeeSaved = new EventEmitter<any>();

  saveEmployee(): void {
    this.employeeSaved.emit(this.employee);
    this.employee = { id: null, name: '', position: '', location: '' };
  }
}

