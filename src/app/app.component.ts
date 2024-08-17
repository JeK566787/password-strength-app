import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CustomPasswordInputComponent } from './components/custom-password-input/custom-password-input.component';
import { PasswordStrengthIndicatorComponent } from './components/password-strength-indicator/password-strength-indicator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [ReactiveFormsModule, CustomPasswordInputComponent, PasswordStrengthIndicatorComponent]
})
export class AppComponent {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      password: new FormControl('')
    });
  }
}
