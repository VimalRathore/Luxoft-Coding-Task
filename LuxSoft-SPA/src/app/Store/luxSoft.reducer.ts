// import { Employee } from './../_models/employee';
// import { EmployeeActions, EmployeeActionsTypes } from './luxSoft.actions';
// export class EmployeeState extends Employee {}

// const initialState: EmployeeState = {
//     id: null,
//     firstName: null,
//     lastName: null,
//     age: null,
//     gender: null,
//     createdDate: null,
//     modifiedDate: null,
//     yearOfJoining: null,
//     phoneNumber: null,
//     email: null,
//     city: null,
//     country: null,
//     isDeleted: null,
// };

// export const employeeReducers = (
//   state = initialState,
//   action: EmployeeActionsTypes
// ): EmployeeState => {
//   switch (action.type) {
//     case EmployeeActions.Get_Employee: {
//       return {
//         ...state, ...action.payload
//       };
//     }
//     case EmployeeActions.GetEmployeeSuccess: {
//       return {
//         ...state, ...action.payload
//       };
//     }

//     default:
//       return state;
//   }
// };
