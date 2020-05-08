import { Component, OnInit } from '@angular/core';
import { FilterListModel } from 'src/app/models/filter-list.model';
import { ConstantsService } from 'src/app/services/constants.service';

@Component({
  selector: 'app-accesorio',
  templateUrl: './accesorio.component.html',
  styleUrls: ['./accesorio.component.scss'],
})
export class AccesorioComponent implements OnInit {
  public filterList: FilterListModel[];
  constructor(private constants: ConstantsService) {
    this.filterList = constants.ACCESORIO_LIST_DATA;
  }

  ngOnInit(): void {}
}
