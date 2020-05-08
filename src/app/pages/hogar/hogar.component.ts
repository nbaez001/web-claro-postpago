import { Component, OnInit } from '@angular/core';
import { FilterListModel } from '../../models/filter-list.model';
import { ConstantsService } from '../../services/constants.service';

@Component({
  selector: 'app-hogar',
  templateUrl: './hogar.component.html',
  styleUrls: ['./hogar.component.scss'],
})
export class HogarComponent implements OnInit {
  public filterList: FilterListModel[];

  constructor(private constants: ConstantsService) {
    this.filterList = constants.HOGAR_LIST_DATA;
  }

  ngOnInit() {}
}
