import { Routes } from '@angular/router';
import { RestaurantMenusComponent } from './restaurant-menus/restaurant-menus.component';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { SearchfunctionalityComponent } from './searchfunctionality/searchfunctionality.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { FavoritesComponent } from './favorites/favorites.component';
export const routes: Routes = [
    { path: 'restaurant/:id', component: RestaurantMenusComponent } ,
    { path: 'food/:name', component: FoodDetailsComponent },
    {path : 'search', component : SearchfunctionalityComponent},
    {path : '' , component : HomeComponent},
    { path: 'signin', component: LoginComponent},
    {path : 'cart' , component: CartComponent},
    {path : 'fav' , component:FavoritesComponent}
];
