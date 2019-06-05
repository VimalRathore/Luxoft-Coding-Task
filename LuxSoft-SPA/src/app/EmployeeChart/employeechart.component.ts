import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../_services/employee.service';

@Component({
  selector: 'app-employeechart',
  templateUrl: './employeechart.component.html',
  styleUrls: ['./employeechart.component.css']
})
export class EmployeeChartComponent implements OnInit {

  constructor(private empService: EmployeeService) { }

  existingEmployee: number = 0;
  quitEmployee: number = 0;
  ngOnInit() {
    this.empService.getEmployeeStatisics().subscribe(
      res => {
        this.ChartData = [res.deletedEmployeeCount, res.currentEmployeeCount];
        this.barChartLabels = res.yearList.map(String);
        this.barChartData[0].data = res.employeeAdded;
        this.barChartData[1].data = res.employeeDeleted;
      },

      error => { console.log(error); },
    );

  }

  public doughnutColors:Array<any>= [
    { // dark grey
         backgroundColor: '#F97300',
         borderColor: '#F97300',
         pointBackgroundColor: 'rgba(77,83,96,1)',
         pointBorderColor: '#fff',
         pointHoverBackgroundColor: '#fff',
         pointHoverBorderColor: 'rgba(77,83,96,1)'
       },
       { // dark grey
         backgroundColor: 'red',
         borderColor: '#F97300',
         pointBackgroundColor: 'rgba(77,83,96,1)',
         pointBorderColor: '#fff',
         pointHoverBackgroundColor: '#fff',
         pointHoverBorderColor: 'rgba(77,83,96,1)'
       }];

  ChartLabels = ['Deleted Employess', 'Current Employees'];
  ChartData = [0, 0];
  pie = 'pie';
  doughnut = 'doughnut';

  public chartHovered(e: any): void {
    console.log(e);
  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels : string[];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {data: [], label: 'Employees Added'},
    {data: [], label: 'Employees Deleted'}
  ];
}