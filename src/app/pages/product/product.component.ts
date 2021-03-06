import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { OtherProductListModel } from '../../models/other-product-list.model';
import { ConstantsService } from '../../services/constants.service';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
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

  constructor(private constants: ConstantsService, private router: Router, private util: UtilService) {
    this.otherProductsList =
      window.innerWidth >= 1280 ? constants.PRODUCT_OTHER_PRODUCTS_LIST_DATA : constants.PRODUCT_OTHER_PRODUCTS_LIST_DATA.slice(0, 3);

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
    this.router.navigateByUrl('/registro/paso-1');
  }

  public redirectToUrl(url: string) {
    this.util.redirectToUrl(url);
  }
}
