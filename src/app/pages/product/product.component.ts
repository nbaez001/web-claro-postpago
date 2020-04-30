import { Component, OnInit } from '@angular/core';
import { OtherProductListModel } from '../../models/other-product-list.model';
import { ConstantsService } from '../../services/constants.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  public otherProductsList: OtherProductListModel[];

  public showMoreProductsDropdown: boolean;

  public showModalityDropdown: boolean;
  public showPaymentTypeDropdown: boolean;
  public showPlanDropdown: boolean;

  constructor(private constants: ConstantsService) {
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
}
