import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[] = [
    {
      name: 'Palabok',
      image: '/assets/images/palabok.png',
      category: 'mains',
      label: 'Hot',
      price: '4.99',
      // tslint:disable-next-line:max-line-length
      description: 'Rice noodle topped with thickened prawn bisque sauce layered with pan seared prawns sliced boiled eggs smoked fish spring onions and crushed chicharon.'
    },
    {
      name: 'Zucchipakoda',
      image: '/assets/images/zucchipakoda.png',
      category: 'appetizer',
      label: '',
      price: '1.99',
      description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
    },
    {
      name: 'Vadonut',
      image: '/assets/images/vadonut.png',
      category: 'appetizer',
      label: 'New',
      price: '1.99',
      description: 'A quintessential ConFusion experience, is it a vada or is it a donut?'
    },
    {
      name: 'ElaiCheese Cake',
      image: '/assets/images/elaicheesecake.png',
      category: 'dessert',
      label: '',
      price: '2.99',
      description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'
    }
   ];

  constructor() { }

  ngOnInit(): void {
  }

}
