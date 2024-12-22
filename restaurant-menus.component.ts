import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CartService } from '../cart.service';
import { FavsService } from '../favs.service';
@Component({
  selector: 'app-restaurant-menus',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './restaurant-menus.component.html',
  styleUrls: ['./restaurant-menus.component.css']
})
export class RestaurantMenusComponent {
  restaurant: any;
  menuItems: any[] = [];
  messages: { [key: number]: string } = {};

  restaurants = [
    { id: 1, img: './assets/all-restaurants/pizza-hut.avif', name: 'Pizza Hut', rating: '4.1 (45+ ratings)', time: '25-30 mins', cuisine: 'Pizzas', location: 'Kothawada', offer: 'ITEMS AT ₹189' },
    { id: 2, img: './assets/all-restaurants/kfc.avif', name: 'KFC', rating: '4.2 (200+ ratings)', time: '25-30 mins', cuisine: 'Burgers, Fast Food', location: 'Hanamkonda', offer: '20% OFF UPTO ₹50' },
    { id: 3, img: './assets/all-restaurants/dominos-pizza.avif', name: "Domino's Pizza", rating: '4.4 (150+ ratings)', time: '20-25 mins', cuisine: 'Pizzas, Italian', location: 'Sherpura', offer: '₹125 OFF ABOVE ₹1199' },
    { id: 4, img: './assets/all-restaurants/belgian-waffle.avif', name: 'The Belgian Waffle Co.', rating: '4.6 (100+ ratings)', time: '40-45 mins', cuisine: 'Waffle, Desserts', location: 'Hanamkonda', offer: '20% OFF UPTO ₹50' },
    { id: 5, img: './assets/all-restaurants/president-dhaba.avif', name: 'President Dhaba', rating: '4.3 (80+ ratings)', time: '30-35 mins', cuisine: 'Biryani, Kebabs, South Indian', location: 'Hanamkonda', offer: '₹125 OFF ABOVE ₹399' },
    { id: 6, img: './assets/all-restaurants/zafraan-biryani-hotel.avif', name: 'Zafraan Biryani Hotel', rating: '4.1 (60+ ratings)', time: '15-20 mins', cuisine: 'Biryani, Chinese', location: 'Warangal', offer: '₹150 OFF ABOVE ₹349' },
    { id: 7, img: './assets/all-restaurants/khursheed biryani hote.avif', name: 'Khursheed Biryani Hotel', rating: '4.3 (120+ ratings)', time: '20-25 mins', cuisine: 'Biryani, Chinese', location: 'Warangal', offer: '₹175 OFF ABOVE ₹399' },
    { id: 8, img: './assets/all-restaurants/stuti pure veg.avif', name: 'Stuti Pure Veg Restaurant', rating: '4.3 (90+ ratings)', time: '15-20 mins', cuisine: 'Indian, Chinese, Biryani', location: 'Warangal', offer: '10% OFF ABOVE ₹699' },
    { id: 9, img: './assets/all-restaurants/grameen kulfi.avif', name: 'Grameen Kulfi', rating: '4.7 (110+ ratings)', time: '20-25 mins', cuisine: 'Ice Cream, Desserts', location: 'Hanamkonda', offer: '60% OFF UPTO ₹110' },
    { id: 10, img: './assets/all-restaurants/the mirciesz.avif', name: 'The Mirchiesz', rating: '3.9 (75+ ratings)', time: '20-25 mins', cuisine: 'Biryani, Chinese', location: 'Warangal', offer: '₹175 OFF ABOVE ₹399' },
    { id: 11, img: './assets/all-restaurants/sky family restaurant.avif', name: 'Skyla Family Restaurant', rating: '4.5 (130+ ratings)', time: '30-35 mins', cuisine: 'South Indian, Chinese', location: 'Hanamkonda', offer: '₹125 OFF ABOVE ₹299' },
    { id: 12, img: './assets/all-restaurants/hotel thousand pillars.avif', name: 'Hotel Thousand Pillars', rating: '4.3 (95+ ratings)', time: '30-35 mins', cuisine: 'Biryani, Continental, Kebabs', location: 'Hanamkonda', offer: '₹125 OFF ABOVE ₹299' }
  ];

  menus: { [key: number]: { name: string; cost: number; description: string; img: string }[] } = {
    1: [
      { name: 'Tandoori Paneer', cost: 189, description: "Serves 1 | It's our signature. Spiced paneer, crunchy onions & green capsicum, spicy red paprika with delicious tandoori sauce and 100% mozzarella cheese! (PAN Per/Med-335 Kcal/100g | TnC-326 Kcal/100g  Stuffed Crust Add : Per: 227 Kcal/100g  Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.", img: './assets/pizza hut image/tandoori paneer.avif' },
      { name: 'Veggie Supreme', cost: 250, description: "Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with flavourful pan sauce and 100% mozzarella cheese. (PAN Per/Med-254 Kcal/100g | TnC-258 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.", img: './assets/pizza hut image/veggie supreme.avif' }
    ],
    2: [
      { name: 'Korean & Thai Roll Chicken Meal', cost: 549, description: 'Rs. 114 Off on Korean Tangy Roll & Thai Spicy Roll, Large Popcorn, Large Fries & Pepsi PET 475ml', img: 'assets/kfc/kfc-1.avif' },
      { name: 'Indian Tandoori Roll Chicken Meal', cost: 399, description: 'Save Rs. 75 on Indian Tandoori Roll, Classic Zinger Burger, Medium Fries & Pepsi PET 475ml', img: 'assets/kfc/kfc2.avif' }
    ],
  };

  constructor(private route: ActivatedRoute, private cartService: CartService,private favsService: FavsService) {}
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Restaurant ID:', id);
    this.restaurant = this.restaurants.find(rest => rest.id === id);
    this.menuItems = this.menus[id as keyof typeof this.menus] || [];
}
  addToCart(item: any, index: number) {
    this.cartService.addToCart(item);
    this.messages[index] = 'Added to cart';
  }
  addToFav(item: any, index: number) {
    this.favsService.addToFavorites(item);
  }
}
