import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  heroList: string[] = []
  heroName: string = '';
  foods: string[] = []
  constructor() { }

  ngOnInit(): void {
  }
  // addHero({ target }:any) {
  //   // console.log("hgsdchsd", );

  //   const { value } = target;
  //   this.heroList.push(value)
  // }


  addHero() {
    // Access the heroName property here and perform further actions
    console.log(this.heroName);
    this.heroList.push(this.heroName)
    // You can create a hero object or process the input value as needed
  }








  afterFoofAdd(food: string) {
    this.foods.push(food)

  }

}
