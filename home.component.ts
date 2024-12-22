import { Component } from '@angular/core';
import { WhatsOnYourMindComponent } from "../whats-on-your-mind/whats-on-your-mind.component";
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TopRestaurantsComponent } from '../top-restaurants/top-restaurants.component';
import { FooterComponent } from '../footer/footer.component';
import { SwiggyBannerComponent } from '../swiggy-banner/swiggy-banner.component';
import { CuisinesComponent } from "../cuisines/cuisines.component";
import { PlacesComponent } from "../places/places.component";
import { NavbarComponent } from '../navbar/navbar.component';
import { AllRestaurantsComponent } from "../all-restaurants/all-restaurants.component";
import { FoodDetailsComponent } from '../food-details/food-details.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WhatsOnYourMindComponent, FormsModule, CommonModule, MatIconModule, TopRestaurantsComponent,
    FooterComponent, SwiggyBannerComponent, CuisinesComponent, PlacesComponent, NavbarComponent, AllRestaurantsComponent,FoodDetailsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
