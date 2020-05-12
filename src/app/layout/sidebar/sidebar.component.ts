import { Component, Input, OnInit } from '@angular/core';
import { FilterListModel } from '../../models/filter-list.model';
import { DataService } from './../../services/data.service';

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
  vtexto: string;

  constructor(private dataservice: DataService) {
    this.vtexto = '';
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    console.log('tamaño :' + this.innerWidth);
    this.showFilterList = this.innerWidth >= 1280;

    // console.log(this.showFilterList);

    this.dataservice.data$.subscribe((data) => {
      // this.filterList=data;
      console.log('Entro al Observable data.');
    });

    this.dataservice.texto$.subscribe((vnom) => {
      this.vtexto = vnom;
      console.log('Entro al Observable texto.');
    });
  }

  public toggleFilterList() {
    this.showFilterList = !this.showFilterList;
  }
}
