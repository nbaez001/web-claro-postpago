import { Injectable } from '@angular/core';
import { DeviceListModel } from '../models/device-list.model';
import { FilterListModel } from '../models/filter-list.model';
import { MarcaModel } from '../models/marca-list.model';
import { MenuHeaderListModel } from '../models/menu-header-list.model';
import { OtherProductListModel } from '../models/other-product-list.model';

@Injectable({
  providedIn: 'root',
})
export class ConstantsService {
  // Header Component
  public HEADER_MENU_LIST_DATA: MenuHeaderListModel[] = [
    {
      itemId: 'internetolo',
      itemLabel: 'Internet OLO',
      itemUrl: '/',
      itemFA: 'fas fa-sim-card',
    },
    {
      itemId: 'hogar',
      itemLabel: 'Hogar',
      itemUrl: '/hogar',
      itemFA: 'fas fa-catalog',
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
      itemUrl: '/catalog',
      itemFA: 'fas fa-mobile-alt',
    },
    {
      itemId: 'accesorios',
      itemLabel: 'Accesorios',
      itemUrl: '/accesorios',
      itemFA: 'fas fa-headphones-alt',
    },
    {
      itemId: 'chipinternet',
      itemLabel: 'Chips Claro',
      itemUrl: '/chips-claro',
      itemFA: 'fas fa-sim-card',
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

  // HOME COMPONENT
  public HOME_CAROUSEL_LIST_DATA: any[] = [
    {
      id: '1',
      src: 'https://static.claro.com.pe/img/otros/Banner_Catalogo_MAsinnuevo_Desktop_1920x595.jpg',
      src2: 'https://static.claro.com.pe/img/otros/Banner_Catalogo_MasinnuevoMovil_360x431.jpg',
      alt: 'imagen1',
      titulo: 'IMAGEN 1',
    },
    {
      id: '2',
      src: 'https://static.claro.com.pe/img/otros/Banner_Catalogo_Apple_Watch_Desktop_1920x595.jpg',
      src2: 'https://static.claro.com.pe/img/otros/Banner_Catalogo_Apple_Watch_Movil_360x431_v3.jpg',
      alt: 'imagen2',
      titulo: 'IMAGEN 2',
    },
    {
      id: '3',
      src: 'https://static.claro.com.pe/img/otros/thumbnail_Banner-Catalogo_Recargas_Desktop_1920x595_v31420 copia.jpg',
      src2: 'https://static.claro.com.pe/img/otros/Banner Tienda Postpago_360x431.jpg',
      alt: 'imagen3',
      titulo: 'IMAGEN 3',
    },
    {
      id: '4',
      src: 'https://static.claro.com.pe/img/otros/bannerIFI_desk_249.jpg',
      src2: 'https://static.claro.com.pe/img/otros/bannerIFI_movil_249.jpg',
      alt: 'imagen4',
      titulo: 'IMAGEN 4',
    },
    {
      id: '5',
      src: 'https://static.claro.com.pe/img/otros/banner-chip-desk_1005.jpg',
      src2: 'https://static.claro.com.pe/img/otros/banner-chip-movibanner0105.jpg',
      alt: 'imagen5',
      titulo: 'IMAGEN 5',
    },
    {
      id: '6',
      src: 'https://static.claro.com.pe/img/otros/Banner-Catalogo_OLO_Desktop_1920x595_v7_2104_v2mayo01.jpg',
      src2: 'https://static.claro.com.pe/img/otros/Banner-Catalogo_OLO_Mobile_360x431_v6.jpg',
      alt: 'imagen6',
      titulo: 'IMAGEN 6',
    },
    {
      id: '7',
      src: 'https://static.claro.com.pe/img/otros/Banner_Landing_CHIP_Desktop_1920x480_v3_0405.jpg',
      src2: 'https://static.claro.com.pe/img/otros/banner_Chip_movilOLO.jpg',
      alt: 'imagen7',
      titulo: 'IMAGEN 7',
    },
    {
      id: '8',
      src: 'https://static.claro.com.pe/img/otros/Banner_Catalogo_AirTies_28mayo01.jpg',
      src2: 'https://static.claro.com.pe/img/otros/IMG-20200424-WA0148.jpg',
      alt: 'imagen8',
      titulo: 'IMAGEN 8',
    },
  ];

  public HOME_MARCA_LIST_DATA: MarcaModel[] = [
    { nombre: 'apple', marcaUrl: 'https://static.claro.com.pe/img/otros/logo-apple-claro.jpg' },
    { nombre: 'huawei', marcaUrl: 'https://static.claro.com.pe/img/otros/logo-huawei-claro.jpg' },
    { nombre: 'lg', marcaUrl: 'https://static.claro.com.pe/img/otros/logo-lg-claro.jpg' },
    { nombre: 'motorola', marcaUrl: 'https://static.claro.com.pe/img/otros/logo-motorola-claro.jpg' },
    { nombre: 'samsung', marcaUrl: 'https://static.claro.com.pe/img/otros/logo-samsung-claro.jpg' },
    { nombre: 'xiaomi', marcaUrl: 'https://static.claro.com.pe/img/otros/logo-xiaomi_hz-claro.jpg' },
    { nombre: 'zte', marcaUrl: 'https://static.claro.com.pe/img/otros/logo-zte-claro.jpg' },
  ];

  public HOME_MAS_BUSCADOS_DATA: DeviceListModel[] = [
    {
      brand: '',
      deviceName: 'Internet Fijo Inalambrico',
      deviceImgSrc: 'https://static.claro.com.pe/img/otros/img_home_Tienda_02-IFI.png',
      productUrl: '/product',
      modality: '',
      price: null,
      plan: null,
      onlyOnline: true,
    },
    {
      brand: '',
      deviceName: 'WiFi 360°',
      deviceImgSrc: 'https://static.claro.com.pe/img/otros/img_home_Tienda_03-AirTiesx2_28.png',
      productUrl: '/product',
      modality: '',
      price: null,
      plan: null,
      onlyOnline: true,
    },
    {
      brand: '',
      deviceName: 'Router OLO Portátil prepago',
      deviceImgSrc: 'https://static.claro.com.pe/img/otros/img_home_Tienda_02-OLOHOME_28.png',
      productUrl: '/product',
      modality: '',
      price: null,
      plan: null,
      onlyOnline: true,
    },
    {
      brand: '',
      deviceName: 'Claro Recargas',
      deviceImgSrc: 'https://static.claro.com.pe/img/otros/img_home_Tienda_01-Recarga.png',
      productUrl: '/product',
      modality: '',
      price: null,
      plan: null,
      onlyOnline: true,
    },
  ];

  public HOME_TIENDA_HUAWEI_DATA: DeviceListModel[] = [
    {
      brand: 'Huawei',
      deviceName: 'Audífonos Freebuds Lite - Negro',
      deviceImgSrc: 'https://static.claro.com.pe/img/marketplace/huawei/FBLITENEGRO/1.png',
      productUrl: '/product',
      modality: 'Market Place',
      price: {
        paymentValue: 'S/ 369',
        paymentType: 'Al contado',
      },
      plan: null,
      onlyOnline: false,
    },
    {
      brand: 'Huawei',
      deviceName: 'Smartwatch Huawei Watch GT2 - Elite 46mm - Titanium Gray',
      deviceImgSrc: 'https://static.claro.com.pe/img/marketplace/huawei/LATONAMETAL/5.png',
      productUrl: '/product',
      modality: 'Market Place',
      price: {
        paymentValue: 'S/ 899',
        paymentType: 'Al contado',
      },
      plan: null,
      onlyOnline: false,
    },
    {
      brand: 'Huawei',
      deviceName: 'Sport Bluetooh Headphones Lite - Rojo',
      deviceImgSrc: 'https://static.claro.com.pe/img/marketplace/huawei/AM61ROJO/2.png',
      productUrl: '/product',
      modality: 'Market Place',
      price: {
        paymentValue: 'S/ 139',
        paymentType: 'Al contado',
      },
      plan: null,
      onlyOnline: false,
    },
    {
      brand: 'Huawei',
      deviceName: 'Audifonos Clasicos Tipo C - Negro',
      deviceImgSrc: 'https://static.claro.com.pe/img/marketplace/huawei/CM33NEGRO/3.png',
      productUrl: '/product',
      modality: 'Market Place',
      price: {
        paymentValue: 'S/ 69',
        paymentType: 'Al contado',
      },
      plan: null,
      onlyOnline: false,
    },
    {
      brand: 'Huawei',
      deviceName: 'SuperCharge Car Charger',
      deviceImgSrc: 'https://static.claro.com.pe/img/marketplace/huawei/AP38/2.png',
      productUrl: '/product',
      modality: 'Market Place',
      price: {
        paymentValue: 'S/ 109',
        paymentType: 'Al contado',
      },
      plan: null,
      onlyOnline: false,
    },
    {
      brand: 'Huawei',
      deviceName: 'Talkband B5 Watch Smartband - Mocha Brown',
      deviceImgSrc: 'https://static.claro.com.pe/img/marketplace/huawei/TALKBANDB5MARRON/4.png',
      productUrl: '/product',
      modality: 'Market Place',
      price: {
        paymentValue: 'S/ 499',
        paymentType: 'Al contado',
      },
      plan: null,
      onlyOnline: false,
    },
    {
      brand: 'Huawei',
      deviceName: 'Smartwatch Huawei Watch GT2 - 42mm - Refined Gold',
      deviceImgSrc: 'https://static.claro.com.pe/img/marketplace/huawei/DIANAMETAL/5.png',
      productUrl: '/product',
      modality: 'Market Place',
      price: {
        paymentValue: 'S/ 849',
        paymentType: 'Al contado',
      },
      plan: null,
      onlyOnline: false,
    },
    {
      brand: 'Huawei',
      deviceName: 'Audífonos Freebuds Lite - Negro',
      deviceImgSrc: 'https://static.claro.com.pe/img/marketplace/huawei/FBLITENEGRO/1.png',
      productUrl: '/product',
      modality: 'Market Place',
      price: {
        paymentValue: 'S/ 369',
        paymentType: 'Al contado',
      },
      plan: null,
      onlyOnline: false,
    },
  ];

  public HOME_OPIONES_DATA: any[] = [
    { nombre: 'Para el Hogar', descripcion: 'Internet + TV + Telefonía Fija', src: 'https://static.claro.com.pe/img/otros/portar.svg' },
    {
      nombre: 'Chip Internet',
      descripcion: 'Conéctate a internet de forma rapida y segura',
      src: 'https://static.claro.com.pe/img/otros/portar.svg',
    },
    {
      nombre: 'Portar',
      descripcion: 'Trae tu linea a Claro y mantén tu mismo numero',
      src: 'https://static.claro.com.pe/img/otros/portar.svg',
    },
    { nombre: 'Renovar', descripcion: 'Si ya eres cliente renueva tu equipo', src: 'https://static.claro.com.pe/img/otros/renovar.svg' },
    {
      nombre: 'Prepago',
      descripcion: 'Prepago chévere, Compra tu prepago aquí.',
      src: 'https://static.claro.com.pe/img/otros/prepagos.svg',
    },
    {
      nombre: 'Accesorios',
      descripcion: 'Tenemos los accesorios mas cheveres para ti',
      src: 'https://static.claro.com.pe/img/otros/accesorios.svg',
    },
  ];

  // Home Component
  public HOGAR_LIST_DATA: FilterListModel[] = [
    {
      listId: 'lista',
      listName: 'MODALIDAD',
      options: [
        {
          id: 'hogar-inalambrico',
          label: 'Hogar Inalámbrico',
        },
        {
          id: 'hogar',
          label: 'Hogar',
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
          id: 'internet-fijo-inalambrico',
          label: 'Internet Fijo Inalámbrico',
        },
        {
          id: 'router-portatil-olo',
          label: 'Router Portátil OLO',
        },
        {
          id: 'wiffi-360',
          label: 'WiFi 360°',
        },
        {
          id: '3-play',
          label: '3 Play',
        },
        {
          id: '2-play',
          label: '2 Play',
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
          id: 'al-contado',
          label: 'Al contado',
        },
        {
          id: 'pago-mensual',
          label: 'Pago Mensual',
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
          id: 'AirTies',
          label: 'AirTies',
        },
        {
          id: 'Claro',
          label: 'Claro',
        },
        {
          id: 'Nova',
          label: 'Nova',
        },
        {
          id: 'ZTE',
          label: 'ZTE',
        },
      ],
    },
  ];

  public ACCESORIO_LIST_DATA: FilterListModel[] = [
    {
      listId: 'lista',
      listName: 'MODALIDAD',
      options: [
        {
          id: 'accesorios',
          label: 'Accesorios',
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
          id: 'internet-fijo-inalambrico',
          label: 'Apple Watch Series 5',
        },
        {
          id: 'router-portatil-olo',
          label: 'Audífonos',
        },
        {
          id: 'wiffi-360',
          label: 'Baterias Externas',
        },
        {
          id: '3-play',
          label: 'Cargadores de Auto',
        },
        {
          id: '2-play',
          label: 'Cargadores de Pared',
        },
        {
          id: '2-play',
          label: 'Fundas',
        },
        {
          id: '2-play',
          label: 'Parlantes Bluetooth',
        },
        {
          id: '2-play',
          label: 'Smartwatch y Bandas',
        },
        {
          id: '2-play',
          label: 'Tablets',
        },
        {
          id: '2-play',
          label: 'Otros Accesorios',
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
          id: 'al-contado',
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
          id: 'AirTies',
          label: 'Apple',
        },
        {
          id: 'Claro',
          label: 'EKS',
        },
        {
          id: 'Nova',
          label: 'Huawei',
        },
        {
          id: 'ZTE',
          label: 'Marley',
        },
        {
          id: 'ZTE',
          label: 'Logic',
        },
        {
          id: 'ZTE',
          label: 'Samsung',
        },
        {
          id: 'ZTE',
          label: 'Skullcandy',
        },
        {
          id: 'ZTE',
          label: 'SMK',
        },
        {
          id: 'ZTE',
          label: 'Urbano',
        },
      ],
    },
  ];

  // Catalog Component
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

  // CHIPS CLARO
  public CHIPS_SIDEBAR_LIST_DATA: FilterListModel[] = [
    {
      listId: 'lista',
      listName: 'MODALIDAD',
      options: [
        {
          id: 'portabilidad',
          label: 'Portabilidad',
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
          id: 'chips-claro',
          label: 'Chips Claro',
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
          id: 'al-contado',
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
          id: 'Claro',
          label: 'Claro',
        },
      ],
    },
  ];

  public CHIPS_LIST_DATA: DeviceListModel[] = [
    {
      brand: '',
      deviceName: 'Chip Claro Postpago',
      deviceImgSrc: 'https://static.claro.com.pe/img/otros/chica.png',
      productUrl: '/product/chips',
      modality: 'Portabilidad',
      price: {
        paymentValue: 'S/ 16',
        paymentType: 'Al contado',
      },
      plan: '189.90',
      onlyOnline: false,
    },
    {
      brand: '',
      deviceName: 'Chip Claro Prepago',
      deviceImgSrc: 'https://static.claro.com.pe/img/otros/img_chip_02_02050.png',
      productUrl: '/product/chips',
      modality: 'Portabilidad',
      price: {
        paymentValue: 'S/ 20',
        paymentType: 'Al contado',
      },
      plan: 'Chévere',
      onlyOnline: false,
    },
  ];

  // PRODUCT CHIPS
  public PRODUCT_CHIPS_OTHER_PRODUCTS_LIST_DATA: OtherProductListModel[] = [
    {
      productName: 'Moto G8 Plus 64GB',
      productImgSrc: 'https://static.claro.com.pe/img/otros/img_front_moto_G8Plus_postpago_220x386_DDM.png',
      productUrl: '#',
    },
    {
      productName: 'Chip Claro Postpago',
      productImgSrc: 'https://static.claro.com.pe/img/otros/chica.png',
      productUrl: '#',
    },
    {
      productName: 'iPhone 11 64GB',
      productImgSrc: 'https://static.claro.com.pe/img/otros/iphone-11-Frontal_220x386_PostPago_DDM.png',
      productUrl: '#',
    },
    {
      productName: 'Moto G8 Plus 32GB',
      productImgSrc: 'https://static.claro.com.pe/img/ceq/Motorola_Moto_G8_Play_Frontal_220x386.png',
      productUrl: '#',
    },
    {
      productName: 'Y9 Prime 2019',
      productImgSrc: 'https://static.claro.com.pe/img/otros/Huawei_Y9_Prime_2019_Frontal_220x386_DDM.png',
      productUrl: '#',
    },
    {
      productName: 'Chip Claro Prepago',
      productImgSrc: 'https://static.claro.com.pe/img/otros/img_chip_02_02050.png',
      productUrl: '#',
    },
  ];

  constructor() {}
}
