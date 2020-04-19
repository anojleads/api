import { Component, OnInit } from '@angular/core';
import { IMeal } from './meal';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() {
    this.filteredMeals = this.meals;
    this._findText = '';
   }

  ngOnInit(): void {
  }
  pageTitle: string = 'Menu List';
  imageWidth: number = 120;
  imageMargin: number = 2;
  showImage: boolean = true;
  _findText: string;
  get findText(): string {
    return this._findText;
  }
  set findText(value: string) {
    this._findText = value;
    this.filteredMeals = this.findText ? this.searchMeals(this.findText) :this.meals;
  }
  filteredMeals: IMeal[];
  meals: IMeal[] = [
    {
      "mealId": 1,
      "mealName": "Chirashi",
      "description": "Assorted sashimi on sushi rice.",
      "price": 89.99,
      "imageUrl": "../assets/Images/hd.jpg",
      "stars": 4.5
    
    },
    {
      "mealId": 2,
      "mealName": "Sushi Lover",
      "description": "1 Toro, 1 tuna, 1 salmon 1 yellow tail with 2pcs futo maki ",
      "price": 129.99,
      "imageUrl": "../assets/Images/hd1.jpg",
      "stars": 3.7
    },
    {
      "mealId": 3,
      "mealName": "TOKYO MADNESS",
      "description": "Teriyaki Onions, Wasabi Mayo, and Nori ",
      "price": 14.95,
      "imageUrl": "../assets/Images/hd7.jpg",
      "stars": 2.2
    },
    {
      "mealId": 4,
      "mealName": "Ginza Sushi",
      "description": " 2pcs tuna, 2pcs yellow tail with half tuna and salmon avocado roll. ",
      "price": 99.95,
      "imageUrl": "../assets/Images/hd3.jpg",
      "stars": 4.1
    },
    {
      "mealId": 5,
      "mealName": "Sushi deluxe",
      "description": "10pcs sushi with 2pcs futo maki.",
      "price": 189.95,
      "imageUrl": "../assets/Images/hd4.jpg",
      "stars": 2.4
    },
    {
      "mealId": 6,
      "mealName": "Sushi Regular",
      "description": "8pcs sushi with 2pcs futo maki.",
      "price": 119.95,
      "imageUrl": "../assets/Images/cf.jpg",
      "stars": 4
    }
  ];


  toggleImage(): void{
    this.showImage = !this.showImage;

  }
  searchMeals(byText: string): IMeal[] {
    byText = byText.toLocaleLowerCase();
    return this.meals.filter((meal: IMeal) =>
    meal.mealName.toLocaleLowerCase().indexOf(byText) !== -1);
  }


}

