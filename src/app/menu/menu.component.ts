import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';

import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes;

  dish = Dish; 

  constructor(private dishService: DishService) { }

  onSelect(dish) {
    this.dish = dish;
  }

  ngOnInit() {
    this.dishService.getDishes().subscribe(dishes => this.dishes = dishes);
    // this.dishService.getDishes()
    //   .then(dishes => this.dishes = dishes);
  }

}
