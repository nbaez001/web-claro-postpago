import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuHeaderListModel } from '../../models/menu-header-list.model';
import { ConstantsService } from '../../services/constants.service';
import { UtilService } from '../../services/util.service';
import { WindowScrollingService } from '../../services/window-scrolling.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('toggleHeight', [
      state(
        'inactive',
        style({
          display: 'none',
          height: '0',
          opacity: '1',
        })
      ),
      state(
        'active',
        style({
          display: 'block',
          height: '*',
          opacity: '1',
        })
      ),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out')),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  @ViewChild('clickOutside') outsideSearch;
  public showMenuMobile: boolean;
  public showInputSearch: boolean;
  public showContactNumber: boolean;

  public menuList: MenuHeaderListModel[];

  public searchInput: string;
  public searchShowResults: boolean;
  public searchResultsFound: boolean;

  navigationSubState: { [menu: string]: string } = {
    Profile: 'inactive',
  };
  activoPhone: boolean;

  constructor(
    private constants: ConstantsService,
    private windowScrollingService: WindowScrollingService,
    private router: Router,
    private util: UtilService
  ) {
    this.showMenuMobile = false;
    this.showInputSearch = false;
    this.showContactNumber = false;

    this.menuList = constants.HEADER_MENU_LIST_DATA;

    this.searchShowResults = false;
    this.searchResultsFound = false;
    this.activoPhone = false;
  }

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    if (this.showInputSearch === true) {
      this.windowScrollingService.disable();
      if (this.outsideSearch?.nativeElement.contains(targetElement) !== undefined) {
        const clickedOutside = this.outsideSearch.nativeElement.contains(targetElement);
        if (clickedOutside) {
          this.showInputSearch = false;
          this.windowScrollingService.enable();
        }
      }
    }
  }

  ngOnInit(): void {}

  public toggleMenuMobile() {
    this.showMenuMobile = !this.showMenuMobile;
  }

  public toggleInputSearch() {
    this.showInputSearch = !this.showInputSearch;
  }

  public toggleContactNumber(menuName: string, event: Event) {
    if (window.innerWidth >= 640) {
      // this.showContactNumber = !this.showContactNumber;
      this.activoPhone = !this.activoPhone;
      event.preventDefault();
      this.navigationSubState[menuName] = this.navigationSubState[menuName] === 'inactive' ? 'active' : 'inactive';
    }
  }

  public getSearchResults() {
    if (this.searchInput.length >= 2) {
      this.searchShowResults = true;
      this.searchResultsFound = 'apple'.includes(this.searchInput.toLowerCase());
    } else {
      this.searchShowResults = false;
    }
  }

  public clearSearchInput() {
    this.searchInput = '';
    this.getSearchResults();
  }

  public redirectToUrl(url: string) {
    this.util.redirectToUrl(url);
  }
}
