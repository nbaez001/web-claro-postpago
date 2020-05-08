import { Component, OnInit } from '@angular/core';
import { DeviceListModel } from 'src/app/models/device-list.model';
import { ConstantsService } from 'src/app/services/constants.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MarcaModel } from 'src/app/models/marca-list.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public marcas: MarcaModel[];
  public masBuscados: DeviceListModel[];
  public tiendaHuawei: DeviceListModel[];
  public nuevosLanzamientos: DeviceListModel[];
  public hogar: DeviceListModel[];
  public opciones: any[];

  customOptions: OwlOptions = {
    loop: true,
    autoplay: false,
    autoplayHoverPause: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 1500,
    smartSpeed: 1500,
    navText: ['', ''],
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 2,
      },
      740: {
        items: 2,
      },
      1200: {
        items: 4,
      },
    },
  };

  constructor(private constants: ConstantsService) {
    this.masBuscados = constants.HOME_MAS_BUSCADOS_DATA;
    this.tiendaHuawei = constants.HOME_DEVICE_LIST_DATA.slice(1, 7);
    this.marcas = constants.HOME_MARCA_LIST_DATA;
    this.nuevosLanzamientos = constants.HOME_DEVICE_LIST_DATA.slice(1, 4);
    this.hogar = constants.HOME_DEVICE_LIST_DATA.slice(1, 4);
    this.opciones = constants.HOME_OPIONES_DATA;
  }

  ngOnInit(): void {}
}
