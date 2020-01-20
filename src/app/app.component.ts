import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  clockStrings = {
    years: '0',
    months: '0',
    days: '0',
    hours: '0',
    minutes: '0',
    seconds: '0'
  }

  startDate = new Date('Fri Jan 17 2020 17:45:00 GMT+0100 (Central European Standard Time)');

  constructor() {
    setInterval(() => {
      this.interval();
    }, 1000);
  }

  interval() {
    const currentDate = new Date();
    const deltaMs = currentDate.getTime() - this.startDate.getTime();

    const deltaDate = new Date(deltaMs);

    this.clockStrings = {
      years: (deltaDate.getFullYear() - 1970).toString(),
      months: (deltaDate.getMonth()).toString(),
      days: (deltaDate.getDate() - 1).toString(),
      hours: (deltaDate.getHours()).toString(),
      minutes: (deltaDate.getMinutes()).toString(),
      seconds: (deltaDate.getSeconds()).toString()
    }
  }
}
