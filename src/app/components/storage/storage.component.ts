import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit {
  name: any
  names: string[] = ["wasim", "nahed", "sam"]
  mynames: any;
  nm: any;

  mymessages:any;
  msg:any;

  messages = {
    list: [
      {
        id: 1,
        body: "karim"
      },
      {
        id: 2,
        body: "tutorial"
      }
    ]
  }


  constructor() { }

  ngOnInit(): void {
    sessionStorage.setItem('names', JSON.stringify(this.names))
    this.mynames = sessionStorage.getItem('names')
    this.nm = JSON.parse(this.mynames)
  }




  display(){
    this.mymessages = sessionStorage.getItem('messages')
    this.msg = JSON.parse(this.mymessages)
    console.log(this.msg);
    this.mynames = sessionStorage.getItem('names')
    this.nm = JSON.parse(this.mynames)
    console.log(this.nm);
  }

  storage(){
    sessionStorage.setItem('names', JSON.stringify(this.names))
    sessionStorage.setItem('messages', JSON.stringify(this.messages))
  }

}
