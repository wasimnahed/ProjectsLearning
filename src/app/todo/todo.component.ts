import { Component, OnInit } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  task: string[] = [];
  newTask: string='';
  constructor(private dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  ngOnInit(): void {

  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      height: 'auto',
      width: '963px',
      panelClass: 'ManualLogHoursModal',
      disableClose: true,
      autoFocus: false,
      data: {task:this.task}
    });

   

    this.task.push(this.newTask);
  }

}
