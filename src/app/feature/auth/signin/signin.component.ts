import { Component } from '@angular/core';
import { ButtonComponent } from '../../../ui/button/button.component';
import { InputComponent } from '../../../ui/input/input.component';

@Component({
  selector: 'app-signin',
  imports: [
    ButtonComponent,
    InputComponent,
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
})
export class SigninComponent {

}
