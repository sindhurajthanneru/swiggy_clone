import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavsService {
  private favoriteItems: any[] = [];
  private favsKey = 'favoriteItems';

  constructor() {
    this.loadFavorites();
  }

  private loadFavorites() {
    const storedItems = localStorage.getItem(this.favsKey);
    if (storedItems) {
      this.favoriteItems = JSON.parse(storedItems);
    } else {
      this.favoriteItems = [];
    }
  }

  private saveFavorites() {
    localStorage.setItem(this.favsKey, JSON.stringify(this.favoriteItems));
    console.log('Saved to localStorage:', this.favoriteItems);
  }
  
  addToFavorites(item: any) {
    if (!this.isFavorite(item)) {
      console.log('Adding item to favorites:', item);
      this.favoriteItems.push(item);
      this.saveFavorites();
    }
  }

  getFavoriteItems() {
    return this.favoriteItems;
  }

  removeFromFavorites(index: number) {
    if (index >= 0 && index < this.favoriteItems.length) {
      this.favoriteItems.splice(index, 1);
      this.saveFavorites();
    }
  }

  isFavorite(item: any): boolean {
    return this.favoriteItems.some(fav => fav.id === item.id);
  }
}
