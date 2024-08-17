import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class PasswordStrengthService {
    calculateStrength(password: string): string[] {
        const hasLetters = /[a-zA-Z]/.test(password);
        const hasDigits = /\d/.test(password);
        const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        if (password.length === 0) {
            return ['gray', 'gray', 'gray'];
        } else if (password.length < 8) {
            return ['red', 'red', 'red'];
        } else if (hasLetters && hasDigits && hasSymbols) {
            return ['green', 'green', 'green'];
        } else if ((hasLetters && hasDigits) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols)) {
            return ['yellow', 'yellow', 'gray'];
        } else {
            return ['red', 'gray', 'gray'];
        }
    }
}
