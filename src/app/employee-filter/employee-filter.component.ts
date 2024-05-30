import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-employee-filter',
  templateUrl: './employee-filter.component.html',
  styleUrl: './employee-filter.component.css'
})
export class EmployeeFilterComponent {
  @Output() filtersChanged = new EventEmitter<any>();
  filterId: string = '';
  filterDesignation: string = '';
  filterLocation: string = '';

  applyFilters(): void {
    this.filtersChanged.emit({
      id: this.filterId,
      position: this.filterDesignation,
      location: this.filterLocation
    });
  }
}
