import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  childList: string[] = []
  inputText!: string;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.dataEmitter.subscribe((values) => {
      this.inputText = values;
      // console.log(this.inputText);
      this.childList.push(this.inputText);

    })

  }





}
