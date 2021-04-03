import { Component, OnInit } from '@angular/core';

import { Comment } from '../shared/comment';

var arrComment: Comment[];

const DISH = {
  name: 'Palabok',
  image: '/assets/images/palabok.png',
  category: 'mains',
  label: 'Hot',
  price: '4.99',
  description: 'Rice noodle topped with thickened prawn bisque sauce layered with pan seared prawns sliced boiled eggs smoked fish spring onions and crushed chicharon.',
  comments: [
    {
      rating: 5,
      comment: "What an exciting fiesta of flavors!",
      author: "John Lemon",
      date: "2012-10-16T17:57:28.556094Z"
    },
    {
      rating: 4,
      comment: "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
      author: "Paul McVites",
      date: "2014-09-05T17:57:28.556094Z"
    }
  ]
};

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})

export class DishdetailComponent implements OnInit {

  dish = DISH;

  selectedDish = DISH;

  arrComments = DISH.comments;

  constructor() { }

  ngOnInit() {
  }

}
