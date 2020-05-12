import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WindowScrollingService {
  private readonly styleTag: HTMLStyleElement;

  constructor() {
    this.styleTag = WindowScrollingService.buildStyleElement();
  }

  private static buildStyleElement(): HTMLStyleElement {
    const style = document.createElement('style');

    style.addEventListener('touchstart', () => {}, { passive: true });

    style.textContent = `
			body {
				overflow: hidden !important ;
			}
		`;

    return style;
  }

  public disable(): void {
    document.body.appendChild(this.styleTag);
  }

  public enable(): void {
    document.body.removeChild(this.styleTag);
  }
}
