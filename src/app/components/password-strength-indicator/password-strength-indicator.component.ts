import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordStrengthService } from '../../services/password-strength.service';

@Component({
  selector: 'app-password-strength-indicator',
  standalone: true,
  templateUrl: './password-strength-indicator.component.html',
  styleUrls: ['./password-strength-indicator.component.scss'],
  imports: [CommonModule],
})
export class PasswordStrengthIndicatorComponent {
  @Input() password: string = '';

  constructor(private passwordStrengthService: PasswordStrengthService) { }

  getStrength() {
    return this.passwordStrengthService.calculateStrength(this.password);
  }
}
