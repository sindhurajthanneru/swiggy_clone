import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = false;
  private email: string | null = null;

  login(email: string): void {
    this.loggedIn = true;
    this.email = email;
  }

  logout(): void {
    this.loggedIn = false;
    this.email = null;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  getEmail(): string | null {
    return this.email;
  }
}
