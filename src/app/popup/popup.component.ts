// import { Component, OnInit } from '@angular/core';
// import { Input } from '@angular/core';
// import { MatDialogRef } from '@angular/material/dialog';
// import { Inject } from '@angular/core';
// import { MAT_DIALOG_DATA } from '@angular/material/dialog';
// @Component({
//   selector: 'app-popup',
//   templateUrl: './popup.component.html',
//   styleUrls: ['./popup.component.css']
// })
// export class PopupComponent implements OnInit {
//   inputdata: any;
//   closemessage = 'closed using directive'
//   list: any[] = [];
//   constructor(@Inject(MAT_DIALOG_DATA) public data: any,
//     private ref: MatDialogRef<PopupComponent>) { }

//   ngOnInit(): void {
//     this.inputdata = this.data;
//   }

//   closepopup() {
//     this.ref.close('close using function');
//   }

//   addTask(item: string) {
//     // console.log(item);
//     this.list.push({
//       id: this.list.length,
//       name: item
//     });
//     console.log(this.list);

//   }

//   dltname(index: number) {
//     if (index > -1) {
//       this.list.splice(index, 1);
//     }
//     console.log(this.list);

//   }

// }



import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }


  Openpopup() {
    var popup = this.dialog.open(TodoComponent, {
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
