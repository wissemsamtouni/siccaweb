import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  datasets = [
    {
      label: 'Traffic',
      data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
    },
  ];

  labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  constructor() { }

  ngOnInit(): void {
  }

}
