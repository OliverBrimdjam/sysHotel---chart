import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { format, isAfter, subMonths, toDate } from 'date-fns';

type TRoomStatusLog = {
  id?: number;
  roomId?: number;
  roomStatusId?: number;
  lastChange?: string;
}

@Component({
  selector: 'app-chart-api',
  templateUrl: './chart-api.component.html',
  styleUrls: ['./chart-api.component.scss']
})
export class ChartApiComponent {
  title = 'Room Status Log';

  srcHistory: (TRoomStatusLog | null)[] = [];
  availableRooms: any = [];
  occupiedRooms: any = [];
  reservedRooms: any = [];
  outOfOrderRooms: any = [];
  maintenanceRooms: any = [];


  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ 'Available', 'Occupied', 'Reserved', 'Out of Order', 'Maintenance' ],
    datasets: [{
      data: [0, 0, 0, 0, 0],
      label: 'Room Status'
    }]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

  constructor() {
  }

  ngOnInit(): void {
    console.log('chegou no onInit')
    // this.getLast3Months();
    // this.getLast6Months();

    // this.separeteByStatus();


  }

  ngAfterViewInit(): void {
    this.getLast12Months();

  //   this.barChartData = {
  //   labels: [ 'Available', 'Occupied', 'Reserved', 'Out of Order', 'Maintenance' ],
  //   datasets: [{
  //     data: [
  //       this.availableRooms.length,
  //       this.occupiedRooms.length,
  //       this.reservedRooms.length,
  //       this.outOfOrderRooms.length,
  //       this.maintenanceRooms.length
  //     ],
  //     label: 'Room Status'
  //   }]
  // };
  }

  filterLogPeriod(pastDate: Date) {
    // const curDate = new Date();
    this.srcHistory = historyLog.map((item) => {
      if (isAfter(new Date(item.lastChange),pastDate)) {
        return item;
      } else {
        return null
      }
    });
    this.separeteByStatus();

    this.barChartData = {
    labels: [ 'Available', 'Occupied', 'Reserved', 'Out of Order', 'Maintenance' ],
    datasets: [{
      data: [
        this.availableRooms.length,
        this.occupiedRooms.length,
        this.reservedRooms.length,
        this.outOfOrderRooms.length,
        this.maintenanceRooms.length
      ],
      label: 'Room Status'
    }]
  };

  }

  getLast3Months() {
    const curDate = new Date();
    const pastDate = subMonths(curDate, 3);

    this.filterLogPeriod(pastDate);
  }

  getLast6Months() {
    const curDate = new Date();
    const pastDate = subMonths(curDate, 6);

    this.filterLogPeriod(pastDate);
  }

  getLast12Months() {
    const curDate = new Date();
    const pastDate = subMonths(curDate, 12);

    this.filterLogPeriod(pastDate);
  }

  separeteByStatus(): void {
    this.availableRooms = [];
    this.occupiedRooms = [];
    this.reservedRooms = [];
    this.outOfOrderRooms = [];
    this.maintenanceRooms = [];

    this.srcHistory.forEach((item: any) => {
      if (item === null) return;
      console.log(item.roomStatusId)
      switch (item.roomStatusId) {
        case 1:
          this.availableRooms.push(item);
          break;
        case 2:
          this.occupiedRooms.push(item);
          break;
        case 3:
          this.reservedRooms.push(item);
          break;
        case 4:
          this.outOfOrderRooms.push(item);
          break;
        case 5:
          this.maintenanceRooms.push(item);
          break;
        default:
          break;
      }
    })
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
    "roomId": 6,
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
    "roomId": 2,
    "roomStatusId": 3
    },
  {
    "id": 7,
    "lastChange": "2022-10-13T12:45:67.543Z",
    "roomId": 1,
    "roomStatusId": 4
  },
  {
    "id": 8,
    "lastChange": "2022-10-13T13:56:78.654Z",
    "roomId": 4,
    "roomStatusId": 2
  },
  {
    "id": 9,
    "lastChange": "2022-11-13T14:67:89.765Z",
    "roomId": 5,
    "roomStatusId": 4
  },
  {
    "id": 10,
    "lastChange": "2022-11-13T15:78:90.876Z",
    "roomId": 3,
    "roomStatusId": 4
  },
  {
    "id": 11,
    "lastChange": "2023-01-13T16:89:01.987Z",
    "roomId": 4,
    "roomStatusId": 2
  },
  {
    "id": 12,
    "lastChange": "2023-02-13T17:12:23.098Z",
    "roomId": 6,
    "roomStatusId": 2
  },
  {
    "id": 13,
    "lastChange": "2023-02-13T18:23:34.209Z",
    "roomId": 5,
    "roomStatusId": 1
  }
]
