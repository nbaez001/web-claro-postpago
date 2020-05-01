import { Injectable } from '@angular/core';
import { DeviceListModel } from '../models/device-list.model';
import { FilterListModel } from '../models/filter-list.model';
import { MenuHeaderListModel } from '../models/menu-header-list.model';
import { OtherProductListModel } from '../models/other-product-list.model';

@Injectable({
  providedIn: 'root',
})
export class ConstantsService {
  // Header Component
  public HEADER_MENU_LIST_DATA: MenuHeaderListModel[] = [
    {
      itemId: 'chipinternet',
      itemLabel: 'Chips Internet',
      itemUrl: '/',
      itemFA: 'fas fa-sim-card',
    },
    {
      itemId: 'hogar',
      itemLabel: 'Hogar',
      itemUrl: '/',
      itemFA: 'fas fa-home',
    },
    {
      itemId: 'prepago',
      itemLabel: 'Prepagos',
      itemUrl: '/',
      itemFA: 'fas fa-mobile-alt',
    },
    {
      itemId: 'celulares',
      itemLabel: 'Postpagos',
      itemUrl: '/',
      itemFA: 'fas fa-mobile-alt',
    },
    {
      itemId: 'accesorios',
      itemLabel: 'Accesorios',
      itemUrl: '/',
      itemFA: 'fas fa-headphones-alt',
    },
    {
      itemId: 'compra_de_paquetes',
      itemLabel: 'Paquetes',
      itemUrl: '/',
      itemFA: 'fas fa-box-open',
    },
    {
      itemId: 'recargas',
      itemLabel: 'Recargas',
      itemUrl: '/',
      itemFA: 'fas fa-mobile-alt',
    },
  ];

  // Footer Component

  // Home Component
  public HOME_FILTER_LIST_DATA: FilterListModel[] = [
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
  public HOME_DEVICE_LIST_DATA: DeviceListModel[] = [
    {
      brand: 'Samsung',
      deviceName: 'Galaxy S20 Ultra + Galaxy Buds+',
      deviceImgSrc: 'https://static.claro.com.pe/img/ceq/Frontal_220x386_PostPago_acc_s20ultra.png',
      productUrl: '/product',
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
      productUrl: '/product',
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
      productUrl: '/product',
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
      productUrl: '/product',
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
      productUrl: '/product',
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
      productUrl: '/product',
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
      productUrl: '/product',
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
      productUrl: '/product',
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
      productUrl: '/product',
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
      productUrl: '/product',
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
      productUrl: '/product',
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
      productUrl: '/product',
      modality: 'Portabilidad',
      price: {
        paymentValue: 'S/ 4689',
        paymentType: 'Al contado',
      },
      plan: '189.90',
      onlyOnline: true,
    },
  ];

  // Product Component
  public PRODUCT_OTHER_PRODUCTS_LIST_DATA: OtherProductListModel[] = [
    {
      productName: 'IFI 20Mbps | Internet Fijo Inalámbrico',
      productImgSrc: 'https://static.claro.com.pe/img/otros/vista01_IFI_vEE22804.png',
      productUrl: '#',
    },
    {
      productName: 'IFI 20Mbps UP |Internet Fijo Inalámbrico',
      productImgSrc: 'https://static.claro.com.pe/img/otros/vista01_IFI_vEE22804.png',
      productUrl: '#',
    },
    {
      productName: 'Router OLO Portatil MF920V',
      productImgSrc: 'https://static.claro.com.pe/img/otros/vista1_ZTE_RouterMF920V_BONO_2804.png',
      productUrl: '#',
    },
    {
      productName: 'Moto G8 Plus 64GB',
      productImgSrc: 'https://static.claro.com.pe/img/ceq/img_front_moto_G8Plus_postpago_220x38602220212.png',
      productUrl: '#',
    },
    {
      productName: 'IFI 15Mbps UP |Internet Fijo Inalámbrico',
      productImgSrc: 'https://static.claro.com.pe/img/otros/vista01_IFI_vEE22804.png',
      productUrl: '#',
    },
    {
      productName: 'MOTO G7 Plus 64GB',
      productImgSrc: 'https://static.claro.com.pe/img/ceq/G7_Plus_Frontal_20350.png',
      productUrl: '#',
    },
  ];

  constructor() {}
}
