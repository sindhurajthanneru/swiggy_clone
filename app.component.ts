import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WhatsOnYourMindComponent } from "./whats-on-your-mind/whats-on-your-mind.component";
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TopRestaurantsComponent } from './top-restaurants/top-restaurants.component';
import { FooterComponent } from './footer/footer.component';
import { SwiggyBannerComponent } from './swiggy-banner/swiggy-banner.component';
import { CuisinesComponent } from "./cuisines/cuisines.component";
import { PlacesComponent } from "./places/places.component";
import { NavbarComponent } from './navbar/navbar.component';
import { AllRestaurantsComponent } from "./all-restaurants/all-restaurants.component";
import { SearchfunctionalityComponent } from "./searchfunctionality/searchfunctionality.component";
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WhatsOnYourMindComponent, FormsModule, CommonModule, MatIconModule, TopRestaurantsComponent,
    FooterComponent, SwiggyBannerComponent, CuisinesComponent, PlacesComponent, NavbarComponent, AllRestaurantsComponent, 
    SearchfunctionalityComponent,LoginComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Swiggy-Clone';
}
