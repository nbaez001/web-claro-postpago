import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { OtherProductListModel } from 'src/app/models/other-product-list.model';
import { ConstantsService } from 'src/app/services/constants.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
})
export class ChipsComponent implements OnInit {
  public otherProductsList: OtherProductListModel[];

  public showMoreProductsDropdown: boolean;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    autoplay: true,
    autoplaySpeed: 400,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  };

  public showModalityDropdown: boolean;
  public showPaymentTypeDropdown: boolean;
  public showPlanDropdown: boolean;

  constructor(private constants: ConstantsService, private router: Router) {
    this.otherProductsList =
      window.innerWidth >= 1280
        ? constants.PRODUCT_CHIPS_OTHER_PRODUCTS_LIST_DATA
        : constants.PRODUCT_CHIPS_OTHER_PRODUCTS_LIST_DATA.slice(0, 3);

    this.showMoreProductsDropdown = false;

    this.showModalityDropdown = false;
    this.showPaymentTypeDropdown = false;
    this.showPlanDropdown = false;
  }

  ngOnInit(): void {}

  public toggleProductsDropdown() {
    this.showMoreProductsDropdown = !this.showMoreProductsDropdown;
  }

  public toggleModalityDropdown() {
    this.showModalityDropdown = !this.showModalityDropdown;
  }

  public togglePaymentTypeDropdown() {
    this.showPaymentTypeDropdown = !this.showPaymentTypeDropdown;
  }

  public togglePlanDropdown() {
    this.showPlanDropdown = !this.showPlanDropdown;
  }

  public registroPersona() {
    this.router.navigateByUrl('paso-1');
  }
}
