import { Component, effect, ElementRef, input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-button, button[appButton], a[appButton]',
  imports: [],
  template: `
    <ng-content />
  `,
  styles: `
    :host {
      @apply inline-block cursor-pointer rounded px-6 py-4 bg-[#EC6724] text-[#FFFFFF] text-base font-bold;

      &:hover {
        @apply bg-[#31373A];
      }
    }
  `,
})
export class ButtonComponent {
  disabled = input<boolean>(false);

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef<HTMLButtonElement>,
  ) {
    effect(() => {
      if (this.disabled()) {
        this.renderer.addClass(this.elementRef.nativeElement, 'disabled');
      } else {
        this.renderer.removeClass(this.elementRef.nativeElement, 'disabled');
      }
    });
  }

}
