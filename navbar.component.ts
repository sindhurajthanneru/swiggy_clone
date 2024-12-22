import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports:[NgIf],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  username: string | null = null;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.username = this.authService.getEmail();
  }

  goToSearch(): void {
    this.router.navigate(['/search']);
  }

  goToSignIn(): void {
    this.router.navigate(['/signin']);
  }
  goToCart(): void {
    this.router.navigate(['/cart']);
  }
  goToFav():void{
    this.router.navigate(['/fav']);
  }
}
