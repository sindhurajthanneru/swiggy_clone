import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-food-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent implements OnInit {
  food: any; 
  message: string = '';
  foods = [
    { img: './assets/whats-on-your-mind/idli.avif', name: 'Idli', cost: 40, description: 'Soft and fluffy steamed rice cakes.' },
    { img: 'assets/whats-on-your-mind/dosa.avif', name: 'Dosa', cost: 50, description: 'A delicious South Indian crepe.' },
    { img: 'assets/whats-on-your-mind/biryani.avif', name: 'Biryani', cost: 150, description: 'Fragrant rice dish with spices.' },
    { img: 'assets/whats-on-your-mind/vada.avif', name: 'Vada', cost: 30, description: 'Crispy and savory fried snack.' },
    { img: 'assets/whats-on-your-mind/parotta.avif', name: 'Parotta', cost: 60, description: 'Flaky layered flatbread popular in South India.' },
    { img: 'assets/whats-on-your-mind/pizza.avif', name: 'Pizza', cost: 200, description: 'Cheesy delight topped with various toppings.' },
    { img: 'assets/whats-on-your-mind/ice-cream.avif', name: 'Ice Cream', cost: 80, description: 'Creamy and chilled dessert.' },
    { img: 'assets/whats-on-your-mind/shawarma.avif', name: 'Shawarma', cost: 120, description: 'Middle Eastern wrap filled with juicy meat.' },
    { img: 'assets/whats-on-your-mind/shake.avif', name: 'Shake', cost: 90, description: 'Thick, creamy, and flavorful drink.' },
    { img: './assets/whats-on-your-mind/cakes.avif', name: 'Cakes', cost: 150, description: 'Moist and fluffy dessert, perfect for celebrations.' },
    { img: './assets/whats-on-your-mind/pure veg.avif', name: 'Pure Veg', cost: 100, description: 'Delicious vegetarian dishes.' },
    { img: './assets/whats-on-your-mind/rasmalai.avif', name: 'Rasmalai', cost: 70, description: 'Indian dessert made from paneer in sweetened milk.' },
    { img: './assets/whats-on-your-mind/gulab jamun.avif', name: 'Gulab Jamun', cost: 50, description: 'Soft dough balls soaked in sugar syrup.' },
    { img: './assets/whats-on-your-mind/noodles.avif', name: 'Noodles', cost: 60, description: 'Stir-fried noodles with vegetables and/or meat.' },
    { img: './assets/whats-on-your-mind/burgers.avif', name: 'Burgers', cost: 120, description: 'Juicy meat or veggie patty in a bun.' },
    { img: './assets/whats-on-your-mind/paratha.avif', name: 'Paratha', cost: 70, description: 'Layered flatbread, often stuffed with fillings.' },
    { img: './assets/whats-on-your-mind/pastry.avif', name: 'Pastry', cost: 60, description: 'Flaky, baked dessert with various fillings.' },
    { img: './assets/whats-on-your-mind/kebabs.avif', name: 'Kebabs', cost: 130, description: 'Grilled and spiced meat skewers.' },
    { img: './assets/whats-on-your-mind/khichidi.avif', name: 'Khichidi', cost: 45, description: 'Comforting dish made with rice and lentils.' },
    { img: './assets/whats-on-your-mind/salad.avif', name: 'Salad', cost: 40, description: 'Fresh mix of greens and vegetables.' }
  ];

  constructor(private route: ActivatedRoute, private cartService: CartService) {}

  ngOnInit(): void {
    const foodName = this.route.snapshot.paramMap.get('name');
    if (foodName) {
      this.food = this.foods.find(item => item.name.toLowerCase().trim() === foodName.toLowerCase().trim());
      console.log('Food found:', this.food);
    } else {
      console.log('Food name not found!');
    }
  }

  addToCart(food: any) {
    this.cartService.addToCart(food);
    this.message = 'Added to cart';
    console.log('Added to cart:', food);
  }
}
