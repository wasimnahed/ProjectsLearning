import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  @Input() input: string[];

  constructor(

  ) { }

  ngOnInit(): void {
  }

  dltname(index: number) {
    if (index > -1) {
      this.input.splice(index, 1);
    }
  }
}
