import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFilterComponent } from './employee-filter/employee-filter.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeFilterComponent,
    EmployeeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
