import { Component, OnInit } from '@angular/core';
import { FilterListModel } from 'src/app/models/filter-list.model';
import { ConstantsService } from 'src/app/services/constants.service';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-accesorio',
  templateUrl: './accesorio.component.html',
  styleUrls: ['./accesorio.component.scss'],
})
export class AccesorioComponent implements OnInit {
  public filterList: FilterListModel[];

  constructor(private constants: ConstantsService, private dataservice: DataService) {}

  ngOnInit() {
    this.filterList = this.constants.ACCESORIO_LIST_DATA;
    /*console.log(this.filterList);
    this.dataservice.data$.emit(this.filterList);
    console.log("emitiendo lista del sidebar...")*/
  }
}
