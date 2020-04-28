import { Component, OnInit } from '@angular/core';
import { DeviceListModel } from '../../models/device-list.model';
import { FilterListModel } from '../../models/filter-list.model';

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

  constructor() {
    this.filterList = [
      {
        listId: 'lista',
        listName: 'MODALIDAD',
        options: [
          {
            id: 'portabilidad',
            label: 'Portabilidad',
          },
          {
            id: 'renovacion',
            label: 'Renovación',
          },
          {
            id: 'linea-nueva',
            label: 'Línea nueva',
          },
        ],
      },
      {
        listId: 'subcat',
        listName: 'CATEGORÍA',
        options: [
          {
            id: 'todos',
            label: 'Todos',
          },
          {
            id: 'samsung_galaxy_S20',
            label: 'Samsung Galaxy S20',
          },
          {
            id: 'nuevos_lanzamientos',
            label: 'Nuevos Lanzamientos',
          },
          {
            id: 'equipos_mas_vendidos',
            label: 'Los más vendidos',
          },
          {
            id: 'equipos_premium',
            label: 'Equipos Premium',
          },
          {
            id: 'Equipo_mas_accesorio_gratis',
            label: 'Equipo + Accesorio gratis',
          },
        ],
      },
      {
        listId: 'cuotas',
        listName: '¿CÓMO LO PAGO?',
        options: [
          {
            id: 'todos',
            label: 'Todos',
          },
          {
            id: 'acuerdo-18',
            label: 'Al contado',
          },
        ],
      },
      {
        listId: 'marca',
        listName: 'MARCAS',
        options: [
          {
            id: 'todos',
            label: 'Todos',
          },
          {
            id: 'Apple',
            label: 'Apple',
          },
          {
            id: 'Azumi',
            label: 'Azumi',
          },
          {
            id: 'Huawei',
            label: 'Huawei',
          },
          {
            id: 'LG',
            label: 'LG',
          },
          {
            id: 'Motorola',
            label: 'Motorola',
          },
          {
            id: 'Nokia',
            label: 'Nokia',
          },
          {
            id: 'Samsung',
            label: 'Samsung',
          },
          {
            id: 'Xiaomi',
            label: 'Xiaomi',
          },
          {
            id: 'ZTE',
            label: 'ZTE',
          },
        ],
      },
    ];

    this.deviceList = [
      {
        brand: 'Samsung',
        deviceName: 'Galaxy S20 Ultra + Galaxy Buds+',
        deviceImgSrc: 'https://static.claro.com.pe/img/ceq/Frontal_220x386_PostPago_acc_s20ultra.png',
        productUrl: '#',
        modality: 'Portabilidad',
        price: {
          paymentValue: 'S/ 4689',
          paymentType: 'Al contado',
        },
        plan: '189.90',
        onlyOnline: true,
      },
      {
        brand: 'Samsung',
        deviceName: 'Galaxy S20 Ultra + Galaxy Buds+',
        deviceImgSrc: 'https://static.claro.com.pe/img/ceq/Frontal_220x386_PostPago_acc_s20ultra.png',
        productUrl: '#',
        modality: 'Portabilidad',
        price: {
          paymentValue: 'S/ 4689',
          paymentType: 'Al contado',
        },
        plan: '189.90',
        onlyOnline: true,
      },
      {
        brand: 'Samsung',
        deviceName: 'Galaxy S20 Ultra + Galaxy Buds+',
        deviceImgSrc: 'https://static.claro.com.pe/img/ceq/Frontal_220x386_PostPago_acc_s20ultra.png',
        productUrl: '#',
        modality: 'Portabilidad',
        price: {
          paymentValue: 'S/ 4689',
          paymentType: 'Al contado',
        },
        plan: '189.90',
        onlyOnline: true,
      },
      {
        brand: 'Samsung',
        deviceName: 'Galaxy S20 Ultra + Galaxy Buds+',
        deviceImgSrc: 'https://static.claro.com.pe/img/ceq/Frontal_220x386_PostPago_acc_s20ultra.png',
        productUrl: '#',
        modality: 'Portabilidad',
        price: {
          paymentValue: 'S/ 4689',
          paymentType: 'Al contado',
        },
        plan: '189.90',
        onlyOnline: true,
      },
      {
        brand: 'Samsung',
        deviceName: 'Galaxy S20 Ultra + Galaxy Buds+',
        deviceImgSrc: 'https://static.claro.com.pe/img/ceq/Frontal_220x386_PostPago_acc_s20ultra.png',
        productUrl: '#',
        modality: 'Portabilidad',
        price: {
          paymentValue: 'S/ 4689',
          paymentType: 'Al contado',
        },
        plan: '189.90',
        onlyOnline: false,
      },
      {
        brand: 'Samsung',
        deviceName: 'Galaxy S20 Ultra + Galaxy Buds+',
        deviceImgSrc: 'https://static.claro.com.pe/img/ceq/Frontal_220x386_PostPago_acc_s20ultra.png',
        productUrl: '#',
        modality: 'Portabilidad',
        price: {
          paymentValue: 'S/ 4689',
          paymentType: 'Al contado',
        },
        plan: '189.90',
        onlyOnline: true,
      },
      {
        brand: 'Samsung',
        deviceName: 'Galaxy S20 Ultra + Galaxy Buds+',
        deviceImgSrc: 'https://static.claro.com.pe/img/ceq/Frontal_220x386_PostPago_acc_s20ultra.png',
        productUrl: '#',
        modality: 'Portabilidad',
        price: {
          paymentValue: 'S/ 4689',
          paymentType: 'Al contado',
        },
        plan: '189.90',
        onlyOnline: false,
      },
      {
        brand: 'Samsung',
        deviceName: 'Galaxy S20 Ultra + Galaxy Buds+',
        deviceImgSrc: 'https://static.claro.com.pe/img/ceq/Frontal_220x386_PostPago_acc_s20ultra.png',
        productUrl: '#',
        modality: 'Portabilidad',
        price: {
          paymentValue: 'S/ 4689',
          paymentType: 'Al contado',
        },
        plan: '189.90',
        onlyOnline: true,
      },
      {
        brand: 'Samsung',
        deviceName: 'Galaxy S20 Ultra + Galaxy Buds+',
        deviceImgSrc: 'https://static.claro.com.pe/img/ceq/Frontal_220x386_PostPago_acc_s20ultra.png',
        productUrl: '#',
        modality: 'Portabilidad',
        price: {
          paymentValue: 'S/ 4689',
          paymentType: 'Al contado',
        },
        plan: '189.90',
        onlyOnline: false,
      },
      {
        brand: 'Samsung',
        deviceName: 'Galaxy S20 Ultra + Galaxy Buds+',
        deviceImgSrc: 'https://static.claro.com.pe/img/ceq/Frontal_220x386_PostPago_acc_s20ultra.png',
        productUrl: '#',
        modality: 'Portabilidad',
        price: {
          paymentValue: 'S/ 4689',
          paymentType: 'Al contado',
        },
        plan: '189.90',
        onlyOnline: true,
      },
      {
        brand: 'Samsung',
        deviceName: 'Galaxy S20 Ultra + Galaxy Buds+',
        deviceImgSrc: 'https://static.claro.com.pe/img/ceq/Frontal_220x386_PostPago_acc_s20ultra.png',
        productUrl: '#',
        modality: 'Portabilidad',
        price: {
          paymentValue: 'S/ 4689',
          paymentType: 'Al contado',
        },
        plan: '189.90',
        onlyOnline: false,
      },
      {
        brand: 'Samsung',
        deviceName: 'Galaxy S20 Ultra + Galaxy Buds+',
        deviceImgSrc: 'https://static.claro.com.pe/img/ceq/Frontal_220x386_PostPago_acc_s20ultra.png',
        productUrl: '#',
        modality: 'Portabilidad',
        price: {
          paymentValue: 'S/ 4689',
          paymentType: 'Al contado',
        },
        plan: '189.90',
        onlyOnline: true,
      },
    ];
  }

  ngOnInit(): void {}
}
