import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet],
  template: `
    <div class="app-container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: `
    :host {
      @apply block h-full w-full;
      .app-container {
        @apply container flex items-center mx-auto py-2 px-4;
        min-height: 100dvh;
      }
    }
  `,
})
export class AuthLayoutComponent {
}
