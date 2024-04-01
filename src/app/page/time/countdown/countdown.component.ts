import {Component, OnDestroy, OnInit} from '@angular/core';
import Timeout = NodeJS.Timeout;

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit, OnDestroy {
  deadline = new Date(2022, 10, 13, 7, 0, 0);
  total = 0;
  day = '00';
  hour = '00';
  minute = '00';
  second = '00';
  timeInterval: Timeout | undefined;
  constructor() { }

  ngOnInit(): void {
    this.initializeClock();
  }

  getTimeRemaining() {
    this.total = Date.parse(this.deadline.toString()) - Date.parse(new Date().toString());
    if(this.total >= 0) {
      const second = Math.floor((this.total / 1000) % 60);
      this.second = second < 10 ? `0${second}` : `${second}`;
      const minute = Math.floor((this.total / 1000 / 60) % 60);
      this.minute = minute < 10 ? `0${minute}` : `${minute}`;
      const hour = Math.floor((this.total / (1000 * 60 * 60)) % 24);
      this.hour = hour < 10 ? `0${hour}` : `${hour}`;
      const day = Math.floor(this.total / (1000 * 60 * 60 * 24));
      this.day = day < 10 ? `0${day}` : `${day}`;
    }
    if (this.total < 0) {
      this.second = '00';
      this.minute = '00';
      this.hour = '00';
      this.day = '00';
      clearInterval(this.timeInterval)
    }
  }

  initializeClock() {
    this.timeInterval = setInterval(() => {
      this.getTimeRemaining();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timeInterval);
  }

}
