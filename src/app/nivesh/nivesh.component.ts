import { Component, OnInit } from '@angular/core';
import { NiveshUser } from '../model/user.model';
import { nifty } from '../services/stock.service';
import { UserService } from '../services/user.service';
import { WindowService } from '../services/window.service';

@Component({
  selector: 'app-nivesh',
  templateUrl: './nivesh.component.html',
  styleUrls: ['./nivesh.component.scss'],
})
export class NiveshComponent {
  isMobile: boolean = false;
  title: string = 'Nivesh';
  private user: NiveshUser;

  x = [];
  y = [];

  chartData = [
    {
      data: this.y,
      label: 'Account A',
      borderColor: 'rgba(75, 181, 97, 1)',
      backgroundColor: 'rgba(75, 181, 97, 0.15)',
      pointRadius: 0,
      fill: true,
      borderWidth: 1,
    },
  ];

  chartLabels = this.x;

  chartOptions = {
    tooltips: { enabled: false },
    hover: { mode: null },
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            display: false, //this will remove only the label
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            display: false, //this will remove only the label
          },
        },
      ],
    },
  };

  betaValue = 1.4;
  betaData = [
    {
      data: [this.betaValue, 4 - this.betaValue],
      label: 'Beta',
      borderColor: ['rgba(75, 181, 97, 1)', 'rgba(0, 0, 0, 0.3)'],
      backgroundColor: ['rgba(75, 181, 97, 0.15)', 'rgba(0, 0, 0, 0)'],
      pointRadius: 0,
      fill: true,
      borderWidth: 1,
    },
  ];
  betaLabels = ['beta', ''];
  betaOptions = {
    rotation: 1 * Math.PI,
    circumference: 1 * Math.PI,
    tooltips: { enabled: false },
    hover: { mode: null },
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            display: false, //this will remove only the label
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            display: false, //this will remove only the label
          },
        },
      ],
    },
  };

  peValue = 55.34;
  peData = [
    {
      data: [this.peValue, 100 - this.peValue],
      label: 'Beta',
      borderColor: ['rgba(75, 181, 97, 1)', 'rgba(0, 0, 0, 0.3)'],
      backgroundColor: ['rgba(75, 181, 97, 0.15)', 'rgba(0, 0, 0, 0)'],
      pointRadius: 0,
      fill: true,
      borderWidth: 1,
    },
  ];
  peLabels = ['beta', ''];
  peOptions = {
    rotation: 1 * Math.PI,
    circumference: 1 * Math.PI,
    tooltips: { enabled: false },
    hover: { mode: null },
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            display: false, //this will remove only the label
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            display: false, //this will remove only the label
          },
        },
      ],
    },
  };

  constructor(private windowService: WindowService) {
    this.windowService.isMobile().subscribe((isMobile: boolean) => {
      this.isMobile = isMobile;
    })
    let i = 0;
    nifty['data'][0]['points'].forEach((point) => {
      // this.x[i] = point['ts'];
      this.x[i] = i;
      this.y[i] = point['lp'];
      i++;
    });
  }
}
