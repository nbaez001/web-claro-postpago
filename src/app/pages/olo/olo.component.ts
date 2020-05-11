import { Component, OnInit } from '@angular/core';
import { FilterListModel } from '../../models/filter-list.model';
import { ConstantsService } from '../../services/constants.service';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-olo',
  templateUrl: './olo.component.html',
  styleUrls: ['./olo.component.scss'],
})
export class OloComponent implements OnInit {
  public filterList: FilterListModel[];

  constructor(private constants: ConstantsService, private dataservice: DataService) {}

  ngOnInit(): void {
    this.filterList = this.constants.OLO_LIST_DATA;
  }
}
