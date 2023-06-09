import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
list: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }


  addTask(item: string) {
    // console.log(item);
    this.list.push(
      {
        id: this.list.length,
        name: item
      }
    )
    console.log(this.list);
  }

  removeTask(id: number) {
    console.log(id);
    this.list=this.list.filter(item=>item.id!==id)
  }


}
