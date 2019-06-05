import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { BsDropdownModule, TabsModule, PaginationModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { AgGridModule } from 'ag-grid-angular';
import { EmployeeService } from './_services/employee.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { EmployeeComponent } from './Employee/employee.component';
import { EmployeeChartComponent } from './EmployeeChart/employeechart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormModalComponent } from './FormModal/FormModal.component';
// import { Store } from '@ngrx/store';
// import { StoreModule } from '@ngrx/store';
// import { employeeReducers } from './Store/luxSoft.reducer';
@NgModule({
   declarations: [
      AppComponent,
      EmployeeComponent,
      EmployeeChartComponent,
      FormModalComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      PaginationModule.forRoot(),
      AgGridModule.withComponents(),
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      TabsModule.forRoot(),
      ChartsModule,
      NgbModule.forRoot(),
      BrowserAnimationsModule,
      ToastrModule.forRoot(),
      // StoreModule.forRoot({}),
      // StoreModule.forFeature('LuxSoftStore', employeeReducers),
   ],
   providers: [
      ErrorInterceptorProvider,
      EmployeeService
     // Store
   ],
   bootstrap: [
      AppComponent
   ],
   entryComponents: [
      FormModalComponent
   ]
})
export class AppModule { }
