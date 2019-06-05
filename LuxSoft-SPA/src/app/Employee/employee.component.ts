import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { GridOptions } from 'ag-grid-community';
import { Employee } from '../_models/employee';
import { EmployeeService } from '../_services/employee.service';
import { Pagination, EmployeeViewModel } from '../_models/employeeViewModel';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormModalComponent } from '../FormModal/FormModal.component';
// import { Subscription } from 'rxjs';
// import { Store, createAction } from '@ngrx/store';
// import { EmployeeActions, GetEmployee } from '../Store/luxSoft.actions';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
  public rowSelection;
  private gridApi;
  private gridColumnApi;
  model: EmployeeViewModel;
  gridOptions: GridOptions;
  rowData: Employee[];
  // private subscription: Subscription;

  constructor(private http: HttpClient,
    private empService: EmployeeService,
    private toastr: ToastrService
    ,
    private modalService: NgbModal
    //  private store: Store<any>
  ) { }




  ngOnInit() {
    this.model = new EmployeeViewModel();
    this.model.pagination.currentPage = 1;
    this.model.pagination.itemsPerPage = 10;
    this.loadGrid();

    this.gridOptions = {
      pagination: false,
    };
    this.rowSelection = "multiple";
    // this.store.select(data => {
    //   console.log(data);
    // });
  }

  pageChanged(event: any): void {
    this.model.pagination.currentPage = event.page;
    this.loadGrid();
  }

  loadGrid() {
    this.empService.getAllEmployees(this.model.pagination).subscribe(
      res => { this.rowData = res.employees; this.model.pagination = res.pagination },
      error => {
        this.toastr.error('Hey, Some issue while geting employee details')
      },
    );
  }
  // loadGrid() {
  //   const result = this.empService.getAllEmployees(this.model).subscribe(
  // res => { this.rowData = res.employees; this.model.pagination = res.pagination;
  //    this.store.dispatch(new GetEmployee(this.rowData[0]));
  // },
  //     error => {
  //       this.toastr.error('Hey, Some issue while geting employee details');
  //      },
  //   );
  // }

  openFormModal() {
    const modalRef = this.modalService.open(FormModalComponent);

    modalRef.result.then((result) => {

      this.model.employees = new Array<Employee>();
      this.model.employees.push(result);
      this.empService.saveAllEmployees(this.model).subscribe(
        res => {
          if (res) {
            this.toastr.success('Employee Added successfully');
          }
        },
        error => { this.toastr.error(error); },
        () => { this.loadGrid(); }
      );
    }).catch((error) => {
      console.log(error);
    });
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  columnDefs = [
    { headerName: 'Employee Id', field: 'id', editable: false, width: 100, suppressSizeToFit: true, sortable: true },
    { headerName: 'First Name', field: 'firstName', editable: true, width: 150, suppressSizeToFit: true, sortable: true },
    { headerName: 'Last Name', field: 'lastName', editable: true, width: 150, suppressSizeToFit: true, sortable: true },
    { headerName: 'Age', field: 'age', editable: true, width: 80, suppressSizeToFit: true, sortable: true },
    { headerName: 'Gender', field: 'gender', editable: true, width: 80, suppressSizeToFit: true, sortable: true },
    { headerName: 'Email Id', field: 'email', editable: true, width: 210, suppressSizeToFit: true, sortable: true },
    { headerName: 'City', field: 'city', editable: true, width: 160, suppressSizeToFit: true, sortable: true },
    { headerName: 'Country', field: 'country', editable: true, width: 160, suppressSizeToFit: true, sortable: true },
  ];

  onRemoveSelected() {
    var selectedData = this.gridApi.getSelectedRows();
    if (selectedData.length < 1) {
      this.toastr.info('Please select the records to be deleted.');
      return;
    }
    this.model.employees = selectedData;
    this.empService.deleteAllEmployees(this.model).subscribe(
      res => {
        if (res) {
          this.toastr.success('Employee deleted successfully.');
        }
      },
      error => { this.toastr.error(error); },
      () => { this.loadGrid(); }
    );


  }


  onUpdate() {
    this.model.employees = new Array<Employee>();
    this.model.employees = this.rowData;
    this.empService.saveAllEmployees(this.model).subscribe(
      res => {
        if (res) {
          this.toastr.success('Employee Saved successfully');
        }
      },
      error => { this.toastr.error(error); },
      () => { this.loadGrid(); }
    );


  }
}

