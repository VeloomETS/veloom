import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnChanges {
  text: any = {
    Year: 'A',
    Month: 'M',
    Weeks: 'S',
    Days: 'J',
    Hours: 'H',
    Minutes: 'M',
    Seconds: 'S',
    MilliSeconds: 'M'
  };
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
  }
}
