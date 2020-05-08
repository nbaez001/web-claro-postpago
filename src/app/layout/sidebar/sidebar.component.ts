import { Component, Input, OnInit } from '@angular/core';
import { FilterListModel } from '../../models/filter-list.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() filterList: FilterListModel[];
  public showFilterList: boolean;
  public innerWidth: any;
  item: number;

  constructor() {}

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    console.log('tamaño :' + this.innerWidth);
    this.showFilterList = this.innerWidth >= 1280;
  }

  public toggleFilterList() {
    this.showFilterList = !this.showFilterList;
  }
}
