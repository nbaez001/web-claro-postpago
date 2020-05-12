import { EventEmitter, Injectable } from '@angular/core';
import { FilterListModel } from '../models/filter-list.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  data$ = new EventEmitter<FilterListModel[]>();
  texto$ = new EventEmitter<string>();

  constructor() {}
}
