import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {
  local!: string;
  constructor(private localData: DataService) { }

  ngOnInit(): void {
  }

  addtolocal(data: string) {
    this.localData.addtolocal('key', data);
  }

}
