import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PasswordStrengthComponent } from './password-strength/password-strength.component'
import { NgModel } from '@angular/forms'; // Ensure to import NgModel if necessary

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PasswordStrengthComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'password-strength-app';
}
