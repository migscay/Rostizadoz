import { Dish } from './dish';

export const DISHES: Dish[] = [
    {
      id: 0,
      name: 'Palabok',
      image: '/assets/images/palabok.png',
      category: 'mains',
      label: 'Hot',
      price: '4.99',
      featured: true,
      // tslint:disable-next-line:max-line-length
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
    },
    {
      id: 1,
      name: 'Kare-kare',
      image: '/assets/images/Kare-kare.jpg',
      category: 'mains',
      label: '',
      price: '1.99',
      featured: false,
      description: 'Crispy beef Kate kare-  slow cooked braised beef in peanut sauce with tempura aubergine,snake beans, bokchoi  And sauteed shrimp paste on the side',
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
    },
    {
      id: 2,
      name: 'Vadonut',
      image: '/assets/images/vadonut.png',
      category: 'appetizer',
      label: 'New',
      price: '1.99',
      featured: false,
      description: 'A quintessential ConFusion experience, is it a vada or is it a donut?',
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
    },
    {
      id: 3,
      name: 'ElaiCheese Cake',
      image: '/assets/images/elaicheesecake.png',
      category: 'dessert',
      label: '',
      price: '2.99',
      featured: false,
      description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
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
    }
  ];
  