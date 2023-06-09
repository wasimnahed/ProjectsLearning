import { Component, OnInit } from '@angular/core';
import { Subject, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html',
  styleUrls: ['./take-until.component.css']
})
export class TakeUntilComponent implements OnInit {
switchOff$: Subject<any> = new Subject<any>();
  constructor() { }

  ngOnInit(): void {
    //  const source$= interval(1000);
    // source$.pipe(takeUntil(this.switchOff$)).subscribe(count => {
    //   console.log(count);
    // });
  }

  //  stop(): void {
  //   this.switchOff$.next(0);
  // }

}
