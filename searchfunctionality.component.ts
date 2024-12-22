import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-searchfunctionality',
  standalone: true,
  imports: [NgFor,FormsModule],
  templateUrl: './searchfunctionality.component.html',
  styleUrl: './searchfunctionality.component.css'
})
export class SearchfunctionalityComponent {
  searchQuery: string = '';
  items = [
    { img: './assets/whats-on-your-mind/biryani.avif' ,name: 'biryani'},
    { img: './assets/whats-on-your-mind/ice-cream.avif' ,name:'ice cream'},
    { img: './assets/whats-on-your-mind/shawarma.avif' ,name:'Shawarma'},
    { img: './assets/whats-on-your-mind/shake.avif',name:'Shake' },
    { img: './assets/whats-on-your-mind/cakes.avif' ,name:'Cakes'},
    { img: './assets/whats-on-your-mind/rasmalai.avif',name:'Rasmalai' },
    { img: './assets/whats-on-your-mind/gulab jamun.avif',name:'Gulab Jamun'},
    { img: './assets/whats-on-your-mind/noodles.avif' ,name:'Noodles'},
    { img: './assets/whats-on-your-mind/burgers.avif',name:'Burgers' },
  ];

  get filteredItems() {
    return this.items.filter(item =>
      item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
  
}
