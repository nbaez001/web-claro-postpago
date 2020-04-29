import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public showTermsDetail: boolean;

  constructor() {
    this.showTermsDetail = false;
  }

  ngOnInit(): void {}

  public toggleTermsDetail() {
    this.showTermsDetail = !this.showTermsDetail;
  }
}
