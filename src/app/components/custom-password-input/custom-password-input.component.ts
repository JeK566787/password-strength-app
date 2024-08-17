import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormsModule } from '@angular/forms';

@Component({
    selector: 'app-custom-password-input',
    standalone: true,
    templateUrl: './custom-password-input.component.html',
    styleUrls: ['./custom-password-input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CustomPasswordInputComponent),
            multi: true
        }
    ],
    imports: [FormsModule]
})
export class CustomPasswordInputComponent implements ControlValueAccessor {
    password: string = '';

    onChange = (value: any) => { };
    onTouched = () => { };

    writeValue(value: any): void {
        this.password = value;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    // setDisabledState?(isDisabled: boolean): void {

    // }

    onInputChange(event: Event): void {
        const inputElement = event.target as HTMLInputElement;
        this.password = inputElement.value;
        this.onChange(inputElement.value);
    }

}
