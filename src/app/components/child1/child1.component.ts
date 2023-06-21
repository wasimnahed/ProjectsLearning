import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Input() childData: any;
  fields: string[] = ['name', 'age', 'email', 'gender'];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: any) {
    if (changes.childData && changes.childData.currentValue) {
      console.log('Data:', changes.childData.currentValue);
    }
  }
}
