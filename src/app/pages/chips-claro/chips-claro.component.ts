import { Component, OnInit } from '@angular/core';
import { FilterListModel } from 'src/app/models/filter-list.model';
import { ConstantsService } from 'src/app/services/constants.service';
import { DeviceListModel } from 'src/app/models/device-list.model';

@Component({
  selector: 'app-chips-claro',
  templateUrl: './chips-claro.component.html',
  styleUrls: ['./chips-claro.component.scss'],
})
export class ChipsClaroComponent implements OnInit {
  public filterList: FilterListModel[];
  public listaChips: DeviceListModel[];
  public showTermsDetail: boolean;

  constructor(private constants: ConstantsService) {
    this.showTermsDetail = false;
    this.filterList = constants.CHIPS_SIDEBAR_LIST_DATA;
    this.listaChips = constants.CHIPS_LIST_DATA;
  }

  ngOnInit(): void {}
}
