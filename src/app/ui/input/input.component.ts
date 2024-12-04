import { Component, input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputComponent,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  type = input.required<string>();
  placeholder = input<string>('');
  id = input<string>('');
  name = input<string>('');

  protected value = '';
  protected disabled = false;

  onChange!: (value: string) => void;
  onTouched!: (value: boolean) => void;

  protected updateValue(event: KeyboardEvent): void {
    const newValue = (event.target as HTMLInputElement).value;
    this.onChange(newValue);
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(onChange: (value: string) => void): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: (value: boolean) => void): void {
    this.onTouched = onTouched;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }
}
