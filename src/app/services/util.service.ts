import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor(private router: Router) {}

  /**
   * Realiza la navegación dependiendo si es una ruta Angular o un link externo.
   * @param url Ruta de navegación.
   */
  public redirectToUrl(url: string) {
    if (url.includes('http')) {
      window.location.href = url;
    } else {
      this.router.navigate([url]);
    }
  }
}
