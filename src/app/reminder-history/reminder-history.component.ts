import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reminder-history',
  templateUrl: './reminder-history.component.html',
  styleUrls: ['./reminder-history.component.css']
})
export class ReminderHistoryComponent implements OnInit {

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['03/03/2018', '03/04/2018', '03/05/2018', '03/06/2018', '03/07/2018', '03/08/2018', '03/09/2018'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Low'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Middle'},
    {data: [32, 23, 34, 17, 64, 34, 35], label: 'High'}
  ];

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  back() {
    this.router.navigateByUrl('/reminder-list')
  }

}
