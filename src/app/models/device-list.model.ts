export interface DeviceListModel {
  brand: string;
  deviceName: string;
  deviceImgSrc: string;
  productUrl: string;
  modality: string;
  price: DevicePrice;
  plan: string;
  onlyOnline: boolean;
}

export interface DevicePrice {
  paymentValue: string;
  paymentType: string;
}
