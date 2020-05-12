import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ConstantsService } from 'src/app/services/constants.service';
import { BannerPostpaid } from '../../../models/banner-postpaid';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  slidesStore: any[];
  private bannerWCM: string =
    '[Plugin:RequestAttribute key="BannerPostpago" value="tienda virtual library/SA.BannerPostpago" compute="once"]\n' +
    '[Component name="tienda virtual library/bannerpostpago"]';
  public bannerPostpaid: Array<BannerPostpaid>;

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
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
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
  };

  constructor(private constants: ConstantsService) {
    this.slidesStore = constants.HOME_CAROUSEL_LIST_DATA;
  }

  ngOnInit(): void {
    this.bannerPostpaid = JSON.parse(this.bannerWCM);
  }
}
