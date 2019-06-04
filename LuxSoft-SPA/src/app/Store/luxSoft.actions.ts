// import { Action } from '@ngrx/store';
// import { Employee } from '../_models/employee';


// export enum EmployeeActions {
//   Get_Employee = '[User] Get Employee',
//   GetEmployeeSuccess = '[User] Get Users Success',
//   GetEmployeeFailed = '[User] Get User',
//   GetEmployeeTest = '[User] Get User Test',
//   }
//   export class GetEmployee implements Action {
//     public readonly type = EmployeeActions.Get_Employee;
//     constructor(public payload: Employee) {}
//   }

//   export class GetEmployeeSucc implements Action {
//     public readonly type = EmployeeActions.GetEmployeeSuccess;
//     constructor(public payload: Employee[]) {}
//   }
//   export class GetEmployeeTest implements Action {
//     public readonly type = EmployeeActions.GetEmployeeSuccess;
//     constructor(public payload: Employee[]) {}
//   }
//   export class GetEmployeeFailed implements Action {
//     public readonly type = EmployeeActions.GetEmployeeFailed;
//     constructor(public payload: number) {}
//   }

//   export type EmployeeActionsTypes = GetEmployee | GetEmployeeSucc | GetEmployeeFailed | GetEmployeeTest;
