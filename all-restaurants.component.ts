import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-all-restaurants',
  standalone: true,
  imports: [NgFor,CommonModule],
  templateUrl: './all-restaurants.component.html',
  styleUrl: './all-restaurants.component.css'
})
export class AllRestaurantsComponent {
  constructor(private router: Router) {}

  restaurants = [
    { id: 1, img: './assets/all-restaurants/pizza-hut.avif', name: 'Pizza Hut', rating: '4.1', time: '25-30 mins', cuisine: 'Pizzas', location: 'Kothawada', offer: 'ITEMS AT ₹189' },
    { id: 2, img: './assets/all-restaurants/kfc.avif', name: 'KFC', rating: '4.2', time: '25-30 mins', cuisine: 'Burgers, Fast Food', location: 'Hanamkonda', offer: '20% OFF UPTO ₹50' },
    { id: 3, img: './assets/all-restaurants/dominos-pizza.avif', name: "Domino's Pizza", rating: '4.4', time: '20-25 mins', cuisine: 'Pizzas, Italian', location: 'Sherpura', offer: '₹125 OFF ABOVE ₹1199' },
    { id: 4, img: './assets/all-restaurants/belgian-waffle.avif', name: 'The Belgian Waffle Co.', rating: '4.6', time: '40-45 mins', cuisine: 'Waffle, Desserts', location: 'Hanamkonda', offer: '20% OFF UPTO ₹50' },
    { id: 5, img: './assets/all-restaurants/president-dhaba.avif', name: 'President Dhaba', rating: '4.3', time: '30-35 mins', cuisine: 'Biryani, Kebabs, South Indian', location: 'Hanamkonda', offer: '₹125 OFF ABOVE ₹399' },
    { id: 6, img: './assets/all-restaurants/zafraan-biryani-hotel.avif', name: 'Zafraan Biryani Hotel', rating: '4.1', time: '15-20 mins', cuisine: 'Biryani, Chinese', location: 'Warangal', offer: '₹150 OFF ABOVE ₹349' },
    { id: 7, img: './assets/all-restaurants/khursheed biryani hote.avif', name: 'Khursheed Biryani Hotel', rating: '4.3', time: '20-25 mins', cuisine: 'Biryani, Chinese', location: 'Warangal', offer: '₹175 OFF ABOVE ₹399' },
    { id: 8, img: './assets/all-restaurants/stuti pure veg.avif', name: 'Stuti Pure Veg Restaurant', rating: '4.3', time: '15-20 mins', cuisine: 'Indian, Chinese, Biryani', location: 'Warangal', offer: '10% OFF ABOVE ₹699' },
    { id: 9, img: './assets/all-restaurants/grameen kulfi.avif', name: 'Grameen Kulfi', rating: '4.7', time: '20-25 mins', cuisine: 'Ice Cream, Desserts', location: 'Hanamkonda', offer: '60% OFF UPTO ₹110' },
    { id: 10, img: './assets/all-restaurants/the mirciesz.avif', name: 'The Mirchiesz', rating: '3.9', time: '20-25 mins', cuisine: 'Biryani, Chinese', location: 'Warangal', offer: '₹175 OFF ABOVE ₹399' },
    { id: 11, img: './assets/all-restaurants/sky family restaurant.avif', name: 'Skyla Family Restaurant', rating: '4.5', time: '30-35 mins', cuisine: 'South Indian, Chinese', location: 'Hanamkonda', offer: '₹125 OFF ABOVE ₹299' },
    { id: 12, img: './assets/all-restaurants/hotel thousand pillars.avif', name: 'Hotel Thousand Pillars', rating: '4.3', time: '30-35 mins', cuisine: 'Biryani, Continental, Kebabs', location: 'Hanamkonda', offer: '₹125 OFF ABOVE ₹299' }
];

  goToRestaurantDetail(id: number) {
    this.router.navigate(['/restaurant', id]);
  }
}
