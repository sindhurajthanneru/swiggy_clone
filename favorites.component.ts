import { Component } from '@angular/core';
import { FavsService } from '../favs.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  favoriteItems: any[] = [];
  totalCost: number = 0;

  constructor(private favsService: FavsService) {}

  ngOnInit(): void {
    this.favoriteItems = this.favsService.getFavoriteItems();
    this.calculateTotalFavorites();
  }

  calculateTotalFavorites() {
    this.totalCost = this.favoriteItems.reduce((sum, item) => sum + (item.cost || 0), 0);
  }

}
