import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private dialog: MatDialog,) { }

  ngOnInit(): void {
  }


  Openpopup() {
    var popup = this.dialog.open(PopupComponent, {
      height: 'auto',
      width: '963px',
      //  panelClass: 'ManualLogHoursModal',
      disableClose: true,
      data: {
        title: 'user data'
      }

    });
    popup.afterClosed().subscribe(item => {
      console.log(item);

    })

  }

}
