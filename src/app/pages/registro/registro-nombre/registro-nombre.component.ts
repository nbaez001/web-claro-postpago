import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro-nombre.component.html',
  styleUrls: ['./registro-nombre.component.scss'],
})
export class RegistroNombreComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  /**
   *
   */
  public registroDetalle() {
    this.router.navigateByUrl('paso-2');
  }
}
