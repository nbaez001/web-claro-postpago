import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MenuHeaderListModel } from '../../models/menu-header-list.model';
import { ConstantsService } from '../../services/constants.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
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

  constructor(private constants: ConstantsService) {
    this.showMenuMobile = false;
    this.showInputSearch = false;
    this.showContactNumber = false;

    this.menuList = constants.HEADER_MENU_LIST_DATA;

    this.searchShowResults = false;
    this.searchResultsFound = false;
  }

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    if (this.showInputSearch === true) {
      if (this.outsideSearch?.nativeElement.contains(targetElement) !== undefined) {
        const clickedOutside = this.outsideSearch.nativeElement.contains(targetElement);
        if (clickedOutside) {
          this.showInputSearch = false;
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

  public toggleContactNumber() {
    console.log(this.showContactNumber);
    this.showContactNumber = !this.showContactNumber;
  }

  public getSearchResults() {
    if (this.searchInput.length >= 2) {
      this.searchShowResults = true;
      this.searchResultsFound = 'apple'.includes(this.searchInput);
    } else {
      this.searchShowResults = false;
    }
  }
}
