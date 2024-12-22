import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  isSignUp: boolean = false;
  errorMessage: string = '';
  successMessage: string = '';
  isLoading: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  toggleMode() {
    this.isSignUp = !this.isSignUp;
    this.errorMessage = '';
    this.successMessage = '';
  }

  onSubmit() {
    this.isLoading = true;
    const user = { email: this.email, password: this.password };

    if (this.isSignUp) {
      this.http.post('https://67186a18b910c6a6e02c02d3.mockapi.io/emails', user)
        .subscribe({
          next: (response) => {
            this.successMessage = 'Successfully signed up';
            this.isSignUp = false;
            this.clearForm();
            this.isLoading = false;
          },
          error: (error) => {
            console.error('Sign-Up Error:', error);
            this.errorMessage = 'Sign-Up failed. Please try again.';
            this.isLoading = false;
          }
        });
    } else {
      // Sign-In Logic
      this.http.get<any[]>('https://67186a18b910c6a6e02c02d3.mockapi.io/emails')
        .subscribe({
          next: (users) => {
            this.successMessage = 'Successfully signed in';
            const userExists = users.find(
              user => user.email === this.email && user.password === this.password
            );
            if (userExists) {
              this.authService.login(this.email);
              this.router.navigate(['/']);
              this.clearForm();
            } else {
              this.errorMessage = 'Invalid user details';
            }
            this.isLoading = false;
          },
          error: (error) => {
            console.error('Sign-In Error:', error);
            this.errorMessage = 'Sign-In failed. Please try again.';
            this.isLoading = false;
          }
        });
    }
  }

  clearForm() {
    this.email = '';
    this.password = '';
  }
}
