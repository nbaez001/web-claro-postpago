import { Component, OnInit } from '@angular/core';
import { DeviceListModel } from '../../models/device-list.model';
import { FilterListModel } from '../../models/filter-list.model';
import { ConstantsService } from '../../services/constants.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // Lista de filtros para el sidebar
  public filterList: FilterListModel[];

  // Lista de dispositivos para el catalogo
  public deviceList: DeviceListModel[];

  public showFilterList: boolean;
  public innerWidth: any;

  constructor(private constants: ConstantsService) {
    this.filterList = constants.HOME_FILTER_LIST_DATA;
    this.deviceList = constants.HOME_DEVICE_LIST_DATA;
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.showFilterList = this.innerWidth >= 1280;
  }

  public toggleFilterList() {
    this.showFilterList = !this.showFilterList;
  }
}
