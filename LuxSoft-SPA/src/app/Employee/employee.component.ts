import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { GridOptions } from 'ag-grid-community';
import { Employee } from '../_models/employee';
import { EmployeeService } from '../_services/employee.service';
import { Pagination, EmployeeViewModel } from '../_models/employeeViewModel';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
  private rowSelection;
  private gridApi;
  private gridColumnApi;
  model: EmployeeViewModel;
  gridOptions: GridOptions
  rowData: Employee[];
  @ViewChild('addForm') addForm : NgForm;
  newEmployee:Employee= new Employee();

  constructor(private http: HttpClient,
    private empService: EmployeeService,
     private toastr: ToastrService) {

    this.model = new EmployeeViewModel();
    this.model.pagination.currentPage = 1;
    this.model.pagination.itemsPerPage = 10;
  }

  ngOnInit() {
    this.loadGrid();
    this.gridOptions = {
      pagination: false
    }
    this.rowSelection = "multiple";
  }

  pageChanged(event: any): void {
    this.model.pagination.currentPage = event.page;
    this.loadGrid();
  }

  loadGrid() {
    this.empService.getAllEmployees(this.model).subscribe(
    
      res => { this.rowData = res.employees; this.model.pagination = res.pagination },
      error => {
        this.toastr.error('Hey, Some issue while geting employee details')
       },
    );
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  // tslint:disable-next-line:member-ordering
  columnDefs = [
    { headerName: 'Employee Id', field: 'id', editable:false, width: 100, suppressSizeToFit: true, sortable: true },
    { headerName: 'First Name', field: 'firstName', editable: true, width: 165, suppressSizeToFit: true, sortable: true },
    { headerName: 'Last Name', field: 'lastName', editable: true, width: 165, suppressSizeToFit: true, sortable: true },
    { headerName: 'Age', field: 'age', editable: true, width: 80, suppressSizeToFit: true, sortable: true },
    { headerName: 'Gender', field: 'gender', editable: true, width: 80, suppressSizeToFit: true, sortable: true },
    { headerName: 'City', field: 'city', editable: true, width: 160, suppressSizeToFit: true, sortable: true },
    { headerName: 'Country', field: 'country', editable: true, width: 160, suppressSizeToFit: true, sortable: true },
  ];

  onRemoveSelected() {
    // tslint:disable-next-line:prefer-const
    var selectedData = this.gridApi.getSelectedRows();
    
    if (selectedData.length < 1) {
      this.toastr.info('Please select the records to be deleted.');
      return;
    }
    this.model.employees = selectedData;
    this.empService.deleteAllEmployees(this.model).subscribe(
      res => { this.rowData = res.employees; this.model.pagination = res.pagination;
      this.toastr.info('Employee deleted successfully.'); },
      // tslint:disable-next-line:no-unused-expression
      error => { this.toastr.error(error); }
    );
  }
  onAddRow() {
    this.newEmployee.id = 0;
    this.model.employees = new Array<Employee>();
    this.model.employees.push(this.newEmployee);
    this.empService.saveAllEmployees(this.model).subscribe(
      res => { this.rowData = res.employees; this.model.pagination = res.pagination;
        this.toastr.success('Employee Added successfully'); },
      error => { this.toastr.error(error); },
    );
    this.addForm.resetForm();
  }

  onUpdate(){
    this.model.employees = new Array<Employee>();
    this.model.employees = this.rowData;
    this.empService.saveAllEmployees(this.model).subscribe(
      res => { this.rowData = res.employees; this.model.pagination = res.pagination;
      this.toastr.success('Employee Saved successfully') },
      error => { this.toastr.error(error); },
    );
  }
}

