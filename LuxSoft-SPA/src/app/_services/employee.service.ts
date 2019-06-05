import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeViewModel } from '../_models/employeeViewModel';
import { map } from 'rxjs/operators';
import { EmployeeStatistics } from '../_models/employeeStatistics';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  constructor(private http: HttpClient) { }

  baseUrl = environment.apiUrl + 'EmployeeDetails';

  getAllEmployees(model: any): Observable<EmployeeViewModel> {
    return this.http.post(this.baseUrl + '/get-employees', model).pipe(
      map((response: any) => {
        if (response) {
          return response;
        }
      }))
  };

  saveAllEmployees(model: any):Observable<boolean> {
    return this.http.post(this.baseUrl + '/save-employees', model).pipe(
      map((response: any) => {
        if (response) {
          return response;
        }
      })
    )
  };

  deleteAllEmployees(model: any):Observable<boolean> {
    return this.http.post(this.baseUrl + '/delete-employees', model).pipe(
      map((response: any) => {
        if (response) {
          return response;
        }
      })
    )
  };

  getEmployeeStatisics():Observable<EmployeeStatistics> {
    return this.http.get<EmployeeStatistics>(this.baseUrl + '/employee-statistics').pipe(
      map(res => {
        res.yearList.toString()
        return res;
      })
    );
  };
}
