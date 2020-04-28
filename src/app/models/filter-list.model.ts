export interface FilterListModel {
  listId: string;
  listName: string;
  options: FilterListOptions[];
}

export interface FilterListOptions {
  id: string;
  label: string;
}
