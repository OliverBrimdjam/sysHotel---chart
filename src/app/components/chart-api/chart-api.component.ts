import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';



@Component({
  selector: 'app-chart-api',
  templateUrl: './chart-api.component.html',
  styleUrls: ['./chart-api.component.scss']
})
export class ChartApiComponent {
  title = 'ng2-charts-demo';

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

  constructor() {
  }

  ngOnInit(): void {

  }

  // getLast3Months(): number[] {
  //   const months = [];
  //   const date = new Date();
  //   const month = date.getMonth();
  //   for (let i = 0; i < 3; i++) {
  //     months.push(month - i);
  //   }
  //   return months;
  // }

  getLast3Months(comeDate: Date) {
    const months = [];
    const curDate = new Date();
    const month = comeDate.getMonth();
    let year = comeDate.getFullYear();
  }



}

const historyLog = [
	{
		"id": 1,
		"lastChange": "2022-06-12T17:43:58.618Z",
		"roomId": 6,
		"roomStatusId": 3
	},
	{
		"id": 2,
		"lastChange": "2022-07-12T18:25:51.547Z",
		"roomId": 4,
		"roomStatusId": 3
	},
	{
		"id": 3,
		"lastChange": "2022-07-12T18:26:21.189Z",
		"roomId": 4,
		"roomStatusId": 2
  },
  {
    "id": 4,
    "lastChange": "2022-08-13T09:12:32.121Z",
    "roomId": 8,
    "roomStatusId": 1
  },
  {
    "id": 5,
    "lastChange": "2022-09-13T10:23:44.321Z",
    "roomId": 7,
    "roomStatusId": 2
  },
  {
    "id": 6,
    "lastChange": "2022-09-13T11:34:56.432Z",
    "roomId": 9,
    "roomStatusId": 3
    },
  {
    "id": 7,
    "lastChange": "2022-10-13T12:45:67.543Z",
    "roomId": 10,
    "roomStatusId": 4
  },
  {
    "id": 8,
    "lastChange": "2022-10-13T13:56:78.654Z",
    "roomId": 11,
    "roomStatusId": 2
  },
  {
    "id": 9,
    "lastChange": "2022-11-13T14:67:89.765Z",
    "roomId": 12,
    "roomStatusId": 4
  },
  {
    "id": 10,
    "lastChange": "2022-11-13T15:78:90.876Z",
    "roomId": 13,
    "roomStatusId": 4
  },
  {
    "id": 11,
    "lastChange": "2023-01-13T16:89:01.987Z",
    "roomId": 14,
    "roomStatusId": 2
  },
  {
    "id": 12,
    "lastChange": "2023-02-13T17:12:23.098Z",
    "roomId": 15,
    "roomStatusId": 2
  },
  {
    "id": 13,
    "lastChange": "2023-02-13T18:23:34.209Z",
    "roomId": 16,
    "roomStatusId": 1
  }
]
