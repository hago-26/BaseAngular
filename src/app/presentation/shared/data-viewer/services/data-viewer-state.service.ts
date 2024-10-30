import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataViewerStateService {

  private filterVisibleSubject = new BehaviorSubject<boolean>(false);
  filterVisible$ = this.filterVisibleSubject.asObservable();

  constructor() { }

  toggleFilters() {
    this.filterVisibleSubject.next(!this.filterVisibleSubject.value);
  }
}
