import { Component, OnInit } from '@angular/core';
import { FilterListModel } from '../../models/filter-list.model';
import { ConstantsService } from '../../services/constants.service';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-hogar',
  templateUrl: './hogar.component.html',
  styleUrls: ['./hogar.component.scss'],
})
export class HogarComponent implements OnInit {
  public filterList: FilterListModel[];

  constructor(private constants: ConstantsService, private dataservice: DataService) {
    // console.log(this.filterList);
    // this.dataservice.data$.emit(this.filterList);
    // console.log("componente hogar");
  }

  ngOnInit() {
    this.filterList = this.constants.HOGAR_LIST_DATA;
    this.dataservice.data$.emit(this.filterList);
    // this.emitir();
    this.dataservice.texto$.emit('FERBUS');
  }

  emitir() {
    console.log('Emitiendo...');
    this.dataservice.texto$.emit('FERBUS');
    this.dataservice.data$.emit(this.filterList);
  }
}
